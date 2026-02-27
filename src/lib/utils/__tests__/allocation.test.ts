import { describe, it, expect } from 'vitest'
import { calculateAllocation } from '../allocation'

describe('calculateAllocation', () => {
  it('allocates $100 correctly (78/14/8 split)', () => {
    const result = calculateAllocation(100)
    expect(result.programs).toBe(78)
    expect(result.operations).toBe(14)
    expect(result.fundraising).toBe(8)
  })

  it('allocates $25 correctly', () => {
    const result = calculateAllocation(25)
    expect(result.programs).toBe(20) // 25 * 0.78 = 19.5 → 20
    expect(result.operations).toBe(4) // 25 * 0.14 = 3.5 → 4
    expect(result.fundraising).toBe(2) // 25 * 0.08 = 2.0 → 2
  })

  it('allocates $0 as all zeros', () => {
    const result = calculateAllocation(0)
    expect(result.programs).toBe(0)
    expect(result.operations).toBe(0)
    expect(result.fundraising).toBe(0)
  })

  it('returns whole dollar amounts (rounded)', () => {
    const result = calculateAllocation(33)
    expect(Number.isInteger(result.programs)).toBe(true)
    expect(Number.isInteger(result.operations)).toBe(true)
    expect(Number.isInteger(result.fundraising)).toBe(true)
  })

  it('allocates large donations', () => {
    const result = calculateAllocation(10000)
    expect(result.programs).toBe(7800)
    expect(result.operations).toBe(1400)
    expect(result.fundraising).toBe(800)
  })
})
