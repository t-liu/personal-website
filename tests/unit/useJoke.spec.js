import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useJoke } from '../../src/composables/useJoke.js'

describe('useJoke composable', () => {
    beforeEach(() => {
        vi.restoreAllMocks()
    })

    it('should initialize with default states', () => {
        const { joke, loading, error } = useJoke()
        expect(joke.value).toBe('')
        expect(loading.value).toBe(false)
        expect(error.value).toBe(null)
    })

    it('should fetch a joke successfully', async () => {
        const mockJoke = 'Why did the chicken cross the road? To get to the other side.'
        
        const fetchMock = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({ joke: mockJoke })
        })
        global.fetch = fetchMock

        const { joke, loading, error, fetchJoke } = useJoke()
        
        const fetchPromise = fetchJoke()
        
        expect(loading.value).toBe(true)
        
        await fetchPromise

        expect(loading.value).toBe(false)
        expect(error.value).toBe(null)
        expect(joke.value).toBe(mockJoke)
        expect(fetchMock).toHaveBeenCalledTimes(1)
        expect(fetchMock).toHaveBeenCalledWith('https://icanhazdadjoke.com', {
            headers: { 'Accept': 'application/json' }
        })
    })

    it('should handle fetch failure and use fallback joke', async () => {
        const fetchMock = vi.fn().mockRejectedValue(new Error('Network failure'))
        global.fetch = fetchMock

        const { joke, loading, error, fetchJoke } = useJoke()
        
        await fetchJoke()

        expect(loading.value).toBe(false)
        expect(error.value).toBe('Network failure')
        expect(joke.value).toBe('404. I asked icanhazdadjoke for humor, but all I got was null.')
    })
})
