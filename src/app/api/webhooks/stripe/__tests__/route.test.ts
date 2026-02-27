import { describe, it, expect } from 'vitest'
import { POST } from '../route'
import { NextRequest } from 'next/server'

function createRequest(body: string, signature?: string): NextRequest {
  const headers: Record<string, string> = { 'Content-Type': 'application/json' }
  if (signature) {
    headers['stripe-signature'] = signature
  }

  return new NextRequest('http://localhost:3000/api/webhooks/stripe', {
    method: 'POST',
    headers,
    body,
  })
}

describe('POST /api/webhooks/stripe', () => {
  it('returns success when signature is provided', async () => {
    const req = createRequest(
      JSON.stringify({ type: 'checkout.session.completed' }),
      'test_signature_abc123'
    )

    const res = await POST(req)
    const data = await res.json()

    expect(res.status).toBe(200)
    expect(data.received).toBe(true)
  })

  it('returns 400 when signature is missing', async () => {
    const req = createRequest(JSON.stringify({ type: 'checkout.session.completed' }))

    const res = await POST(req)
    expect(res.status).toBe(400)

    const data = await res.json()
    expect(data.error).toBe('No signature provided')
  })
})
