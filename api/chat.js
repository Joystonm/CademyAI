const { Groq } = require('groq-sdk');

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const CADEMY_CONTEXT = `CADemy is a 3D modeling education platform with React, Three.js, React Three Fiber. Features: Interactive 3D Environment, Progressive Learning, Challenge-based Learning, Transform Controls (move/rotate/scale). Modes: Playground (free modeling), Challenge (structured learning), Tutorial (guided learning). Tech: React, Three.js, Tailwind CSS, Webpack.`;

async function callGroq(message, isFullMode = false) {
  const prompt = isFullMode 
    ? `You are CADemy's expert assistant. Context: ${CADEMY_CONTEXT}\n\nUser: ${message}\n\nProvide a precise, helpful answer:`
    : `Analyze this CADemy user message and extract: intent, key question, relevant context needed. Context: ${CADEMY_CONTEXT}\n\nUser: ${message}\n\nSummary:`;
  
  const response = await groq.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: 'llama-3.1-8b-instant',
    temperature: 0.1,
    max_tokens: isFullMode ? 500 : 150
  });
  
  return response.choices[0].message.content.trim();
}

async function callOumi(groqSummary, originalMessage) {
  try {
    const response = await fetch('https://api.oumi.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OUMI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'oumi-flash',
        messages: [{
          role: 'user',
          content: `CADemy Expert Assistant. Context: ${CADEMY_CONTEXT}\n\nGroq Analysis: ${groqSummary}\n\nOriginal Question: ${originalMessage}\n\nProvide detailed, step-by-step technical guidance:`
        }],
        temperature: 0.2,
        max_tokens: 800
      }),
      timeout: 8000
    });
    
    if (!response.ok) throw new Error('Oumi API error');
    const data = await response.json();
    return data.choices[0].message.content.trim();
  } catch (error) {
    throw new Error('Oumi failed');
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { message } = req.body;
  
  if (!message?.trim()) {
    return res.status(400).json({ error: 'Message required' });
  }

  try {
    // Step 1: Groq processes and summarizes
    const groqSummary = await callGroq(message);
    
    let finalAnswer;
    let engine = 'Groq fallback';
    
    try {
      // Step 2: Try Oumi for deep reasoning
      finalAnswer = await callOumi(groqSummary, message);
      engine = 'Oumi → Groq summary';
    } catch (oumiError) {
      // Step 3: Groq fallback if Oumi fails
      finalAnswer = await callGroq(message, true);
    }
    
    res.json({
      answer: finalAnswer,
      engine: engine
    });
    
  } catch (error) {
    res.status(500).json({ 
      error: 'Chat service unavailable',
      fallback: 'Please check the CADemy documentation or try refreshing the page.'
    });
  }
}
