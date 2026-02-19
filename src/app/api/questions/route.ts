import { NextRequest, NextResponse } from 'next/server'
import { questions, getQuestionsByCategory, getRandomQuestions, getQuestionCount } from '@/lib/questions-bank'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category')
  const count = parseInt(searchParams.get('count') || '10')
  const random = searchParams.get('random') === 'true'
  const id = searchParams.get('id')
  
  try {
    // Get specific question by ID
    if (id) {
      const question = questions.find(q => q.id === id)
      if (!question) {
        return NextResponse.json({ error: 'Question not found' }, { status: 404 })
      }
      return NextResponse.json({ question })
    }
    
    // Get question count stats
    if (searchParams.get('stats') === 'true') {
      const stats = getQuestionCount()
      return NextResponse.json(stats)
    }
    
    // Get random questions
    if (random) {
      const randomQuestions = getRandomQuestions(count, category || undefined)
      return NextResponse.json({ 
        questions: randomQuestions,
        count: randomQuestions.length 
      })
    }
    
    // Get questions by category
    if (category) {
      const categoryQuestions = getQuestionsByCategory(category)
      return NextResponse.json({ 
        questions: categoryQuestions.slice(0, count),
        total: categoryQuestions.length 
      })
    }
    
    // Get all questions (limited)
    return NextResponse.json({ 
      questions: questions.slice(0, count),
      total: questions.length 
    })
    
  } catch (error) {
    console.error('Questions API error:', error)
    return NextResponse.json({ error: 'Failed to fetch questions' }, { status: 500 })
  }
}
