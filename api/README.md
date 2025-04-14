# 🎙️ Vibe Check API

Ever wonder if your message sounds… off? 🤔  
**Vibe Check** is a lightweight REST API that uses OpenAI to analyse the tone of any message and return plain-language feedback.

---

## ✨ Features

- 🔍 **Tone detection** powered by GPT-3.5  
- 💬 Returns human-like suggestions (e.g., “sounds passive-aggressive, try clarifying”)  
- ⚡ Simple API with fast responses  
- 🔒 Easily extensible and self-hostable

---

## 🧪 Example

### Request

`POST /vibe`

```json
{
  "text": "Whatever. I guess it's fine."
}
```

### Response

```json
{
  "vibe": "passive-aggressive",
  "suggestion": "Try to express your preferences more clearly."
}
```

### Status Codes

- `200 OK` – Vibe check successful  
- `400 Bad Request` – No text provided in request  
- `500 Internal Server Error` – Something went wrong while processing the vibe  

---

## 🛠️ Tech Stack

- Node.js  
- Express  
- OpenAI API  
- JavaScript ES6+

---

## 🧭 Roadmap

- [x] Setup basic Express server
- [ ] Connect to OpenAI API
- [ ] Return vibe + suggestion
- [ ] Add error handling with status codes
- [ ] Deploy API to Render or Vercel
- [ ] Build public demo front-end
- [ ] Share first post on X
- [ ] Write a tweet announcing the API
- [ ] Add tone customization (e.g., “make it more professional”)
- [ ] Track basic request analytics (optional)
- [ ] Publish this project on Product Hunt (optional)
