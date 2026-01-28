import React, { useState, useRef, useEffect } from 'react';
import { Card, AIRecommendation } from './Layout';
import { queryDanteAI, initConversation } from '../utils/danteAI';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: Date;
  isLoading?: boolean;
}

export const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      sender: 'ai',
      text: 'READY. I am your curriculum design AI assistant powered by Dante AI. I can help you create, refine, and optimize curricula for Ngee Ann Polytechnic.',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize Dante AI conversation on mount
  useEffect(() => {
    const initializeConversation = async () => {
      try {
        await initConversation();
      } catch (error) {
        console.error('Failed to initialize AI conversation:', error);
      }
    };
    initializeConversation();
  }, []);

  // Auto-scroll to latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (inputValue.trim() || isLoading) {
      return;
    }

    const userText = inputValue.trim();
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date()
    };
    setMessages([...messages, newMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Show loading indicator
      const loadingMessage: Message = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: 'Thinking...',
        timestamp: new Date(),
        isLoading: true
      };
      setMessages(prev => [...prev, loadingMessage]);

      // Query Dante AI
      const response = await queryDanteAI(userText, 'gpt-5.1');

      // Remove loading message and add actual response
      setMessages(prev => [
        ...prev.filter(m => !m.isLoading),
        {
          id: (Date.now() + 2).toString(),
          sender: 'ai',
          text: response || 'I encountered an error processing your request. Please try again.',
          timestamp: new Date()
        }
      ]);
    } catch (error) {
      console.error('Error querying AI:', error);
      setMessages(prev => [
        ...prev.filter(m => !m.isLoading),
        {
          id: (Date.now() + 2).toString(),
          sender: 'ai',
          text: `Error: ${error instanceof Error ? error.message : 'Failed to get response from AI. Please check your connection and try again.'}`,
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickAction = async (action: string) => {
    let prompt = '';
    
    switch (action) {
      case 'Generate Learning Outcomes':
        prompt = 'Generate SMART learning outcomes for a software development course targeting industry professionals.';
        break;
      case 'Create Assessment Rubric':
        prompt = 'Create a comprehensive assessment rubric for evaluating student projects in web development.';
        break;
      case 'Module Structure':
        prompt = 'Design a logical module structure for a 12-week data science bootcamp including topics and durations.';
        break;
      case 'Alignment Check':
        prompt = 'Check alignment between a curriculum and industry standards for cybersecurity certifications.';
        break;
      case 'Timeline Builder':
        prompt = 'Create a realistic 16-week course timeline with activities, assessments, and review periods.';
        break;
      case 'Resources':
        prompt = 'Suggest 5 key resources and tools for teaching cloud computing concepts effectively.';
        break;
    }

    if (prompt) {
      setInputValue(prompt);
      // Trigger send after state updates
      setTimeout(() => {
        const userText = prompt;
        const newMessage: Message = {
          id: Date.now().toString(),
          sender: 'user',
          text: userText,
          timestamp: new Date()
        };
        setMessages([...messages, newMessage]);
        setInputValue('');
        setIsLoading(true);

        (async () => {
          try {
            const loadingMessage: Message = {
              id: (Date.now() + 1).toString(),
              sender: 'ai',
              text: 'Thinking...',
              timestamp: new Date(),
              isLoading: true
            };
            setMessages(prev => [...prev, loadingMessage]);

            const response = await queryDanteAI(userText, 'gpt-5.1');
            setMessages(prev => [
              ...prev.filter(m => !m.isLoading),
              {
                id: (Date.now() + 2).toString(),
                sender: 'ai',
                text: response || 'I encountered an error processing your request. Please try again.',
                timestamp: new Date()
              }
            ]);
          } catch (error) {
            console.error('Error:', error);
            setMessages(prev => [
              ...prev.filter(m => !m.isLoading),
              {
                id: (Date.now() + 2).toString(),
                sender: 'ai',
                text: `Error: ${error instanceof Error ? error.message : 'Failed to get response from AI.'}`,
                timestamp: new Date()
              }
            ]);
          } finally {
            setIsLoading(false);
          }
        })();
      }, 50);
    }
  };

  return (
    <div className="space-y-10">
      <div className="border-b-4 border-black pb-8">
        <h2 className="text-5xl font-black uppercase tracking-widest mb-3">AI ASSISTANT</h2>
        <p className="text-lg uppercase tracking-widest font-bold">Get real-time suggestions for curriculum design</p>
      </div>

      <div className="grid grid-cols-3 gap-6 mb-10">
        <div className="border-4 border-black bg-white p-8">
          <div className="text-4xl font-black mb-3">[■]</div>
          <h4 className="font-black uppercase tracking-wider text-base mb-3">DESIGN CURRICULUM</h4>
          <p className="text-sm uppercase tracking-wider font-bold">Create new curriculum with guided steps</p>
        </div>
        <div className="border-4 border-black bg-white p-8">
          <div className="text-4xl font-black mb-3">[✎]</div>
          <h4 className="font-black uppercase tracking-wider text-base mb-3">WRITE CONTENT</h4>
          <p className="text-sm uppercase tracking-wider font-bold">Generate modules and learning materials</p>
        </div>
        <div className="border-4 border-black bg-white p-8">
          <div className="text-4xl font-black mb-3">[◆]</div>
          <h4 className="font-black uppercase tracking-wider text-base mb-3">ASSESSMENT</h4>
          <p className="text-sm uppercase tracking-wider font-bold">Build rubrics and evaluation tools</p>
        </div>
      </div>

      {/* Chat Area */}
      <Card title="CHAT WITH AI ASSISTANT">
        <div className="space-y-6">
          {/* Messages */}
          <div className="border-3 border-black bg-white min-h-96 p-8 space-y-6 overflow-y-auto font-mono">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm p-6 border-3 border-black ${
                    msg.sender === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white text-black'
                  } ${msg.isLoading ? 'animate-pulse' : ''}`}
                >
                  <p className="text-base uppercase tracking-wider font-bold whitespace-pre-wrap">{msg.text}</p>
                  <p className="text-sm mt-3 opacity-70 uppercase tracking-widest">
                    {msg.timestamp.toLocaleTimeString()}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex gap-3">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask me about curriculum design..."
              disabled={isLoading}
              className="text-base disabled:opacity-50"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !inputValue.trim()}
              className="btn-primary px-10 py-4 text-base disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? '[⟳] THINKING...' : '[→] SEND'}
            </button>
          </div>
        </div>
      </Card>

      {/* AI Capabilities */}
      <AIRecommendation 
        title="AI ASSISTANT CAPABILITIES"
        items={[
          'Suggest learning outcomes based on job descriptions',
          'Generate assessment rubrics and evaluation frameworks',
          'Create course timelines and schedules',
          'Recommend teaching strategies and resources'
        ]}
      />

      {/* Quick Actions */}
      <div className="border-4 border-black bg-black text-white p-8">
        <h4 className="font-black uppercase tracking-wider text-2xl mb-6">QUICK ACTIONS</h4>
        <div className="grid grid-cols-3 gap-4">
          {[
            'Generate Learning Outcomes',
            'Create Assessment Rubric',
            'Module Structure',
            'Alignment Check',
            'Timeline Builder',
            'Resources'
          ].map((action) => (
            <button
              key={action}
              onClick={() => handleQuickAction(action)}
              disabled={isLoading}
              className="border-3 border-white text-white p-6 font-black uppercase tracking-wider text-sm hover:bg-white hover:text-black transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              [◆] {action}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
