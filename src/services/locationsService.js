import axios from 'axios'

export async function getLocations() {
  try {
    const { data } = await axios.get('https://api.megaport.com/v2/locations')
    return data
  } catch (error) {
    console.error('Error fetching locations:', error.message)
    throw error
  }
}
