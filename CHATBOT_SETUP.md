# CADemy Dual-Engine Chatbot Setup

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Add your API keys to `.env`:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   OUMI_API_KEY=your_oumi_api_key_here
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

## API Keys

- **Groq API Key**: Get from [console.groq.com](https://console.groq.com)
- **Oumi API Key**: Get from [oumi.ai](https://oumi.ai)

## How It Works

1. **Groq** processes user input instantly (1-2 seconds)
2. **Oumi** provides deep reasoning and detailed answers
3. **Automatic fallback** to Groq if Oumi fails
4. **Silent failover** - users never know when fallback occurs

## Features

✅ Ultra-fast responses (Groq-powered)  
✅ Deep technical reasoning (Oumi-powered)  
✅ Automatic failover system  
✅ CADemy-specific knowledge  
✅ Floating chat interface  
✅ Mobile-responsive design  

The chatbot appears as a floating button in the bottom-right corner of your CADemy application.
