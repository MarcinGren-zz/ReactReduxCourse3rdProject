import axios from 'axios'

const API_KEY = 'e7b5d6f4ca7d15baa039ec4528f9a68e'
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`
    const request = axios.get(url)

    console.log('request in index js action ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}
