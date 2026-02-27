import { describe, it, expect } from 'vitest'
import {
  contactSchema,
  newsletterSchema,
  donationSchema,
  loginSchema,
  programSchema,
  eventSchema,
  metricSchema,
  storySchema,
} from '../schemas'

describe('contactSchema', () => {
  const validContact = {
    name: 'Jane Doe',
    email: 'jane@example.com',
    message: 'I would like to volunteer for the foundation.',
  }

  it('accepts valid contact data', () => {
    const result = contactSchema.safeParse(validContact)
    expect(result.success).toBe(true)
  })

  it('accepts optional subject', () => {
    const result = contactSchema.safeParse({ ...validContact, subject: 'Volunteering' })
    expect(result.success).toBe(true)
  })

  it('accepts optional honeypot field', () => {
    const result = contactSchema.safeParse({ ...validContact, website: '' })
    expect(result.success).toBe(true)
  })

  it('rejects name shorter than 2 characters', () => {
    const result = contactSchema.safeParse({ ...validContact, name: 'J' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = contactSchema.safeParse({ ...validContact, email: 'not-an-email' })
    expect(result.success).toBe(false)
  })

  it('rejects message shorter than 10 characters', () => {
    const result = contactSchema.safeParse({ ...validContact, message: 'Hi' })
    expect(result.success).toBe(false)
  })
})

describe('newsletterSchema', () => {
  it('accepts valid email', () => {
    const result = newsletterSchema.safeParse({ email: 'test@example.com' })
    expect(result.success).toBe(true)
  })

  it('rejects invalid email', () => {
    const result = newsletterSchema.safeParse({ email: 'invalid' })
    expect(result.success).toBe(false)
  })

  it('rejects empty email', () => {
    const result = newsletterSchema.safeParse({ email: '' })
    expect(result.success).toBe(false)
  })
})

describe('donationSchema', () => {
  const validDonation = { amount: 50, frequency: 'one-time' as const }

  it('accepts valid one-time donation', () => {
    const result = donationSchema.safeParse(validDonation)
    expect(result.success).toBe(true)
  })

  it('accepts valid monthly donation', () => {
    const result = donationSchema.safeParse({ amount: 25, frequency: 'monthly' })
    expect(result.success).toBe(true)
  })

  it('rejects amount below $10', () => {
    const result = donationSchema.safeParse({ amount: 5, frequency: 'one-time' })
    expect(result.success).toBe(false)
  })

  it('rejects amount above $10,000', () => {
    const result = donationSchema.safeParse({ amount: 15000, frequency: 'one-time' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid frequency', () => {
    const result = donationSchema.safeParse({ amount: 50, frequency: 'weekly' })
    expect(result.success).toBe(false)
  })

  it('accepts optional donor name and email', () => {
    const result = donationSchema.safeParse({
      ...validDonation,
      donorName: 'Jane',
      donorEmail: 'jane@example.com',
    })
    expect(result.success).toBe(true)
  })

  it('accepts boundary values ($10 and $10,000)', () => {
    expect(donationSchema.safeParse({ amount: 10, frequency: 'one-time' }).success).toBe(true)
    expect(donationSchema.safeParse({ amount: 10000, frequency: 'one-time' }).success).toBe(true)
  })
})

describe('loginSchema', () => {
  it('accepts valid credentials', () => {
    const result = loginSchema.safeParse({ email: 'admin@example.com', password: 'securepass1' })
    expect(result.success).toBe(true)
  })

  it('rejects password shorter than 8 characters', () => {
    const result = loginSchema.safeParse({ email: 'admin@example.com', password: 'short' })
    expect(result.success).toBe(false)
  })

  it('rejects invalid email', () => {
    const result = loginSchema.safeParse({ email: 'notanemail', password: 'securepass1' })
    expect(result.success).toBe(false)
  })
})

describe('programSchema', () => {
  const validProgram = {
    title: 'Bloom Scholarships',
    description: 'Providing educational opportunities for families in need.',
    category: 'Education' as const,
    bulletPoints: ['Free tutoring', 'School supplies'],
    isActive: true,
    orderIndex: 1,
  }

  it('accepts valid program data', () => {
    const result = programSchema.safeParse(validProgram)
    expect(result.success).toBe(true)
  })

  it('rejects empty bulletPoints array', () => {
    const result = programSchema.safeParse({ ...validProgram, bulletPoints: [] })
    expect(result.success).toBe(false)
  })

  it('rejects invalid category', () => {
    const result = programSchema.safeParse({ ...validProgram, category: 'Sports' })
    expect(result.success).toBe(false)
  })

  it('defaults isActive to true', () => {
    const { isActive, ...withoutActive } = validProgram
    const result = programSchema.safeParse(withoutActive)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.isActive).toBe(true)
    }
  })
})

describe('eventSchema', () => {
  const validEvent = {
    title: 'Annual Gala',
    date: '2025-12-15',
    location: 'Community Center',
    description: 'Join us for our annual fundraising gala event.',
  }

  it('accepts valid event data', () => {
    const result = eventSchema.safeParse(validEvent)
    expect(result.success).toBe(true)
  })

  it('rejects invalid date string', () => {
    const result = eventSchema.safeParse({ ...validEvent, date: 'not-a-date' })
    expect(result.success).toBe(false)
  })

  it('accepts optional rsvpLink as valid URL', () => {
    const result = eventSchema.safeParse({ ...validEvent, rsvpLink: 'https://example.com/rsvp' })
    expect(result.success).toBe(true)
  })

  it('rejects invalid rsvpLink URL', () => {
    const result = eventSchema.safeParse({ ...validEvent, rsvpLink: 'not-a-url' })
    expect(result.success).toBe(false)
  })
})

describe('metricSchema', () => {
  it('accepts valid metric', () => {
    const result = metricSchema.safeParse({
      metricName: 'Families Served',
      metricValue: 500,
      displayOrder: 1,
    })
    expect(result.success).toBe(true)
  })

  it('rejects non-positive metricValue', () => {
    const result = metricSchema.safeParse({
      metricName: 'Families Served',
      metricValue: -5,
      displayOrder: 1,
    })
    expect(result.success).toBe(false)
  })
})

describe('storySchema', () => {
  it('accepts valid story', () => {
    const result = storySchema.safeParse({
      title: 'A Journey of Hope',
      content: 'This is a heartwarming story about a family that benefited from our programs and their journey to success.',
    })
    expect(result.success).toBe(true)
  })

  it('rejects content shorter than 50 characters', () => {
    const result = storySchema.safeParse({
      title: 'A Journey of Hope',
      content: 'Too short.',
    })
    expect(result.success).toBe(false)
  })

  it('rejects invalid featuredImage URL', () => {
    const result = storySchema.safeParse({
      title: 'A Journey of Hope',
      content: 'This is a heartwarming story about a family that benefited from our programs and their journey to success.',
      featuredImage: 'not-a-url',
    })
    expect(result.success).toBe(false)
  })
})
