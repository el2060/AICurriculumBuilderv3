/**
 * Dante AI Integration Utilities
 * Handles conversation management and AI queries
 */

let conversationId: string | null = null;
const API_BASE = '/api';

/**
 * Initialize a new conversation session with Dante AI
 */
export async function initConversation(): Promise<string | null> {
  try {
    const response = await fetch(`${API_BASE}/create-conversation`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    conversationId = data.id;

    console.log('✅ Dante AI Session initialized:', conversationId);

    // Persist to localStorage
    if (conversationId) {
      localStorage.setItem('dante_conversation_id', conversationId);
    }

    return conversationId;
  } catch (error) {
    console.error('❌ Failed to initialize conversation:', error);
    return null;
  }
}

/**
 * Query the Dante AI with a user question
 */
export async function queryDanteAI(
  userInput: string,
  model: string = 'gpt-5.1',
  systemPrompt: string = ''
): Promise<string | null> {
  // Ensure conversation exists
  if (!conversationId) {
    conversationId = localStorage.getItem('dante_conversation_id');
    if (!conversationId) {
      const initialized = await initConversation();
      if (!initialized) {
        throw new Error('No conversation ID available');
      }
    }
  }

  try {
    // Combine system prompt with user input
    const question = systemPrompt ? `${systemPrompt}\n\n${userInput}` : userInput;

    const response = await fetch(`${API_BASE}/send-message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        question,
        conversation_id: conversationId,
        model
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.answer) {
      console.warn('Empty answer from Dante AI:', data);
      return null;
    }

    console.log('✅ Got AI response:', data.answer.substring(0, 100) + '...');
    return data.answer;
  } catch (error) {
    console.error('❌ Query error:', error);
    throw error;
  }
}

/**
 * Get the current conversation ID
 */
export function getConversationId(): string | null {
  return conversationId;
}

/**
 * Clear conversation (for logout or reset)
 */
export function clearConversation(): void {
  conversationId = null;
  localStorage.removeItem('dante_conversation_id');
  console.log('🔄 Conversation cleared');
}

/**
 * Curriculum-specific AI queries with system prompts
 */
export const CurriculumAI = {
  async generateLearningOutcomes(jobDescription: string, level: string): Promise<string | null> {
    const systemPrompt = `You are an expert curriculum designer for ${level} level education. 
Generate clear, measurable learning outcomes (SMART objectives) based on the following job description.
Format as a numbered list.`;

    return queryDanteAI(jobDescription, 'gpt-5.1', systemPrompt);
  },

  async createAssessmentRubric(topic: string, criteria: string): Promise<string | null> {
    const systemPrompt = `You are an expert in educational assessment. 
Create a detailed assessment rubric for the following topic with clear performance levels.
Include criteria, descriptors, and scoring guidance.`;

    const input = `Topic: ${topic}\nCriteria to assess: ${criteria}`;
    return queryDanteAI(input, 'gpt-5.1', systemPrompt);
  },

  async suggestTeachingStrategies(topic: string, audience: string): Promise<string | null> {
    const systemPrompt = `You are an expert instructional designer. 
Suggest evidence-based teaching strategies and activities for the following topic and audience.
Include rationale for each suggestion.`;

    const input = `Topic: ${topic}\nTarget Audience: ${audience}`;
    return queryDanteAI(input, 'gpt-5.1', systemPrompt);
  },

  async buildModuleStructure(courseTitle: string, duration: string, objectives: string): Promise<string | null> {
    const systemPrompt = `You are an expert course designer. 
Create a logical module structure with topics, subtopics, and estimated durations.
Ensure alignment with stated learning objectives.`;

    const input = `Course: ${courseTitle}\nDuration: ${duration}\nObjectives: ${objectives}`;
    return queryDanteAI(input, 'gpt-5.1', systemPrompt);
  },

  async alignToFramework(curriculum: string, framework: string): Promise<string | null> {
    const systemPrompt = `You are an expert in curriculum alignment. 
Analyze the alignment between the curriculum and the specified framework.
Identify gaps and suggest improvements.`;

    const input = `Curriculum:\n${curriculum}\n\nFramework: ${framework}`;
    return queryDanteAI(input, 'gpt-5.1', systemPrompt);
  },

  async generateTimeline(
    numWeeks: number,
    modules: string,
    assessments: string
  ): Promise<string | null> {
    const systemPrompt = `You are an expert in course scheduling. 
Create a realistic timeline for the course that accommodates learning, practice, and assessment.
Consider cognitive load and spacing of concepts.`;

    const input = `Duration: ${numWeeks} weeks\nModules: ${modules}\nAssessments: ${assessments}`;
    return queryDanteAI(input, 'gpt-5.1', systemPrompt);
  }
};

// Initialize conversation on module load
if (typeof window !== 'undefined') {
  window.addEventListener('load', async () => {
    if (!conversationId && !localStorage.getItem('dante_conversation_id')) {
      await initConversation();
    } else {
      conversationId = localStorage.getItem('dante_conversation_id');
    }
  });
}
