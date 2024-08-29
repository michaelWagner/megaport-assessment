import { describe, it, expect } from 'vitest'
import { getValue } from './objectService'

const data = {
  name: 'Megaport',
  address: {
    office: {
      unit: 'Level 3',
      street: '825 Ann Street',
      suburb: 'Fortitude Valley',
      city: 'Brisbane',
      state: 'Queensland',
      postcode: 4006,
    },
  },
  industry: {
    type: 'Internet and telecommunications',
    asxListed: true,
  },
}

describe('getValue', () => {
  it('should return the correct value for a valid path', () => {
    expect(getValue('address.office.suburb', data)).toBe('Fortitude Valley')
    expect(getValue('industry.asxListed', data)).toBe(true)
  })

  it('should return undefined for an invalid path', () => {
    expect(getValue('address.office.nonexistent', data)).toBeUndefined()
  })

  it('should return the entire object for an empty path', () => {
    expect(getValue('', data)).toBe(data)
  })

  it('should return undefined for a non-object input', () => {
    expect(getValue('address.office.suburb', null)).toBeUndefined()
  })
})
