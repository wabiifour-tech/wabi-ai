'use client'

import { useState, useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { cn } from '@/lib/utils'
import { 
  Brain, MessageCircle, BookOpen, GraduationCap, Send, ChevronRight, 
  CheckCircle, XCircle, RefreshCw, Trophy, Clock, Target, Lightbulb,
  Menu, X, Home, BookMarked, Award, TrendingUp, Play, ArrowLeft,
  Flame, Star, Briefcase, Heart, Users
} from 'lucide-react'
import { categories, questions, type Question, type QuizProgress, loadProgress, saveProgress } from '@/lib/questions-bank'

type View = 'home' | 'chat' | 'quiz' | 'results' | 'career'

export default function WabiAI() {
  const [currentView, setCurrentView] = useState<View>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [progress, setProgress] = useState<QuizProgress>({
    totalAnswered: 0,
    correctAnswers: 0,
    categoryStats: {},
    lastPracticeDate: new Date().toISOString(),
    streak: 0,
    bookmarkedQuestions: []
  })

  useEffect(() => {
    const saved = loadProgress()
    if (saved) {
      setProgress(saved)
    }
  }, [])

  const updateProgress = (updates: Partial<QuizProgress>) => {
    const newProgress = { ...progress, ...updates }
    setProgress(newProgress)
    saveProgress(newProgress)
  }

  const accuracy = progress.totalAnswered > 0 
    ? Math.round((progress.correctAnswers / progress.totalAnswered) * 100) 
    : 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className="absolute left-0 top-0 h-full w-64 bg-white shadow-xl p-4" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-gray-900">Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="space-y-2">
              <button onClick={() => { setCurrentView('home'); setMobileMenuOpen(false) }} 
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-left">
                <Home className="w-5 h-5 text-green-600" />
                <span>Home</span>
              </button>
              <button onClick={() => { setCurrentView('chat'); setMobileMenuOpen(false) }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-left">
                <MessageCircle className="w-5 h-5 text-green-600" />
                <span>AI Chat</span>
              </button>
              <button onClick={() => { setCurrentView('quiz'); setMobileMenuOpen(false) }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-left">
                <BookOpen className="w-5 h-5 text-green-600" />
                <span>Practice</span>
              </button>
              <button onClick={() => { setCurrentView('career'); setMobileMenuOpen(false) }}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-left">
                <Briefcase className="w-5 h-5 text-green-600" />
                <span>Career Hub</span>
              </button>
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="relative z-10 bg-white/10 backdrop-blur-sm border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </Button>
            <button onClick={() => setCurrentView('home')} className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white">Wabi AI</h1>
                <p className="text-xs text-green-200">Medical & Nursing Companion</p>
              </div>
            </button>
          </div>

          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => setCurrentView('home')} 
              className={cn("text-sm font-medium transition-colors", currentView === 'home' ? 'text-white' : 'text-white/70 hover:text-white')}>
              Home
            </button>
            <button onClick={() => setCurrentView('chat')}
              className={cn("text-sm font-medium transition-colors", currentView === 'chat' ? 'text-white' : 'text-white/70 hover:text-white')}>
              AI Chat
            </button>
            <button onClick={() => setCurrentView('quiz')}
              className={cn("text-sm font-medium transition-colors", currentView === 'quiz' ? 'text-white' : 'text-white/70 hover:text-white')}>
              Practice
            </button>
            <button onClick={() => setCurrentView('career')}
              className={cn("text-sm font-medium transition-colors", currentView === 'career' ? 'text-white' : 'text-white/70 hover:text-white')}>
              Career Hub
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">{progress.streak} day streak</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Trophy className="w-4 h-4 text-yellow-400" />
              <span className="text-sm font-medium text-white">{accuracy}%</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        {currentView === 'home' && (
          <HomePage 
            onNavigate={setCurrentView} 
            progress={progress}
            accuracy={accuracy}
          />
        )}
        {currentView === 'chat' && (
          <ChatView onBack={() => setCurrentView('home')} />
        )}
        {currentView === 'quiz' && (
          <QuizView 
            onBack={() => setCurrentView('home')} 
            onShowResults={() => setCurrentView('results')}
            progress={progress}
            updateProgress={updateProgress}
          />
        )}
        {currentView === 'results' && (
          <ResultsView 
            onBack={() => setCurrentView('home')}
            onPracticeMore={() => setCurrentView('quiz')}
            progress={progress}
            accuracy={accuracy}
          />
        )}
        {currentView === 'career' && (
          <CareerView onBack={() => setCurrentView('home')} />
        )}
      </main>
    </div>
  )
}

// ============== HOME PAGE ==============
function HomePage({ 
  onNavigate, 
  progress, 
  accuracy 
}: { 
  onNavigate: (view: View) => void
  progress: QuizProgress
  accuracy: number
}) {
  const stats = {
    totalQuestions: 208,
    categories: 8,
    answered: progress.totalAnswered,
    accuracy
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-3xl shadow-2xl mb-6">
          <Brain className="w-14 h-14 text-green-600" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Welcome to Wabi AI
        </h1>
        <p className="text-green-200 text-lg max-w-2xl mx-auto">
          Your AI-powered companion for NMCN exam preparation, medical knowledge, and nursing career guidance
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="bg-white/10 backdrop-blur border-white/20">
          <CardContent className="p-4 text-center">
            <BookOpen className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stats.totalQuestions}</p>
            <p className="text-sm text-green-200">Questions</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur border-white/20">
          <CardContent className="p-4 text-center">
            <Target className="w-8 h-8 text-teal-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stats.categories}</p>
            <p className="text-sm text-green-200">Categories</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur border-white/20">
          <CardContent className="p-4 text-center">
            <CheckCircle className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stats.answered}</p>
            <p className="text-sm text-green-200">Answered</p>
          </CardContent>
        </Card>
        <Card className="bg-white/10 backdrop-blur border-white/20">
          <CardContent className="p-4 text-center">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-2xl font-bold text-white">{stats.accuracy}%</p>
            <p className="text-sm text-green-200">Accuracy</p>
          </CardContent>
        </Card>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* AI Chat */}
        <Card 
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('chat')}
        >
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">AI Chat</h3>
            <p className="text-gray-600 text-sm mb-4">Ask medical questions, get explanations, and learn from AI</p>
            <div className="flex items-center text-green-600 text-sm font-medium">
              Start Chatting <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>

        {/* Practice Questions */}
        <Card 
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('quiz')}
        >
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Practice</h3>
            <p className="text-gray-600 text-sm mb-4">208 NMCN-style questions across 8 categories</p>
            <div className="flex items-center text-blue-600 text-sm font-medium">
              Start Practice <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>

        {/* Daily Challenge */}
        <Card 
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('quiz')}
        >
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Daily Practice</h3>
            <p className="text-gray-600 text-sm mb-4">Build your streak with daily practice sessions</p>
            <div className="flex items-center text-orange-600 text-sm font-medium">
              Today&apos;s Challenge <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>

        {/* Career Hub */}
        <Card 
          className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
          onClick={() => onNavigate('career')}
        >
          <CardContent className="p-6">
            <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Career Hub</h3>
            <p className="text-gray-600 text-sm mb-4">Career guidance and professional development tips</p>
            <div className="flex items-center text-pink-600 text-sm font-medium">
              Explore Careers <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Question Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(cat => {
            const catStats = progress.categoryStats[cat.id] || { answered: 0, correct: 0 }
            const catAccuracy = catStats.answered > 0 
              ? Math.round((catStats.correct / catStats.answered) * 100) 
              : 0
            
            return (
              <Card 
                key={cat.id}
                className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all cursor-pointer"
                onClick={() => onNavigate('quiz')}
              >
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{cat.icon}</span>
                    <div>
                      <h3 className="font-semibold text-white text-sm">{cat.name}</h3>
                      <p className="text-xs text-green-200">{catAccuracy}% accuracy</p>
                    </div>
                  </div>
                  <Progress value={catAccuracy} className="h-1" />
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}

// ============== CHAT VIEW ==============
function ChatView({ onBack }: { onBack: () => void }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m Wabi AI, your medical and nursing companion. I\'m here to help you prepare for your NMCN exams, understand medical concepts, and provide career guidance. What would you like to learn about today?' 
    }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || loading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          messages: [...messages, { role: 'user', content: userMessage }].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      })

      const data = await res.json()
      
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || 'I apologize, I couldn\'t process that. Please try again.' 
      }])
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'I\'m sorry, I encountered an error. Please try again.' 
      }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-[calc(100vh-180px)] flex flex-col animate-fade-in">
      <div className="flex items-center gap-3 mb-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-teal-500 rounded-xl flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">AI Chat</h2>
            <p className="text-xs text-green-200">Ask any medical or nursing question</p>
          </div>
        </div>
      </div>

      <Card className="flex-1 bg-white/10 backdrop-blur border-white/20 overflow-hidden">
        <CardContent className="p-0 h-full flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={cn(
                  "max-w-[85%] p-4 rounded-2xl animate-fade-in",
                  msg.role === 'user' 
                    ? "bg-gradient-to-r from-green-500 to-teal-500 text-white ml-auto" 
                    : "bg-white/20 text-white"
                )}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            ))}
            {loading && (
              <div className="bg-white/20 text-white p-4 rounded-2xl max-w-[85%] animate-pulse">
                <p>Thinking...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/20">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask a medical question..."
                className="flex-1 bg-white/20 text-white placeholder-white/50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400"
              />
              <Button 
                onClick={sendMessage} 
                disabled={loading || !input.trim()}
                className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
              >
                <Send className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ============== QUIZ VIEW ==============
function QuizView({ 
  onBack, 
  onShowResults,
  progress,
  updateProgress
}: { 
  onBack: () => void
  onShowResults: () => void
  progress: QuizProgress
  updateProgress: (updates: Partial<QuizProgress>) => void
}) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [sessionCorrect, setSessionCorrect] = useState(0)
  const [sessionAnswered, setSessionAnswered] = useState(0)

  const startQuiz = (categoryId: string | null) => {
    setSelectedCategory(categoryId)
    const qs = categoryId 
      ? questions.filter(q => q.category === categoryId) 
      : questions
    const shuffled = [...qs].sort(() => Math.random() - 0.5).slice(0, 10)
    setQuizQuestions(shuffled)
    setCurrentIndex(0)
    setSelectedAnswer(null)
    setShowExplanation(false)
    setSessionCorrect(0)
    setSessionAnswered(0)
  }

  const handleAnswer = (answerIndex: number) => {
    if (selectedAnswer !== null) return
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    setSessionAnswered(prev => prev + 1)
    
    const isCorrect = answerIndex === quizQuestions[currentIndex].correctAnswer
    if (isCorrect) {
      setSessionCorrect(prev => prev + 1)
    }

    // Update progress
    const catId = quizQuestions[currentIndex].category
    const catStats = progress.categoryStats[catId] || { answered: 0, correct: 0 }
    updateProgress({
      totalAnswered: progress.totalAnswered + 1,
      correctAnswers: progress.correctAnswers + (isCorrect ? 1 : 0),
      categoryStats: {
        ...progress.categoryStats,
        [catId]: {
          answered: catStats.answered + 1,
          correct: catStats.correct + (isCorrect ? 1 : 0)
        }
      },
      lastPracticeDate: new Date().toISOString()
    })
  }

  const nextQuestion = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      onShowResults()
    }
  }

  if (quizQuestions.length === 0) {
    return (
      <div className="space-y-6 animate-fade-in">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold text-white">Practice Questions</h2>
        </div>

        {/* Quick Start */}
        <Card 
          className="bg-gradient-to-r from-green-500 to-teal-500 text-white cursor-pointer hover:shadow-xl transition-shadow"
          onClick={() => startQuiz(null)}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <Play className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Quick Practice</h3>
              <p className="text-white/80">10 random questions from all categories</p>
            </div>
            <ChevronRight className="w-8 h-8 ml-auto" />
          </CardContent>
        </Card>

        {/* Categories */}
        <h3 className="text-lg font-semibold text-white">Or choose a category:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {categories.map(cat => (
            <Card 
              key={cat.id}
              className="bg-white/10 backdrop-blur border-white/20 hover:bg-white/20 transition-all cursor-pointer"
              onClick={() => startQuiz(cat.id)}
            >
              <CardContent className="p-4 flex items-center gap-4">
                <span className="text-3xl">{cat.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-white">{cat.name}</h3>
                  <p className="text-sm text-green-200">
                    {questions.filter(q => q.category === cat.id).length} questions
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-white/50" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  const currentQuestion = quizQuestions[currentIndex]
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setQuizQuestions([])} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="text-xl font-bold text-white">
              {selectedCategory ? categories.find(c => c.id === selectedCategory)?.name : 'Quick Practice'}
            </h2>
            <p className="text-sm text-green-200">Question {currentIndex + 1} of {quizQuestions.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-white/10 text-white border-white/20">
            {sessionCorrect}/{sessionAnswered} correct
          </Badge>
        </div>
      </div>

      <Progress value={(currentIndex / quizQuestions.length) * 100} className="h-2" />

      <Card className="bg-white shadow-xl">
        <CardContent className="p-6">
          {/* Question */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Badge className={cn(
                "text-white",
                currentQuestion.difficulty === 'easy' && 'bg-green-500',
                currentQuestion.difficulty === 'medium' && 'bg-yellow-500',
                currentQuestion.difficulty === 'hard' && 'bg-red-500'
              )}>
                {currentQuestion.difficulty}
              </Badge>
              <Badge variant="outline">
                {categories.find(c => c.id === currentQuestion.category)?.name}
              </Badge>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">{currentQuestion.question}</h3>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={selectedAnswer !== null}
                className={cn(
                  "w-full p-4 text-left rounded-xl border-2 transition-all",
                  selectedAnswer === null && "hover:border-green-400 hover:bg-green-50",
                  selectedAnswer === i && selectedAnswer === currentQuestion.correctAnswer && "border-green-500 bg-green-100",
                  selectedAnswer === i && selectedAnswer !== currentQuestion.correctAnswer && "border-red-500 bg-red-100",
                  selectedAnswer !== null && i === currentQuestion.correctAnswer && "border-green-500 bg-green-100",
                  selectedAnswer === null && "border-gray-200"
                )}
              >
                <div className="flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-medium text-sm">
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="flex-1">{option}</span>
                  {selectedAnswer !== null && i === currentQuestion.correctAnswer && (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  )}
                  {selectedAnswer === i && selectedAnswer !== currentQuestion.correctAnswer && (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Explanation */}
          {showExplanation && (
            <div className={cn(
              "mt-6 p-4 rounded-xl",
              isCorrect ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"
            )}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Lightbulb className="w-5 h-5 text-yellow-600" />
                )}
                <h4 className="font-semibold text-gray-900">Explanation</h4>
              </div>
              <p className="text-gray-700 text-sm">{currentQuestion.explanation}</p>
              {currentQuestion.reference && (
                <p className="text-xs text-gray-500 mt-2">Reference: {currentQuestion.reference}</p>
              )}
            </div>
          )}

          {/* Next Button */}
          {selectedAnswer !== null && (
            <div className="mt-6">
              <Button 
                onClick={nextQuestion}
                className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
              >
                {currentIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// ============== RESULTS VIEW ==============
function ResultsView({ 
  onBack, 
  onPracticeMore,
  progress,
  accuracy 
}: { 
  onBack: () => void
  onPracticeMore: () => void
  progress: QuizProgress
  accuracy: number
}) {
  return (
    <div className="max-w-lg mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Practice Complete!</h2>
      </div>

      <Card className="bg-white shadow-xl text-center">
        <CardContent className="p-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Great Job!</h3>
          <p className="text-gray-600 mb-6">You&apos;re making progress</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-3xl font-bold text-green-600">{accuracy}%</p>
              <p className="text-sm text-gray-500">Overall Accuracy</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-3xl font-bold text-blue-600">{progress.totalAnswered}</p>
              <p className="text-sm text-gray-500">Questions Answered</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button 
              variant="outline" 
              onClick={onBack}
              className="flex-1"
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button 
              onClick={onPracticeMore}
              className="flex-1 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              Practice More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ============== CAREER VIEW ==============
function CareerView({ onBack }: { onBack: () => void }) {
  const careerPaths = [
    {
      title: 'Registered Nurse (RN)',
      description: 'The foundation of nursing practice in Nigeria. Requires diploma or degree from NMCN-approved school.',
      requirements: ['Diploma in Nursing (3 years) or BNSc (5 years)', 'Pass NMCN licensing exam', 'Register with NMCN'],
      icon: <Heart className="w-6 h-6" />,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Nurse Midwife (RM)',
      description: 'Specialized in maternal and newborn care. Can practice independently in Nigeria.',
      requirements: ['RN qualification', 'Post-basic midwifery program (18 months)', 'Register as RM with NMCN'],
      icon: <Users className="w-6 h-6" />,
      color: 'from-pink-500 to-purple-500'
    },
    {
      title: 'Nurse Educator',
      description: 'Train the next generation of nurses in academic or clinical settings.',
      requirements: ['BNSc or higher', 'Minimum 5 years clinical experience', 'Masters in Nursing Education (preferred)'],
      icon: <GraduationCap className="w-6 h-6" />,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Nurse Administrator',
      description: 'Lead nursing teams and manage healthcare facilities.',
      requirements: ['BNSc minimum, Masters preferred', 'Extensive clinical experience', 'Management training'],
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Specialty Nurse',
      description: 'Focus on specific areas like ICU, Emergency, Oncology, or Psychiatry.',
      requirements: ['RN qualification', 'Post-basic specialty training', 'Relevant certifications'],
      icon: <Award className="w-6 h-6" />,
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Public Health Nurse',
      description: 'Work in communities to promote health and prevent disease.',
      requirements: ['RN qualification', 'Public health nursing training', 'Community health experience'],
      icon: <TrendingUp className="w-6 h-6" />,
      color: 'from-emerald-500 to-green-500'
    }
  ]

  const tips = [
    'Build a strong foundation in anatomy, physiology, and pharmacology',
    'Practice past NMCN questions regularly',
    'Join professional associations like NANNM',
    'Stay updated with current nursing practices and guidelines',
    'Seek mentorship from experienced nurses',
    'Develop critical thinking and clinical decision-making skills',
    'Maintain your license through regular CPD activities',
    'Network with other healthcare professionals'
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold text-white">Career Hub</h2>
          <p className="text-sm text-green-200">Nursing career paths and professional development</p>
        </div>
      </div>

      {/* Career Paths */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">Career Paths in Nursing</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {careerPaths.map((path, i) => (
            <Card key={i} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div className={cn("w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white", path.color)}>
                    {path.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{path.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{path.description}</p>
                    <div className="mt-3 space-y-1">
                      {path.requirements.map((req, j) => (
                        <div key={j} className="flex items-center gap-2 text-xs text-gray-500">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Tips */}
      <Card className="bg-white/10 backdrop-blur border-white/20">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            Tips for NMCN Exam Success
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex items-start gap-2 text-sm text-white/90">
                <Lightbulb className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                <span>{tip}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
