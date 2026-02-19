# Wabi AI - Medical & Nursing Companion

![Wabi AI](https://img.shields.io/badge/Wabi%20AI-Medical%20%26%20Nursing-green)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

Wabi AI is a specialized medical and nursing assistant designed specifically for Nigerian nurses and nursing students preparing for the NMCN (Nursing and Midwifery Council of Nigeria) licensing examinations.

## 🌟 Features

### 🤖 AI Chat
- Ask any medical or nursing question
- Get evidence-based explanations
- Nigerian healthcare context

### 📚 Practice Questions
- **208 NMCN-style questions**
- **8 categories**:
  - Anatomy & Physiology
  - Pharmacology
  - Medical-Surgical Nursing
  - Maternal & Child Health
  - Community Health Nursing
  - Mental Health Nursing
  - Nursing Fundamentals
  - Professional Nursing

### 📊 Progress Tracking
- Track your accuracy by category
- Daily streak tracking
- Bookmark difficult questions

### 💼 Career Hub
- Nursing career paths in Nigeria
- Professional development tips
- NMCN exam success strategies

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/wabiifour-tech/wabi-ai.git

# Navigate to the directory
cd wabi-ai

# Install dependencies
npm install
# or
bun install

# Run the development server
npm run dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: z-ai-web-dev-sdk
- **UI Components**: Custom components with Tailwind

## 📁 Project Structure

```
wabi-ai/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── chat/route.ts        # AI chat API
│   │   │   └── questions/route.ts   # Questions API
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx                 # Main application
│   ├── components/
│   │   └── ui/                      # UI components
│   └── lib/
│       ├── questions-bank.ts        # 208 NMCN questions
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## 📝 Question Categories

| Category | Questions |
|----------|-----------|
| Anatomy & Physiology | 26 |
| Pharmacology | 26 |
| Medical-Surgical Nursing | 26 |
| Maternal & Child Health | 26 |
| Community Health Nursing | 26 |
| Mental Health Nursing | 26 |
| Nursing Fundamentals | 26 |
| Professional Nursing | 26 |
| **Total** | **208** |

## 🎯 NMCN Exam Preparation

Wabi AI is designed to help you prepare for the NMCN licensing examination with:

- Realistic exam-style questions
- Detailed explanations for each answer
- References to nursing textbooks
- Progress tracking to identify weak areas
- Daily practice recommendations

## 📱 Responsive Design

Wabi AI is fully responsive and works on:
- Desktop browsers
- Tablets
- Mobile phones

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Author

**Wabi AI Team**
- For Nigerian Nurses, By Nigerian Nurses

---

Made with ❤️ for Nigerian nursing students and professionals
