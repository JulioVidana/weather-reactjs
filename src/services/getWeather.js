import { API_KEY, API_URL } from './settings'

export default async function getWeather({ city, days } = {}) {
    const SEARCH = `${API_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&alerts=no`
    return await fetch(SEARCH)
        .then(response => response.json())
        .then(data => {
            return data
        })
}