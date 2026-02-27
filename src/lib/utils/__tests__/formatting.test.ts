import { describe, it, expect } from 'vitest'
import {
  formatCurrency,
  formatDate,
  formatNumber,
  calculatePercentage,
} from '../formatting'

describe('formatCurrency', () => {
  it('formats whole dollar amounts', () => {
    expect(formatCurrency(25)).toBe('$25.00')
  })

  it('formats amounts with cents', () => {
    expect(formatCurrency(25.5)).toBe('$25.50')
  })

  it('formats zero', () => {
    expect(formatCurrency(0)).toBe('$0.00')
  })

  it('formats large amounts with commas', () => {
    expect(formatCurrency(10000)).toBe('$10,000.00')
  })

  it('rounds to 2 decimal places', () => {
    expect(formatCurrency(25.999)).toBe('$26.00')
  })
})

describe('formatDate', () => {
  const testDate = new Date('2025-06-15T12:30:00')

  it('formats as long date by default', () => {
    const result = formatDate(testDate)
    expect(result).toBe('June 15, 2025')
  })

  it('formats as short date', () => {
    const result = formatDate(testDate, 'short')
    expect(result).toBe('Jun 15, 2025')
  })

  it('accepts a string date', () => {
    const result = formatDate('2025-06-15', 'long')
    expect(result).toContain('June')
    expect(result).toContain('2025')
  })

  it('formats as datetime', () => {
    const result = formatDate(testDate, 'datetime')
    expect(result).toContain('2025')
    expect(result).toMatch(/\d{1,2}:\d{2}/)
  })
})

describe('formatNumber', () => {
  it('formats small numbers without commas', () => {
    expect(formatNumber(100)).toBe('100')
  })

  it('formats thousands with commas', () => {
    expect(formatNumber(3200)).toBe('3,200')
  })

  it('formats millions', () => {
    expect(formatNumber(1500000)).toBe('1,500,000')
  })

  it('formats zero', () => {
    expect(formatNumber(0)).toBe('0')
  })
})

describe('calculatePercentage', () => {
  it('calculates correct percentage', () => {
    expect(calculatePercentage(50, 100)).toBe(50)
  })

  it('rounds to nearest integer', () => {
    expect(calculatePercentage(1, 3)).toBe(33)
  })

  it('returns 0 when total is 0', () => {
    expect(calculatePercentage(10, 0)).toBe(0)
  })

  it('handles 100%', () => {
    expect(calculatePercentage(100, 100)).toBe(100)
  })

  it('handles values greater than total', () => {
    expect(calculatePercentage(150, 100)).toBe(150)
  })
})
