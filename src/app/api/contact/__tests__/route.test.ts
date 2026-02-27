import { describe, it, expect, vi } from 'vitest'
import { POST } from '../route'
import { NextRequest } from 'next/server'

function createRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/contact', () => {
  it('returns success for valid contact submission', async () => {
    const req = createRequest({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'I would like to volunteer for the foundation.',
    })

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.success).toBe(true)
    expect(data.message).toBe('Message sent successfully')
  })

  it('returns 400 for invalid data', async () => {
    const req = createRequest({
      name: 'J',
      email: 'invalid',
      message: 'Hi',
    })

    const res = await POST(req)
    expect(res.status).toBe(400)

    const data = await res.json()
    expect(data.error).toBe('Invalid form data')
    expect(data.details).toBeDefined()
  })

  it('rejects honeypot-filled submissions', async () => {
    const req = createRequest({
      name: 'Bot User',
      email: 'bot@spam.com',
      message: 'This is definitely a real message from a human.',
      website: 'http://spam.com',
    })

    const res = await POST(req)
    expect(res.status).toBe(400)

    const data = await res.json()
    expect(data.error).toBe('Invalid submission')
  })

  it('allows empty honeypot field', async () => {
    const req = createRequest({
      name: 'Jane Doe',
      email: 'jane@example.com',
      message: 'I would like to volunteer for the foundation.',
      website: '',
    })

    const res = await POST(req)
    expect(res.status).toBe(200)
  })

  it('returns 400 when missing required fields', async () => {
    const req = createRequest({ name: 'Jane' })

    const res = await POST(req)
    expect(res.status).toBe(400)
  })
})
