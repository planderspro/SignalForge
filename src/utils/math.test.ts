import { describe, it, expect } from 'vitest'

// Basic math utility tests to verify testing framework works
describe('Math utilities', () => {
  it('should perform basic arithmetic', () => {
    expect(2 + 2).toBe(4)
    expect(5 * 3).toBe(15)
  })

  it('should handle floating point operations', () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3)
  })
})