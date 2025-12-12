import React, { useState, useRef, useEffect } from 'react';

const CADARA_CONTEXT = `Cadara is a 3D modeling education platform with React, Three.js, React Three Fiber. Features: Interactive 3D Environment, Progressive Learning, Challenge-based Learning, Transform Controls (move/rotate/scale). Modes: Playground (free modeling), Challenge (structured learning), Tutorial (guided learning). Tech: React, Three.js, Tailwind CSS, Webpack.`;

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
          content: `You are an educational 3D-modeling assistant for Cadara. Your responses must always be short, precise, and structured. Do not use stars or decorative formatting.

When answering any question, follow this format:
- Definition or direct answer (1–2 lines)
- Key points or types (bullet points, short)
- Why it matters or where it is used (1–2 lines)

Avoid long paragraphs. Avoid unnecessary explanation. Focus only on clear, factual output.
Do not introduce yourself or ask what mode the user wants.

Context: ${CADARA_CONTEXT}

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
        engine: 'AI'
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
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-2xl shadow-2xl transition-all duration-300 flex items-center justify-center z-50 hover:scale-110 ${
          isOpen ? 'rotate-45' : 'hover:shadow-teal-500/25'
        }`}
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        )}
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-24 right-6 w-96 h-[32rem] transition-all duration-300 z-50 ${
        isOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
      }`}>
        <div className="h-full bg-slate-900/95 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-teal-500/20 to-blue-500/20 backdrop-blur-md border-b border-slate-700/50 p-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">AI</span>
              </div>
              <div>
                <h3 className="font-semibold text-white">Cadara Assistant</h3>
                <p className="text-xs text-slate-400">3D modeling expert • Always online</p>
              </div>
              <div className="ml-auto">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
            {messages.length === 0 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <p className="text-slate-400 text-sm mb-2">Hi! I'm your CAD assistant</p>
                <p className="text-slate-500 text-xs">Ask me about 3D modeling, tools, or debugging</p>
              </div>
            )}
            
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${msg.type === 'user' ? 'order-2' : 'order-1'}`}>
                  {msg.type === 'bot' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-blue-500 rounded-md flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AI</span>
                      </div>
                      <span className="text-xs text-slate-400">Cadara Assistant</span>
                    </div>
                  )}
                  <div className={`p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.type === 'user' 
                      ? 'bg-gradient-to-br from-teal-500 to-blue-500 text-white ml-4' 
                      : 'bg-slate-800/50 backdrop-blur-md border border-slate-700/30 text-slate-100 mr-4'
                  }`}>
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                    {msg.engine && (
                      <div className="text-xs opacity-60 mt-2 flex items-center space-x-1">
                        <div className="w-1 h-1 bg-current rounded-full"></div>
                        <span>Powered by {msg.engine}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
            {loading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-5 h-5 bg-gradient-to-br from-teal-400 to-blue-500 rounded-md flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <span className="text-xs text-slate-400">Cadara Assistant</span>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-md border border-slate-700/30 p-3 rounded-2xl mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-slate-700/50 bg-slate-800/30 backdrop-blur-md">
            <div className="flex space-x-3">
              <div className="flex-1 relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about CAD concepts, tools, or debugging..."
                  className="w-full bg-slate-700/50 border border-slate-600/50 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-400 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500/50 focus:border-teal-500/50 transition-all duration-200"
                  rows="1"
                  disabled={loading}
                  style={{ minHeight: '44px', maxHeight: '120px' }}
                />
              </div>
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="w-11 h-11 bg-gradient-to-br from-teal-500 to-blue-500 text-white rounded-xl hover:shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 transition-all duration-200 flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
