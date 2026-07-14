# 🤖 AI-First CRM HCP Module

An AI-powered Customer Relationship Management (CRM) system for Healthcare Professionals (HCPs). This application helps sales representatives log HCP interactions using an AI assistant, automatically extract important information, and manage interaction history efficiently.

---

# 🚀 Features

- ✅ AI Chat Assistant (Groq LLM + LangGraph)
- ✅ Automatic Interaction Form Filling
- ✅ Log HCP Interactions
- ✅ Edit Interaction
- ✅ Delete Interaction
- ✅ View Interaction History
- ✅ Analytics Dashboard
- ✅ Settings Page
- ✅ Sentiment Analysis
- ✅ AI Follow-up Recommendation
- ✅ Swagger API Documentation
- ✅ MySQL Database Integration

---

# 🛠 Tech Stack

### Frontend
- React.js
- Material UI (MUI)
- React Router
- Axios

### Backend
- FastAPI
- LangGraph
- Groq LLM
- SQLAlchemy

### Database
- MySQL

### Other Tools
- Swagger UI
- Git & GitHub
- Vite

---

# 📂 Project Structure

```
AI-First-CRM-HCP
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── hooks
│   │   ├── services
│   │   ├── routes
│   │   └── App.jsx
│
├── backend
│   ├── app
│   │   ├── routers
│   │   ├── models
│   │   ├── database
│   │   ├── langgraph
│   │   ├── schemas
│   │   └── app.py
│
└── README.md
```

---

# ⚙ Installation

## 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/AI-First-CRM-HCP.git
```

---

## 2️⃣ Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

## 3️⃣ Backend

```bash
cd backend

pip install -r requirements.txt

python -m uvicorn app.app:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger

```
http://127.0.0.1:8000/docs
```

---

# 📌 API Endpoints

## AI Chat

```
POST /chat/
```

## Create Interaction

```
POST /interactions/
```

## Get All Interactions

```
GET /interactions/
```

## Get Interaction By ID

```
GET /interactions/{id}
```

## Update Interaction

```
PUT /interactions/{id}
```

## Delete Interaction

```
DELETE /interactions/{id}
```

---

# 🧠 LangGraph Workflow

```
User Chat
      │
      ▼
LangGraph
      │
      ▼
Groq LLM
      │
      ▼
Extract Information
      │
      ▼
Auto Fill Interaction Form
      │
      ▼
Save to MySQL Database
```

---

# 🤖 LangGraph Tools

The application uses the following AI tools:

1. Log Interaction
2. Edit Interaction
3. Interaction History
4. Sentiment Analysis
5. Follow-up Recommendation

---

# 📊 Functionalities

- AI-assisted interaction logging
- Automatic HCP information extraction
- Interaction history management
- CRUD Operations
- AI-generated meeting summary
- Sentiment Detection
- Follow-up Suggestions
- Analytics Dashboard

---

# 🗄 Database

Database Used:

```
MySQL
```

ORM:

```
SQLAlchemy
```

---

# 📸 Screenshots

Include screenshots of:

- Dashboard
- AI Chat
- Auto Filled Form
- History Page
- Analytics Page
- Swagger UI

---

# 🔮 Future Improvements

- Voice-to-Text Integration
- Authentication & Authorization
- Email Notifications
- Advanced Analytics Charts
- PDF Report Generation
- Role-Based Access Control

---

# 👩‍💻 Developed By

**Ayushi Kumari**

B.Tech Computer Science & Engineering

AI-First CRM HCP 

---

