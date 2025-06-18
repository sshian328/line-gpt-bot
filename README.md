# 🤖 LINE + ChatGPT Business Assistant Bot

This project is a LINE Messaging API bot that connects to OpenAI's GPT (gpt-4o or gpt-3.5-turbo) to assist with business communication, translation, and negotiation support. It is specifically designed for executives working in restricted network environments like China, and uses a secure LINE channel for interaction.

---

## ✨ Features

- LINE chat interface with GPT-4o or GPT-3.5
- System prompt defines assistant behavior (customizable)
- Secure communication through `.env` config
- Easy to deploy locally or on Railway
- Designed for business use cases: translation, risk analysis, response drafting

---

## 🚀 Setup & Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/yourname/line-gpt-bot.git
cd line-gpt-bot
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

```env
PORT=3000
LINE_CHANNEL_ACCESS_TOKEN=your_line_token
LINE_CHANNEL_SECRET=your_line_secret
OPENAI_API_KEY=your_openai_key
SYSTEM_PROMPT=You are the CEO’s dedicated business assistant.
```

### 4. Run the bot locally

```bash
node index.js
```

### 5. Expose your local server using ngrok

```bash
ngrok http 3000
```

Copy the `https://xxxx.ngrok.io` URL and paste it into your LINE Developer Console under **Webhook URL**.

---

## 🌐 Deployment (Railway)

1. Push this code to a GitHub repository
2. Go to [https://railway.app](https://railway.app)
3. Click “New Project” → “Deploy from GitHub”
4. Add your environment variables under `Variables`
5. Copy the generated Railway URL and paste it into LINE webhook settings

---

## 📦 Folder Structure

```
line-gpt-bot/
├── index.js          # Main app logic
├── .env              # Environment variables (DO NOT COMMIT)
├── .gitignore
└── package.json
```

---

## 🧐 System Prompt Role

The assistant acts as a professional executive support agent. You can customize the tone and purpose via the `SYSTEM_PROMPT` variable.

---

## 🛡️ Security Notes

- Never commit your `.env` file to GitHub
- Use `.gitignore` to exclude secrets
- In production, consider IP allowlisting or signature validation for LINE webhook

---

## 🧑‍💼 Author

Created by Steven Wu [LinkedIn Profile](https://www.linkedin.com/in/chunshian/)
Feel free to fork or customize for internal business use.
