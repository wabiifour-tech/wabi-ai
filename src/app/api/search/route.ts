import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 })
    }

    const zai = await ZAI.create()
    
    // Perform web search for medical information
    const searchResult = await zai.functions.invoke("web_search", {
      query: `${query} nursing medical healthcare Nigeria`,
      num: 5
    })

    // Summarize search results with AI
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a medical research assistant. Summarize the following search results into a clear, accurate medical explanation. Include source citations. Focus on information relevant to Nigerian healthcare context when applicable. Format with clear headings and bullet points.`
        },
        {
          role: 'user',
          content: `Search query: ${query}\n\nSearch results: ${JSON.stringify(searchResult)}`
        }
      ],
      temperature: 0.5,
      max_tokens: 1500
    })

    const summary = completion.choices[0]?.message?.content || 'Unable to summarize results'

    return NextResponse.json({ 
      success: true, 
      query,
      summary,
      sources: searchResult,
      timestamp: new Date().toISOString()
    })
    
  } catch (error: any) {
    console.error('Medical Search Error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Search failed. Please try again.',
      summary: 'I could not retrieve additional information at this time. Please try again later.'
    }, { status: 500 })
  }
}
