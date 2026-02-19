import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { topic, category } = await request.json()
    
    if (!topic) {
      return NextResponse.json({ error: 'Topic is required' }, { status: 400 })
    }

    const zai = await ZAI.create()
    
    // Generate comprehensive study notes
    const completion = await zai.chat.completions.create({
      messages: [
        {
          role: 'system',
          content: `You are a senior nursing educator creating comprehensive study notes for NMCN exam preparation. Create detailed, well-organized notes that include:
1. Definition and overview
2. Key points and important facts
3. Clinical significance
4. Nigerian healthcare context where relevant
5. Common exam tips and mnemonics
6. Quick review points

Format with clear headings, bullet points, and highlight key terms. Make it easy to memorize.`
        },
        {
          role: 'user',
          content: `Create comprehensive study notes on: ${topic}${category ? ` (Category: ${category})` : ''}`
        }
      ],
      temperature: 0.7,
      max_tokens: 2500
    })

    const notes = completion.choices[0]?.message?.content || 'Unable to generate notes'

    return NextResponse.json({ 
      success: true, 
      topic,
      notes,
      timestamp: new Date().toISOString()
    })
    
  } catch (error: any) {
    console.error('Study Notes Error:', error)
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to generate notes.'
    }, { status: 500 })
  }
}
