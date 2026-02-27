import { describe, it, expect } from 'vitest'
import { POST } from '../route'
import { NextRequest } from 'next/server'

function createRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost:3000/api/donate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
}

describe('POST /api/donate', () => {
  it('returns checkout URL for valid one-time donation', async () => {
    const req = createRequest({ amount: 50, frequency: 'one-time' })

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.url).toBeDefined()
    expect(data.url).toContain('amount=50')
    expect(data.sessionId).toBeDefined()
  })

  it('returns checkout URL for valid monthly donation', async () => {
    const req = createRequest({ amount: 25, frequency: 'monthly' })

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.url).toContain('frequency=monthly')
  })

  it('returns 400 for amount below minimum ($10)', async () => {
    const req = createRequest({ amount: 5, frequency: 'one-time' })

    const res = await POST(req)
    expect(res.status).toBe(400)

    const data = await res.json()
    expect(data.error).toBe('Invalid donation data')
  })

  it('returns 400 for amount above maximum ($10,000)', async () => {
    const req = createRequest({ amount: 15000, frequency: 'one-time' })

    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 for invalid frequency', async () => {
    const req = createRequest({ amount: 50, frequency: 'weekly' })

    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('accepts boundary values ($10 and $10,000)', async () => {
    const req10 = createRequest({ amount: 10, frequency: 'one-time' })
    const res10 = await POST(req10)
    expect(res10.status).toBe(200)

    const req10k = createRequest({ amount: 10000, frequency: 'one-time' })
    const res10k = await POST(req10k)
    expect(res10k.status).toBe(200)
  })

  it('returns 400 for missing fields', async () => {
    const req = createRequest({})

    const res = await POST(req)
    expect(res.status).toBe(400)
  })
})
