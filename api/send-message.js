/**
 * Serverless Function: Send Message to Dante AI
 * POST /api/send-message
 * Body: { question, conversation_id, model }
 */

const API_KEY = process.env.DANTE_API_KEY;
const DANTE_BASE_URL = process.env.DANTE_BASE_URL || 'https://api-v2.dante-ai.com';
const DEFAULT_MODEL = 'gpt-5.1';

// Validate environment variables
if (!API_KEY) {
  throw new Error('DANTE_API_KEY environment variable is not set');
}

export default async (req, res) => {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, x-api-key');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { question, conversation_id, model = 'gpt-5.1' } = req.body;

    // Validate required parameters
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid: question' });
    }

    if (!conversation_id || typeof conversation_id !== 'string') {
      return res.status(400).json({ error: 'Missing or invalid: conversation_id' });
    }

    // Build URL with query parameters (standard API, no knowledge base)
    const url = new URL(`${DANTE_BASE_URL}/model/query`);
    url.searchParams.append('question', question);
    url.searchParams.append('conversation_id', conversation_id);
    url.searchParams.append('model', model || DEFAULT_MODEL);

    console.log('Calling Dante AI:', url.toString());

    const response = await fetch(url.toString(), {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      console.error(`Dante API error: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      return res.status(response.status).json({ 
        error: 'Failed to query AI',
        details: errorText
      });
    }

    const data = await response.json();

    // Parse response: data.result is a Python dict string
    // Replace single quotes with double quotes and parse
    let answer = data.result || data.data || data.answer || '';

    if (typeof answer === 'string' && answer.startsWith('{')) {
      try {
        // Replace Python-style quotes with JSON quotes
        const jsonStr = answer.replace(/'/g, '"');
        const parsed = JSON.parse(jsonStr);
        answer = parsed.data || parsed.answer || answer;
      } catch (e) {
        // If parsing fails, use original answer
        console.warn('Could not parse answer as JSON:', e);
      }
    }

    return res.status(200).json({ 
      answer: answer || 'No response from AI',
      success: true,
      raw: data
    });

  } catch (error) {
    console.error('Send message error:', error);
    return res.status(500).json({ 
      error: 'Server error',
      message: error.message
    });
  }
};
