import { ref } from 'vue'
import { config } from '../config/env.js'

export function useJoke() {
    const joke = ref('')
    const loading = ref(false)
    const error = ref(null)

    const fetchJoke = async () => {
        loading.value = true
        error.value = null
        try {
            const response = await fetch(config.jokeApiUrl, {
                headers: {'Accept': 'application/json'}
            })
            const data = await response.json()
            joke.value = data.joke
        } catch (err) {
            console.error('Error fetching joke from API: ', err)
            error.value = err.message
            joke.value = '404. I asked icanhazdadjoke for humor, but all I got was null.'
        } finally {
            loading.value = false
        }
    }

    return {joke, loading, error, fetchJoke}
}