import { ref } from 'vue'
import { config } from '../config/env'

interface JokeResponse {
  joke: string
}

export function useJoke() {
  const joke = ref<string>('')
  const loading = ref<boolean>(false)
  const error = ref<string | null>(null)

  const fetchJoke = async (): Promise<void> => {
    loading.value = true
    error.value = null

    try {
      const response = await fetch(config.jokeApiUrl, {
        headers: {
          Accept: 'application/json'
        }
      })

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`)
      }

      const data: JokeResponse = await response.json()

      joke.value = data.joke
    } catch (err: unknown) {
      console.error('Error fetching joke from API:', err)

      error.value =
        err instanceof Error ? err.message : 'Unknown error'

      joke.value =
        '404. I asked icanhazdadjoke for humor, but all I got was null.'
    } finally {
      loading.value = false
    }
  }

  return {
    joke,
    loading,
    error,
    fetchJoke
  }
}