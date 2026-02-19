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
  Flame, Star, Briefcase, Heart, Users, Calculator, Search, 
  Bookmark, Moon, Sun, Settings, Download, Share2, Timer, Zap,
  FileText, Layers, HelpCircle, ExternalLink, Copy, Check
} from 'lucide-react'
import { categories, questions, type Question, type QuizProgress, loadProgress, saveProgress } from '@/lib/questions-bank'
import { studyNotes, studyTopics, type StudyNote } from '@/lib/study-notes'

type View = 'home' | 'chat' | 'quiz' | 'results' | 'career' | 'study' | 'flashcards' | 'exam' | 'calculator' | 'search' | 'bookmarks'

export default function WabiAI() {
  const [currentView, setCurrentView] = useState<View>('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
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
    const savedTheme = localStorage.getItem('wabi_dark_mode')
    if (savedTheme) {
      setDarkMode(savedTheme === 'true')
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('wabi_dark_mode', String(darkMode))
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const updateProgress = (updates: Partial<QuizProgress>) => {
    const newProgress = { ...progress, ...updates }
    setProgress(newProgress)
    saveProgress(newProgress)
  }

  const toggleBookmark = (questionId: string) => {
    const bookmarked = progress.bookmarkedQuestions.includes(questionId)
    const newBookmarks = bookmarked
      ? progress.bookmarkedQuestions.filter(id => id !== questionId)
      : [...progress.bookmarkedQuestions, questionId]
    updateProgress({ bookmarkedQuestions: newBookmarks })
  }

  const accuracy = progress.totalAnswered > 0 
    ? Math.round((progress.correctAnswers / progress.totalAnswered) * 100) 
    : 0

  const themeClasses = darkMode 
    ? 'bg-gray-900 text-white' 
    : 'bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900'

  return (
    <div className={cn('min-h-screen', themeClasses)}>
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-500 rounded-full blur-3xl"></div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 lg:hidden" onClick={() => setMobileMenuOpen(false)}>
          <div className={cn('absolute left-0 top-0 h-full w-72 shadow-xl p-4', darkMode ? 'bg-gray-800' : 'bg-white')} onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className={cn('text-lg font-bold', darkMode ? 'text-white' : 'text-gray-900')}>Menu</h2>
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                <X className="w-5 h-5" />
              </Button>
            </div>
            <nav className="space-y-2">
              {[
                { view: 'home', icon: Home, label: 'Home' },
                { view: 'chat', icon: MessageCircle, label: 'AI Chat' },
                { view: 'quiz', icon: BookOpen, label: 'Practice' },
                { view: 'exam', icon: Timer, label: 'Exam Mode' },
                { view: 'flashcards', icon: Layers, label: 'Flashcards' },
                { view: 'study', icon: FileText, label: 'Study Notes' },
                { view: 'calculator', icon: Calculator, label: 'Calculators' },
                { view: 'search', icon: Search, label: 'Medical Search' },
                { view: 'bookmarks', icon: Bookmark, label: 'Bookmarks' },
                { view: 'career', icon: Briefcase, label: 'Career Hub' },
              ].map(item => (
                <button 
                  key={item.view}
                  onClick={() => { setCurrentView(item.view as View); setMobileMenuOpen(false) }} 
                  className={cn(
                    'w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors',
                    darkMode ? 'hover:bg-gray-700 text-gray-200' : 'hover:bg-gray-100 text-gray-700'
                  )}
                >
                  <item.icon className="w-5 h-5 text-green-600" />
                  <span>{item.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={cn(
        'relative z-10 backdrop-blur-sm border-b',
        darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/10 border-white/20'
      )}>
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

          <nav className="hidden lg:flex items-center gap-4">
            {['home', 'chat', 'quiz', 'study'].map(view => (
              <button 
                key={view}
                onClick={() => setCurrentView(view as View)} 
                className={cn(
                  "text-sm font-medium transition-colors capitalize",
                  currentView === view ? 'text-white' : 'text-white/70 hover:text-white'
                )}
              >
                {view === 'home' ? 'Home' : view === 'chat' ? 'AI Chat' : view === 'quiz' ? 'Practice' : 'Study'}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="text-white hover:bg-white/10"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button>
            <div className="hidden sm:flex items-center gap-2 bg-white/10 rounded-full px-3 py-1">
              <Flame className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">{progress.streak} day</span>
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
            darkMode={darkMode}
          />
        )}
        {currentView === 'chat' && (
          <ChatView onBack={() => setCurrentView('home')} darkMode={darkMode} />
        )}
        {currentView === 'quiz' && (
          <QuizView 
            onBack={() => setCurrentView('home')} 
            onShowResults={() => setCurrentView('results')}
            progress={progress}
            updateProgress={updateProgress}
            toggleBookmark={toggleBookmark}
            darkMode={darkMode}
          />
        )}
        {currentView === 'results' && (
          <ResultsView 
            onBack={() => setCurrentView('home')}
            onPracticeMore={() => setCurrentView('quiz')}
            progress={progress}
            accuracy={accuracy}
            darkMode={darkMode}
          />
        )}
        {currentView === 'career' && (
          <CareerView onBack={() => setCurrentView('home')} darkMode={darkMode} />
        )}
        {currentView === 'study' && (
          <StudyView onBack={() => setCurrentView('home')} darkMode={darkMode} />
        )}
        {currentView === 'flashcards' && (
          <FlashcardsView onBack={() => setCurrentView('home')} darkMode={darkMode} />
        )}
        {currentView === 'exam' && (
          <ExamView 
            onBack={() => setCurrentView('home')} 
            onShowResults={() => setCurrentView('results')}
            progress={progress}
            updateProgress={updateProgress}
            darkMode={darkMode}
          />
        )}
        {currentView === 'calculator' && (
          <CalculatorView onBack={() => setCurrentView('home')} darkMode={darkMode} />
        )}
        {currentView === 'search' && (
          <SearchView onBack={() => setCurrentView('home')} darkMode={darkMode} />
        )}
        {currentView === 'bookmarks' && (
          <BookmarksView 
            onBack={() => setCurrentView('home')} 
            progress={progress}
            toggleBookmark={toggleBookmark}
            darkMode={darkMode}
          />
        )}
      </main>
    </div>
  )
}

// ============== HOME PAGE ==============
function HomePage({ 
  onNavigate, 
  progress, 
  accuracy,
  darkMode
}: { 
  onNavigate: (view: View) => void
  progress: QuizProgress
  accuracy: number
  darkMode: boolean
}) {
  const stats = {
    totalQuestions: 208,
    categories: 8,
    answered: progress.totalAnswered,
    accuracy,
    bookmarks: progress.bookmarkedQuestions.length
  }

  const features = [
    { view: 'chat' as View, icon: MessageCircle, title: 'AI Chat', desc: 'Ask medical questions', color: 'from-green-500 to-teal-500' },
    { view: 'quiz' as View, icon: BookOpen, title: 'Practice', desc: '208 NMCN questions', color: 'from-blue-500 to-purple-500' },
    { view: 'exam' as View, icon: Timer, title: 'Exam Mode', desc: 'Timed mock exams', color: 'from-red-500 to-orange-500' },
    { view: 'flashcards' as View, icon: Layers, title: 'Flashcards', desc: 'Quick revision', color: 'from-yellow-500 to-amber-500' },
    { view: 'study' as View, icon: FileText, title: 'Study Notes', desc: 'Key medical topics', color: 'from-pink-500 to-rose-500' },
    { view: 'calculator' as View, icon: Calculator, title: 'Calculators', desc: 'Medical formulas', color: 'from-indigo-500 to-blue-500' },
    { view: 'search' as View, icon: Search, title: 'Medical Search', desc: 'Research topics', color: 'from-cyan-500 to-teal-500' },
    { view: 'bookmarks' as View, icon: Bookmark, title: 'Bookmarks', desc: `${stats.bookmarks} saved`, color: 'from-purple-500 to-pink-500' },
  ]

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
          Your complete NMCN exam preparation companion with AI assistance, 208 practice questions, and study resources
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {[
          { icon: BookOpen, value: stats.totalQuestions, label: 'Questions', color: 'text-green-400' },
          { icon: Target, value: stats.categories, label: 'Categories', color: 'text-teal-400' },
          { icon: CheckCircle, value: stats.answered, label: 'Answered', color: 'text-blue-400' },
          { icon: Trophy, value: `${stats.accuracy}%`, label: 'Accuracy', color: 'text-yellow-400' },
          { icon: Bookmark, value: stats.bookmarks, label: 'Bookmarks', color: 'text-pink-400' },
        ].map((stat, i) => (
          <Card key={i} className={cn('backdrop-blur', darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/10 border-white/20')}>
            <CardContent className="p-3 text-center">
              <stat.icon className={cn('w-6 h-6 mx-auto mb-1', stat.color)} />
              <p className="text-xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-green-200">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {features.map((feature, i) => (
          <Card 
            key={i}
            className={cn('cursor-pointer group overflow-hidden transition-all hover:shadow-xl', darkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:shadow-2xl')}
            onClick={() => onNavigate(feature.view)}
          >
            <CardContent className="p-4">
              <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-3 group-hover:scale-110 transition-transform', feature.color)}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className={cn('font-bold mb-1', darkMode ? 'text-white' : 'text-gray-900')}>{feature.title}</h3>
              <p className={cn('text-sm', darkMode ? 'text-gray-400' : 'text-gray-600')}>{feature.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Categories */}
      <div>
        <h2 className="text-xl font-bold text-white mb-4">Question Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {categories.map(cat => {
            const catStats = progress.categoryStats[cat.id] || { answered: 0, correct: 0 }
            const catAccuracy = catStats.answered > 0 
              ? Math.round((catStats.correct / catStats.answered) * 100) 
              : 0
            
            return (
              <Card 
                key={cat.id}
                className={cn('backdrop-blur cursor-pointer transition-all hover:scale-[1.02]', darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/10 border-white/20')}
                onClick={() => onNavigate('quiz')}
              >
                <CardContent className="p-3">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{cat.icon}</span>
                    <div>
                      <h3 className="font-medium text-white text-sm">{cat.name}</h3>
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
function ChatView({ onBack, darkMode }: { onBack: () => void; darkMode: boolean }) {
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { 
      role: 'assistant', 
      content: 'Hello! I\'m Wabi AI, your medical and nursing companion. I can help you with:\n\n• NMCN exam preparation\n• Medical and nursing concepts\n• Drug calculations and dosages\n• Disease explanations\n• Nigerian healthcare context\n\nWhat would you like to learn about?' 
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

      <Card className={cn('flex-1 overflow-hidden', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white/10 backdrop-blur border-white/20')}>
        <CardContent className="p-0 h-full flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, i) => (
              <div 
                key={i} 
                className={cn(
                  'max-w-[85%] p-4 rounded-2xl animate-fade-in',
                  msg.role === 'user' 
                    ? 'bg-gradient-to-r from-green-500 to-teal-500 text-white ml-auto' 
                    : darkMode ? 'bg-gray-700 text-white' : 'bg-white/20 text-white'
                )}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            ))}
            {loading && (
              <div className={cn('p-4 rounded-2xl max-w-[85%] animate-pulse', darkMode ? 'bg-gray-700' : 'bg-white/20')}>
                <p className="text-white">Thinking...</p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className={cn('p-4 border-t', darkMode ? 'border-gray-700' : 'border-white/20')}>
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyPress={e => e.key === 'Enter' && sendMessage()}
                placeholder="Ask a medical question..."
                className={cn(
                  'flex-1 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400',
                  darkMode ? 'bg-gray-700 text-white placeholder-gray-400' : 'bg-white/20 text-white placeholder-white/50'
                )}
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
  updateProgress,
  toggleBookmark,
  darkMode
}: { 
  onBack: () => void
  onShowResults: () => void
  progress: QuizProgress
  updateProgress: (updates: Partial<QuizProgress>) => void
  toggleBookmark: (questionId: string) => void
  darkMode: boolean
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
    if (isCorrect) setSessionCorrect(prev => prev + 1)

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

        <Card 
          className={cn('cursor-pointer transition-shadow hover:shadow-xl', darkMode ? 'bg-gray-800' : 'bg-gradient-to-r from-green-500 to-teal-500 text-white')}
          onClick={() => startQuiz(null)}
        >
          <CardContent className="p-6 flex items-center gap-4">
            <div className={cn('w-16 h-16 rounded-2xl flex items-center justify-center', darkMode ? 'bg-green-600' : 'bg-white/20')}>
              <Play className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Quick Practice</h3>
              <p className={cn('text-sm', darkMode ? 'text-gray-300' : 'text-white/80')}>10 random questions from all categories</p>
            </div>
            <ChevronRight className="w-8 h-8 ml-auto" />
          </CardContent>
        </Card>

        <h3 className="text-lg font-semibold text-white">Or choose a category:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {categories.map(cat => (
            <Card 
              key={cat.id}
              className={cn('cursor-pointer transition-all hover:scale-[1.02]', darkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' : 'bg-white/10 backdrop-blur border-white/20 hover:bg-white/20')}
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
  const isBookmarked = progress.bookmarkedQuestions.includes(currentQuestion.id)

  return (
    <div className="space-y-4 animate-fade-in">
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
          <Button variant="ghost" size="icon" onClick={() => toggleBookmark(currentQuestion.id)} className="text-white hover:bg-white/10">
            <Bookmark className={cn('w-5 h-5', isBookmarked && 'fill-yellow-400 text-yellow-400')} />
          </Button>
          <Badge className={cn('text-white', darkMode ? 'bg-gray-700' : 'bg-white/10')}>
            {sessionCorrect}/{sessionAnswered} correct
          </Badge>
        </div>
      </div>

      <Progress value={(currentIndex / quizQuestions.length) * 100} className="h-2" />

      <Card className={cn('shadow-xl', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Badge className={cn(
              'text-white',
              currentQuestion.difficulty === 'easy' && 'bg-green-500',
              currentQuestion.difficulty === 'medium' && 'bg-yellow-500',
              currentQuestion.difficulty === 'hard' && 'bg-red-500'
            )}>
              {currentQuestion.difficulty}
            </Badge>
            <Badge variant="outline" className={darkMode ? 'border-gray-600 text-gray-300' : ''}>
              {categories.find(c => c.id === currentQuestion.category)?.name}
            </Badge>
          </div>
          
          <h3 className={cn('text-lg font-semibold mb-4', darkMode ? 'text-white' : 'text-gray-900')}>
            {currentQuestion.question}
          </h3>

          <div className="space-y-2">
            {currentQuestion.options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                disabled={selectedAnswer !== null}
                className={cn(
                  'w-full p-3 text-left rounded-xl border-2 transition-all',
                  selectedAnswer === null && !darkMode && 'hover:border-green-400 hover:bg-green-50',
                  selectedAnswer === null && darkMode && 'hover:border-green-400 hover:bg-gray-700',
                  selectedAnswer === i && selectedAnswer === currentQuestion.correctAnswer && 'border-green-500 bg-green-100 dark:bg-green-900/30',
                  selectedAnswer === i && selectedAnswer !== currentQuestion.correctAnswer && 'border-red-500 bg-red-100 dark:bg-red-900/30',
                  selectedAnswer !== null && i === currentQuestion.correctAnswer && 'border-green-500 bg-green-100 dark:bg-green-900/30',
                  selectedAnswer === null && (darkMode ? 'border-gray-600' : 'border-gray-200')
                )}
              >
                <div className="flex items-center gap-3">
                  <span className={cn('w-7 h-7 rounded-full flex items-center justify-center font-medium text-sm', darkMode ? 'bg-gray-700' : 'bg-gray-100')}>
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className={cn('flex-1', darkMode ? 'text-gray-200' : 'text-gray-800')}>{option}</span>
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

          {showExplanation && (
            <div className={cn(
              'mt-4 p-4 rounded-xl',
              isCorrect ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800' : 'bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800'
            )}>
              <div className="flex items-center gap-2 mb-2">
                {isCorrect ? (
                  <CheckCircle className="w-5 h-5 text-green-600" />
                ) : (
                  <Lightbulb className="w-5 h-5 text-amber-600" />
                )}
                <h4 className={cn('font-semibold', darkMode ? 'text-white' : 'text-gray-900')}>Explanation</h4>
              </div>
              <p className={cn('text-sm', darkMode ? 'text-gray-300' : 'text-gray-700')}>{currentQuestion.explanation}</p>
              {currentQuestion.reference && (
                <p className="text-xs text-gray-500 mt-2">Reference: {currentQuestion.reference}</p>
              )}
            </div>
          )}

          {selectedAnswer !== null && (
            <Button 
              onClick={nextQuestion}
              className="w-full mt-4 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600"
            >
              {currentIndex < quizQuestions.length - 1 ? 'Next Question' : 'See Results'}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
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
  accuracy,
  darkMode
}: { 
  onBack: () => void
  onPracticeMore: () => void
  progress: QuizProgress
  accuracy: number
  darkMode: boolean
}) {
  return (
    <div className="max-w-lg mx-auto space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Practice Complete!</h2>
      </div>

      <Card className={cn('shadow-xl text-center', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
        <CardContent className="p-8">
          <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-12 h-12 text-white" />
          </div>
          
          <h3 className={cn('text-3xl font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>Great Job!</h3>
          <p className={cn('mb-6', darkMode ? 'text-gray-400' : 'text-gray-600')}>You&apos;re making progress</p>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className={cn('rounded-xl p-4', darkMode ? 'bg-gray-700' : 'bg-gray-50')}>
              <p className="text-3xl font-bold text-green-600">{accuracy}%</p>
              <p className={cn('text-sm', darkMode ? 'text-gray-400' : 'text-gray-500')}>Overall Accuracy</p>
            </div>
            <div className={cn('rounded-xl p-4', darkMode ? 'bg-gray-700' : 'bg-gray-50')}>
              <p className="text-3xl font-bold text-blue-600">{progress.totalAnswered}</p>
              <p className={cn('text-sm', darkMode ? 'text-gray-400' : 'text-gray-500')}>Questions Answered</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" onClick={onBack} className="flex-1">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button onClick={onPracticeMore} className="flex-1 bg-gradient-to-r from-green-500 to-teal-500">
              <RefreshCw className="w-4 h-4 mr-2" />
              Practice More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// ============== STUDY VIEW ==============
function StudyView({ onBack, darkMode }: { onBack: () => void; darkMode: boolean }) {
  const [selectedNote, setSelectedNote] = useState<StudyNote | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredNotes = studyNotes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.summary.toLowerCase().includes(searchQuery.toLowerCase())
  )

  if (selectedNote) {
    return (
      <div className="space-y-4 animate-fade-in">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={() => setSelectedNote(null)} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-xl font-bold text-white">{selectedNote.title}</h2>
        </div>

        <Card className={cn('shadow-xl', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
          <CardContent className="p-6">
            <p className={cn('mb-4', darkMode ? 'text-gray-300' : 'text-gray-600')}>{selectedNote.summary}</p>
            
            <h3 className={cn('font-bold mb-3', darkMode ? 'text-white' : 'text-gray-900')}>Key Points:</h3>
            <ul className="space-y-2 mb-4">
              {selectedNote.keyPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className={cn('text-sm', darkMode ? 'text-gray-300' : 'text-gray-700')}>{point}</span>
                </li>
              ))}
            </ul>

            {selectedNote.mnemonics && (
              <div className={cn('p-4 rounded-xl', darkMode ? 'bg-gray-700' : 'bg-yellow-50')}>
                <h4 className="font-semibold flex items-center gap-2 mb-2">
                  <Lightbulb className="w-4 h-4 text-yellow-500" />
                  <span className={darkMode ? 'text-white' : 'text-gray-900'}>Mnemonic</span>
                </h4>
                <p className={cn('text-sm', darkMode ? 'text-gray-300' : 'text-gray-700')}>{selectedNote.mnemonics}</p>
              </div>
            )}

            {selectedNote.nigerianContext && (
              <div className={cn('mt-4 p-4 rounded-xl', darkMode ? 'bg-green-900/20 border border-green-800' : 'bg-green-50 border border-green-200')}>
                <h4 className="font-semibold text-green-600 mb-2">🇳🇬 Nigerian Context</h4>
                <p className={cn('text-sm', darkMode ? 'text-gray-300' : 'text-gray-700')}>{selectedNote.nigerianContext}</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Study Notes</h2>
      </div>

      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className={cn(
          'w-full rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400',
          darkMode ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700' : 'bg-white/20 text-white placeholder-white/50'
        )}
      />

      <div className="grid md:grid-cols-2 gap-3">
        {filteredNotes.map(note => (
          <Card 
            key={note.id}
            className={cn('cursor-pointer transition-all hover:scale-[1.02]', darkMode ? 'bg-gray-800/50 border-gray-700 hover:bg-gray-800' : 'bg-white/10 backdrop-blur border-white/20 hover:bg-white/20')}
            onClick={() => setSelectedNote(note)}
          >
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{categories.find(c => c.id === note.category)?.icon}</span>
                <h3 className="font-semibold text-white">{note.title}</h3>
              </div>
              <p className="text-sm text-green-200">{note.summary}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// ============== FLASHCARDS VIEW ==============
function FlashcardsView({ onBack, darkMode }: { onBack: () => void; darkMode: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [shuffledQuestions] = useState(() => [...questions].sort(() => Math.random() - 0.5).slice(0, 20))

  const currentCard = shuffledQuestions[currentIndex]

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold text-white">Flashcards</h2>
        </div>
        <Badge className="bg-white/10 text-white">
          {currentIndex + 1} / {shuffledQuestions.length}
        </Badge>
      </div>

      <Progress value={(currentIndex / shuffledQuestions.length) * 100} className="h-2" />

      <div 
        className={cn(
          'min-h-[400px] rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all',
          darkMode ? 'bg-gray-800 border-2 border-gray-700' : 'bg-white shadow-xl'
        )}
        onClick={() => setShowAnswer(!showAnswer)}
      >
        {!showAnswer ? (
          <div className="text-center">
            <Badge variant="outline" className={cn('mb-4', darkMode ? 'border-gray-600' : '')}>
              {categories.find(c => c.id === currentCard.category)?.name}
            </Badge>
            <p className={cn('text-xl font-semibold', darkMode ? 'text-white' : 'text-gray-900')}>
              {currentCard.question}
            </p>
            <p className={cn('mt-4 text-sm', darkMode ? 'text-gray-400' : 'text-gray-500')}>
              Tap to reveal answer
            </p>
          </div>
        ) : (
          <div className="text-center">
            <p className="text-green-600 font-bold mb-4">
              ✓ {currentCard.options[currentCard.correctAnswer]}
            </p>
            <p className={cn('text-sm mb-4', darkMode ? 'text-gray-300' : 'text-gray-600')}>
              {currentCard.explanation}
            </p>
            <p className="text-xs text-gray-400">Tap to see next question</p>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <Button 
          variant="outline" 
          onClick={() => { setCurrentIndex(Math.max(0, currentIndex - 1)); setShowAnswer(false) }}
          disabled={currentIndex === 0}
          className="flex-1"
        >
          Previous
        </Button>
        <Button 
          onClick={() => { setCurrentIndex(Math.min(shuffledQuestions.length - 1, currentIndex + 1)); setShowAnswer(false) }}
          disabled={currentIndex === shuffledQuestions.length - 1}
          className="flex-1 bg-gradient-to-r from-green-500 to-teal-500"
        >
          Next
        </Button>
      </div>
    </div>
  )
}

// ============== EXAM MODE VIEW ==============
function ExamView({ 
  onBack, 
  onShowResults,
  progress,
  updateProgress,
  darkMode 
}: { 
  onBack: () => void
  onShowResults: () => void
  progress: QuizProgress
  updateProgress: (updates: Partial<QuizProgress>) => void
  darkMode: boolean
}) {
  const [examStarted, setExamStarted] = useState(false)
  const [examQuestions, setExamQuestions] = useState<Question[]>([])
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [timeLeft, setTimeLeft] = useState(30 * 60) // 30 minutes
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState(0)

  useEffect(() => {
    if (examStarted && timeLeft > 0 && !submitted) {
      const timer = setInterval(() => setTimeLeft(t => t - 1), 1000)
      return () => clearInterval(timer)
    }
    if (timeLeft === 0 && !submitted) {
      handleSubmit()
    }
  }, [examStarted, timeLeft, submitted])

  const startExam = () => {
    const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, 50)
    setExamQuestions(shuffled)
    setAnswers({})
    setTimeLeft(30 * 60)
    setExamStarted(true)
    setSubmitted(false)
    setScore(0)
  }

  const handleAnswer = (questionId: string, answerIndex: number) => {
    if (submitted) return
    setAnswers(prev => ({ ...prev, [questionId]: answerIndex }))
  }

  const handleSubmit = () => {
    let correct = 0
    examQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++
    })
    setScore(correct)
    setSubmitted(true)
    updateProgress({
      totalAnswered: progress.totalAnswered + examQuestions.length,
      correctAnswers: progress.correctAnswers + correct
    })
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  if (!examStarted) {
    return (
      <div className="max-w-lg mx-auto space-y-6 animate-fade-in">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Button>
          <h2 className="text-2xl font-bold text-white">Exam Mode</h2>
        </div>

        <Card className={cn('shadow-xl', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
          <CardContent className="p-6 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Timer className="w-10 h-10 text-white" />
            </div>
            <h3 className={cn('text-2xl font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>NMCN Mock Exam</h3>
            <p className={cn('mb-6', darkMode ? 'text-gray-400' : 'text-gray-600')}>
              50 questions • 30 minutes • Timed simulation
            </p>

            <div className={cn('rounded-xl p-4 mb-6', darkMode ? 'bg-gray-700' : 'bg-gray-50')}>
              <h4 className="font-semibold mb-2">Instructions:</h4>
              <ul className={cn('text-sm text-left space-y-1', darkMode ? 'text-gray-300' : 'text-gray-600')}>
                <li>• Answer all 50 questions within 30 minutes</li>
                <li>• You can skip questions and return later</li>
                <li>• The exam auto-submits when time runs out</li>
                <li>• Each correct answer = 1 point</li>
              </ul>
            </div>

            <Button 
              onClick={startExam}
              size="lg"
              className="w-full bg-gradient-to-r from-green-500 to-teal-500"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Exam
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (submitted) {
    const percentage = Math.round((score / examQuestions.length) * 100)
    return (
      <div className="max-w-lg mx-auto space-y-6 animate-fade-in">
        <Card className={cn('shadow-xl text-center', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
          <CardContent className="p-8">
            <div className={cn('w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4', percentage >= 70 ? 'bg-green-500' : 'bg-orange-500')}>
              {percentage >= 70 ? (
                <Trophy className="w-12 h-12 text-white" />
              ) : (
                <Target className="w-12 h-12 text-white" />
              )}
            </div>
            <h3 className={cn('text-3xl font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>
              {percentage >= 70 ? 'Passed!' : 'Keep Practicing'}
            </h3>
            <p className={cn('text-4xl font-bold mb-4', percentage >= 70 ? 'text-green-600' : 'text-orange-600')}>
              {score}/{examQuestions.length} ({percentage}%)
            </p>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onBack} className="flex-1">
                <Home className="w-4 h-4 mr-2" /> Home
              </Button>
              <Button onClick={startExam} className="flex-1 bg-gradient-to-r from-green-500 to-teal-500">
                <RefreshCw className="w-4 h-4 mr-2" /> Retry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const answeredCount = Object.keys(answers).length
  const currentQuestionIndex = 0

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
            <XCircle className="w-5 h-5" />
          </Button>
          <Badge className={cn('text-white', timeLeft < 300 ? 'bg-red-500 animate-pulse' : 'bg-white/10')}>
            <Clock className="w-4 h-4 mr-1" /> {formatTime(timeLeft)}
          </Badge>
        </div>
        <Badge className="bg-white/10 text-white">
          {answeredCount}/{examQuestions.length} answered
        </Badge>
      </div>

      <div className="grid grid-cols-10 gap-1">
        {examQuestions.map((q, i) => (
          <button
            key={q.id}
            className={cn(
              'w-8 h-8 rounded text-xs font-medium',
              answers[q.id] !== undefined 
                ? 'bg-green-500 text-white' 
                : darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
            )}
          >
            {i + 1}
          </button>
        ))}
      </div>

      <Card className={cn('shadow-xl', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
        <CardContent className="p-5">
          {examQuestions.slice(0, 1).map(q => (
            <div key={q.id}>
              <p className={cn('text-lg font-semibold mb-4', darkMode ? 'text-white' : 'text-gray-900')}>
                {q.question}
              </p>
              <div className="space-y-2">
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(q.id, i)}
                    className={cn(
                      'w-full p-3 text-left rounded-xl border-2 transition-all',
                      answers[q.id] === i 
                        ? 'border-green-500 bg-green-100 dark:bg-green-900/30'
                        : darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-200 hover:border-gray-300'
                    )}
                  >
                    <span className={darkMode ? 'text-gray-200' : 'text-gray-800'}>{String.fromCharCode(65 + i)}. {opt}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Button 
        onClick={handleSubmit}
        className="w-full bg-gradient-to-r from-green-500 to-teal-500"
      >
        Submit Exam
      </Button>
    </div>
  )
}

// ============== CALCULATOR VIEW ==============
function CalculatorView({ onBack, darkMode }: { onBack: () => void; darkMode: boolean }) {
  const [calcType, setCalcType] = useState('bmi')
  const [values, setValues] = useState<Record<string, string>>({})
  const [result, setResult] = useState<any>(null)

  const calculators = [
    { id: 'bmi', name: 'BMI Calculator', icon: '⚖️', fields: ['weight (kg)', 'height (cm)'] },
    { id: 'iv_drip', name: 'IV Drip Rate', icon: '💧', fields: ['volume (mL)', 'time (min)', 'dropFactor'] },
    { id: 'drug_dose', name: 'Drug Dose', icon: '💊', fields: ['patientWeight (kg)', 'dosePerKg', 'unit'] },
    { id: 'map', name: 'Mean Arterial Pressure', icon: '❤️', fields: ['sbp', 'dbp'] },
    { id: 'apgar', name: 'APGAR Score', icon: '👶', fields: ['appearance (0-2)', 'pulse (0-2)', 'grimace (0-2)', 'activity (0-2)', 'respiration (0-2)'] },
    { id: 'creatinine_clearance', name: 'Creatinine Clearance', icon: '🫘', fields: ['age', 'crWeight (kg)', 'scr', 'gender'] },
    { id: 'anion_gap', name: 'Anion Gap', icon: '🔬', fields: ['na', 'cl', 'hco3'] },
    { id: 'expected_due_date', name: 'Due Date Calculator', icon: '🤰', fields: ['lmpDay', 'lmpMonth', 'lmpYear'] },
  ]

  const calculate = async () => {
    try {
      const res = await fetch('/api/calculator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: calcType, values })
      })
      const data = await res.json()
      setResult(data.result)
    } catch (error) {
      console.error('Calculation error:', error)
    }
  }

  const currentCalc = calculators.find(c => c.id === calcType)

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Medical Calculators</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {calculators.map(calc => (
          <Button
            key={calc.id}
            variant={calcType === calc.id ? 'default' : 'outline'}
            onClick={() => { setCalcType(calc.id); setResult(null); setValues({}) }}
            className={cn(
              'h-auto p-3 flex-col',
              calcType === calc.id && 'bg-gradient-to-r from-green-500 to-teal-500'
            )}
          >
            <span className="text-2xl mb-1">{calc.icon}</span>
            <span className="text-xs">{calc.name}</span>
          </Button>
        ))}
      </div>

      <Card className={cn('shadow-xl', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
        <CardHeader>
          <CardTitle className={cn('flex items-center gap-2', darkMode ? 'text-white' : '')}>
            <span className="text-2xl">{currentCalc?.icon}</span>
            {currentCalc?.name}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {currentCalc?.fields.map(field => (
            <div key={field}>
              <label className={cn('text-sm font-medium mb-1 block capitalize', darkMode ? 'text-gray-300' : 'text-gray-700')}>
                {field.replace(/([A-Z])/g, ' $1').replace(/\(.*\)/, '')}
              </label>
              <input
                type="text"
                placeholder={field}
                value={values[field.split(' ')[0]] || ''}
                onChange={e => setValues(prev => ({ ...prev, [field.split(' ')[0]]: e.target.value }))}
                className={cn(
                  'w-full rounded-lg px-4 py-2 border outline-none focus:ring-2 focus:ring-green-400',
                  darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'
                )}
              />
            </div>
          ))}

          <Button onClick={calculate} className="w-full bg-gradient-to-r from-green-500 to-teal-500">
            <Calculator className="w-4 h-4 mr-2" /> Calculate
          </Button>

          {result && (
            <div className={cn('rounded-xl p-4', darkMode ? 'bg-gray-700' : 'bg-green-50')}>
              <h4 className="font-semibold text-green-600 mb-2">Result:</h4>
              <p className={cn('text-2xl font-bold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>
                {result.value} {result.unit}
              </p>
              <p className={cn('text-sm', darkMode ? 'text-gray-300' : 'text-gray-600')}>
                {result.interpretation}
              </p>
              <p className="text-xs text-gray-500 mt-2">Formula: {result.formula}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

// ============== SEARCH VIEW ==============
function SearchView({ onBack, darkMode }: { onBack: () => void; darkMode: boolean }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const search = async () => {
    if (!query.trim()) return
    setLoading(true)
    try {
      const res = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query })
      })
      const data = await res.json()
      setResults(data)
    } catch (error) {
      console.error('Search error:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Medical Search</h2>
      </div>

      <div className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyPress={e => e.key === 'Enter' && search()}
          placeholder="Search medical topics..."
          className={cn(
            'flex-1 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-green-400',
            darkMode ? 'bg-gray-800 text-white placeholder-gray-400 border border-gray-700' : 'bg-white text-gray-900 border border-gray-200'
          )}
        />
        <Button onClick={search} disabled={loading} className="bg-gradient-to-r from-green-500 to-teal-500">
          {loading ? 'Searching...' : <Search className="w-5 h-5" />}
        </Button>
      </div>

      {results && (
        <Card className={cn('shadow-xl', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
          <CardContent className="p-6">
            <h3 className={cn('font-bold mb-4', darkMode ? 'text-white' : 'text-gray-900')}>
              Summary for "{results.query}"
            </h3>
            <div className={cn('prose prose-sm max-w-none', darkMode && 'prose-invert')}>
              <p className={cn('whitespace-pre-wrap', darkMode ? 'text-gray-300' : 'text-gray-700')}>
                {results.summary}
              </p>
            </div>
            
            {results.sources && Array.isArray(results.sources) && results.sources.length > 0 && (
              <div className="mt-6">
                <h4 className={cn('font-semibold mb-2', darkMode ? 'text-white' : 'text-gray-900')}>Sources:</h4>
                <ul className="space-y-2">
                  {results.sources.slice(0, 3).map((source: any, i: number) => (
                    <li key={i}>
                      <a 
                        href={source.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-green-600 hover:underline flex items-center gap-1 text-sm"
                      >
                        <ExternalLink className="w-3 h-3" />
                        {source.name || source.url}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// ============== BOOKMARKS VIEW ==============
function BookmarksView({ 
  onBack, 
  progress,
  toggleBookmark,
  darkMode 
}: { 
  onBack: () => void
  progress: QuizProgress
  toggleBookmark: (questionId: string) => void
  darkMode: boolean
}) {
  const bookmarkedQuestions = questions.filter(q => progress.bookmarkedQuestions.includes(q.id))

  return (
    <div className="space-y-4 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Bookmarked Questions</h2>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <Card className={cn('text-center', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
          <CardContent className="p-8">
            <Bookmark className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className={cn(darkMode ? 'text-gray-400' : 'text-gray-600')}>
              No bookmarked questions yet. Tap the bookmark icon during practice to save questions for later.
            </p>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {bookmarkedQuestions.map(q => (
            <Card key={q.id} className={cn(darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
              <CardContent className="p-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className={darkMode ? 'border-gray-600' : ''}>
                        {categories.find(c => c.id === q.category)?.name}
                      </Badge>
                      <Badge className={cn(
                        'text-white text-xs',
                        q.difficulty === 'easy' && 'bg-green-500',
                        q.difficulty === 'medium' && 'bg-yellow-500',
                        q.difficulty === 'hard' && 'bg-red-500'
                      )}>
                        {q.difficulty}
                      </Badge>
                    </div>
                    <p className={cn('font-medium', darkMode ? 'text-white' : 'text-gray-900')}>
                      {q.question}
                    </p>
                    <p className="text-sm text-green-600 mt-2">
                      ✓ {q.options[q.correctAnswer]}
                    </p>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => toggleBookmark(q.id)}
                    className="text-yellow-500 hover:text-yellow-600"
                  >
                    <Bookmark className="w-5 h-5 fill-current" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

// ============== CAREER VIEW ==============
function CareerView({ onBack, darkMode }: { onBack: () => void; darkMode: boolean }) {
  const careerPaths = [
    { title: 'Registered Nurse (RN)', desc: 'Foundation of nursing practice', icon: Heart, color: 'from-green-500 to-teal-500', reqs: ['Diploma/BNSc', 'NMCN exam', 'License'] },
    { title: 'Nurse Midwife (RM)', desc: 'Maternal/newborn care specialist', icon: Users, color: 'from-pink-500 to-purple-500', reqs: ['RN + Midwifery', '18 months training', 'RM registration'] },
    { title: 'Nurse Educator', desc: 'Train future nurses', icon: GraduationCap, color: 'from-blue-500 to-purple-500', reqs: ['BNSc minimum', '5+ years experience', 'Masters preferred'] },
    { title: 'Nurse Administrator', desc: 'Lead nursing teams', icon: Briefcase, color: 'from-orange-500 to-red-500', reqs: ['Management training', 'Leadership skills', 'Experience'] },
  ]

  const tips = [
    'Build strong anatomy, physiology, pharmacology foundation',
    'Practice past NMCN questions regularly',
    'Join NANNM for professional development',
    'Stay updated with current guidelines',
    'Seek mentorship from experienced nurses',
    'Develop critical thinking skills',
  ]

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={onBack} className="text-white hover:bg-white/10">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h2 className="text-2xl font-bold text-white">Career Hub</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {careerPaths.map((path, i) => (
          <Card key={i} className={cn('hover:shadow-lg transition-shadow', darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white')}>
            <CardContent className="p-5">
              <div className="flex items-center gap-4 mb-3">
                <div className={cn('w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center text-white', path.color)}>
                  <path.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={cn('font-bold', darkMode ? 'text-white' : 'text-gray-900')}>{path.title}</h3>
                  <p className={cn('text-sm', darkMode ? 'text-gray-400' : 'text-gray-600')}>{path.desc}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {path.reqs.map((req, j) => (
                  <Badge key={j} variant="outline" className={cn('text-xs', darkMode && 'border-gray-600')}>
                    {req}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className={cn(darkMode ? 'bg-gray-800/50 border-gray-700' : 'bg-white/10 backdrop-blur border-white/20')}>
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            NMCN Exam Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-2">
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
