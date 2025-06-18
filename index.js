const express = require("express");
const { Client, middleware } = require("@line/bot-sdk");
const axios = require("axios");
require("dotenv").config();

const app = express();

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new Client(config);

app.post("/webhook", middleware(config), async (req, res) => {
  const events = req.body.events;
  const results = await Promise.all(
    events.map(async (event) => {
      if (event.type !== "message" || event.message.type !== "text") {
        return;
      }

      const userMessage = event.message.text;

      try {
        const gptReply = await getChatGPTReply(userMessage);

        return client.replyMessage(event.replyToken, {
          type: "text",
          text: gptReply,
        });
      } catch (error) {
        console.error("Error calling ChatGPT:", error.message);
        return client.replyMessage(event.replyToken, {
          type: "text",
          text: "Sorry, something went wrong while processing your request.",
        });
      }
    })
  );
  res.json(results);
});

async function getChatGPTReply(userInput) {
  const response = await axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o", // or "gpt-3.5-turbo"
      messages: [
        {
          role: "system",
          content: process.env.SYSTEM_PROMPT || "You are a helpful assistant.",
        },
        {
          role: "user",
          content: userInput,
        },
      ],
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
    }
  );

  return response.data.choices[0].message.content.trim();
}

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
