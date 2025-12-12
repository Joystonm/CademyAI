import React, { useState, useRef, useEffect } from 'react';

const CADEMY_CONTEXT = `CADemy is a 3D modeling education platform with React, Three.js, React Three Fiber. Features: Interactive 3D Environment, Progressive Learning, Challenge-based Learning, Transform Controls (move/rotate/scale). Modes: Playground (free modeling), Challenge (structured learning), Tutorial (guided learning). Tech: React, Three.js, Tailwind CSS, Webpack.`;

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const callGroq = async (message) => {
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.1-8b-instant',
        messages: [{
          role: 'user',
          content: `You are an educational 3D-modeling assistant for CADemy. Your responses must always be short, precise, and structured. Do not use stars or decorative formatting.

When answering any question, follow this format:
- Definition or direct answer (1–2 lines)
- Key points or types (bullet points, short)
- Why it matters or where it is used (1–2 lines)

Avoid long paragraphs. Avoid unnecessary explanation. Focus only on clear, factual output.
Do not introduce yourself or ask what mode the user wants.

Context: ${CADEMY_CONTEXT}

User: ${message}`
        }],
        temperature: 0.1,
        max_tokens: 300
      })
    });
    
    const data = await response.json();
    return data.choices[0].message.content.trim();
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;
    
    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const answer = await callGroq(userMessage);
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: answer,
        engine: 'Groq'
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        type: 'bot', 
        content: 'Sorry, I encountered an error. Please check your API key and try again.' 
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 flex items-center justify-center z-50"
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col z-50">
          <div className="bg-blue-600 text-white p-3 rounded-t-lg">
            <h3 className="font-semibold">CADemy Assistant</h3>
            <p className="text-xs opacity-90">Ask about 3D modeling, errors, or features</p>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-3">
            {messages.length === 0 && (
              <div className="text-gray-500 text-sm">
                👋 Hi! I can help with CAD concepts, debugging, and using CADemy features.
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-2 rounded-lg text-sm ${
                  msg.type === 'user' 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800'
                }`}>
                  {msg.content}
                  {msg.engine && (
                    <div className="text-xs opacity-60 mt-1">({msg.engine})</div>
                  )}
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 p-2 rounded-lg text-sm text-gray-600">
                  Thinking...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-3 border-t border-gray-200">
            <div className="flex space-x-2">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask anything about CADemy..."
                className="flex-1 p-2 border border-gray-300 rounded-lg resize-none text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="1"
                disabled={loading}
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
