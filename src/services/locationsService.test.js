import { getLocations } from './locationsService'
import axios from 'axios'
import { vi } from 'vitest'

vi.mock('axios')

describe('getLocations', () => {
  it('should return data when the API call is successful', async () => {
    const mockData = [{ id: 1, name: 'Location 1' }]
    axios.get.mockResolvedValueOnce({ data: mockData })

    const data = await getLocations()
    expect(data).toEqual(mockData)
  })

  it('should throw an error when the API call fails', async () => {
    axios.get.mockRejectedValueOnce(new Error('Network Error'))

    await expect(getLocations()).rejects.toThrow('Network Error')
  })
})
