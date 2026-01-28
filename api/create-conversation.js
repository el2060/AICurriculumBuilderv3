/**
 * Serverless Function: Create Dante AI Conversation
 * POST /api/create-conversation
 */

const API_KEY = process.env.DANTE_API_KEY || 'DANTE_PUBLIC_eb56865f85305198c05bf4d4955d151ddb2db523705a4cc8a7d6a7581e4767b7';
const KB_ID = '490b0d73-4800-441d-94bf-04ffcefb8650';
const DANTE_BASE_URL = 'https://api-v2.dante-ai.com';

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
    // MODE A: With Knowledge Base
    const endpoint = `${DANTE_BASE_URL}/conversations?kb_id=${KB_ID}&name=AI%20Session`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'x-api-key': API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify([])
    });

    if (!response.ok) {
      console.error(`Dante API error: ${response.status} - ${response.statusText}`);
      const errorText = await response.text();
      console.error('Error details:', errorText);
      return res.status(response.status).json({ 
        error: 'Failed to create conversation',
        details: errorText
      });
    }

    const data = await response.json();

    // Extract conversation ID from response
    const conversationId = data.id || data.conversation_id;

    if (!conversationId) {
      console.error('No conversation ID in response:', data);
      return res.status(500).json({ 
        error: 'Invalid response from Dante API',
        received: data
      });
    }

    return res.status(200).json({ 
      id: conversationId,
      success: true
    });

  } catch (error) {
    console.error('Create conversation error:', error);
    return res.status(500).json({ 
      error: 'Server error',
      message: error.message
    });
  }
};
