import { describe, it, expect } from 'vitest'
import { POST } from '../route'
import { NextRequest } from 'next/server'

function createRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/newsletter', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/newsletter', () => {
  it('returns success for valid email', async () => {
    const req = createRequest({ email: 'subscriber@example.com' })

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBe('Successfully subscribed to newsletter')
  })

  it('returns 400 for invalid email', async () => {
    const req = createRequest({ email: 'not-an-email' })

    const res = await POST(req)
    expect(res.status).toBe(400)

    const data = await res.json()
    expect(data.error).toBe('Invalid email address')
  })

  it('returns 400 for empty email', async () => {
    const req = createRequest({ email: '' })

    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 for missing email field', async () => {
    const req = createRequest({})

    const res = await POST(req)
    expect(res.status).toBe(400)
  })
})
