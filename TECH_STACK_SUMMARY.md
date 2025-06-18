# 📊 Project Tech Stack Summary: LINE + ChatGPT Business Bot

This file summarizes all the tools, technologies, and workflow steps used in this project, so it can be reused or cloned for future LINE-integrated AI bots.

---

## 📊 Tech Stack Overview

| Layer | Technology / Tool | Purpose |
|-------|-------------------|---------|
| 🤖 Chat engine | **OpenAI API (GPT-4o)** | AI language understanding + generation |
| 📲 Messaging frontend | **LINE Messaging API** | Receive user input / send responses |
| 🌐 HTTP server | **Node.js + Express** | Handle LINE webhook and call OpenAI |
| 🔐 Secrets mgmt | **.env + Railway variables** | Store API keys and system prompt |
| 🚀 Cloud deploy | **Railway** | Host Node.js app with HTTPS and public URL |
| 🔧 Dev tunnel | **ngrok** | Tunnel local server to test webhook from LINE |
| 📃 Source control | **Git + GitHub** | Code versioning, GitHub CI/CD to Railway |
| 💼 LINE tools | **LINE Developer Console + Official Account Manager** | Manage bot config, messaging permissions |

---

## 📆 Toolchain Reference

| Tool | URL | Notes |
|------|-----|-------|
| LINE Developers | https://developers.line.biz/console | Create channel, get secret/token |
| LINE OA Manager | https://manager.line.biz/ | Create/manage official account |
| OpenAI Platform | https://platform.openai.com/account/api-keys | Manage API keys, view usage |
| Railway | https://railway.app/ | One-click deploy, public HTTPS URL |
| ngrok | https://ngrok.com/ | Tunnel localhost:3000 to public for LINE |
| GitHub | https://github.com | Push code, connect to Railway deploy |

---

## 🚀 Deployment Flow (Recap)

1. **Create LINE Official Account**
2. **Enable Messaging API** → get Channel Secret + Access Token
3. **Write Express app**
   - `/webhook` route
   - Call OpenAI Chat Completion API
   - Use `SYSTEM_PROMPT` for assistant behavior
4. **Test locally**
   - Run with `node index.js`
   - Use `ngrok http 3000` to expose
   - Paste `https://xxxxx.ngrok.io/webhook` to LINE Developer Console
5. **Push to GitHub**
6. **Deploy to Railway**
   - Link GitHub repo
   - Set variables (`.env`)
   - Copy public URL → set webhook
7. **Production-ready**
   - CEO can now message via LINE → get GPT reply

---

## 🌟 Project Template Structure

```
line-gpt-bot/
├── index.js             # Express server logic
├── .env.example         # Sample env file
├── README.md            # Full setup guide
├── TECH_STACK_SUMMARY.md # Stack & tools reference (this file)
├── package.json         # Dependencies
├── .gitignore           # Ignore secrets
└── assets/              # (optional) screenshots or logs
```

---

## 📅 Reuse Tips

- Reuse repo as template for future bots
- Rotate API keys by context (dev, prod)
- Change `SYSTEM_PROMPT` for assistant personality
- Track usage per OpenAI key for billing

---

## 🚀 Optional Enhancements

| Feature | Benefit |
|---------|---------|
| Slash commands (`/reset`, `/mode`) | Switch assistant behavior |
| Memory (3-turn dialog) | Maintain simple context |
| Multi-language prompt | Use Chinese for token savings |
| Usage logging | Output conversation to DB/Sheets |
| Admin alert | Notify if key usage exceeds limit |

---

This stack is reusable for any LINE-based bot that connects to OpenAI, and is optimized for restricted regions like China.
