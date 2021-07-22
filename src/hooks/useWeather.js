import { useState, useEffect, useContext } from 'react'
import getWeather from '../services/getWeather'
import WeatherContext from '../context/WeatherContext'


export function useWeather({ city, setCity, alert }) {
    const { weather, saveWeather } = useContext(WeatherContext)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (city) {
            setLoading(true)
            getWeather({ city: city, days: 7 }).then(data => {
                saveWeather(data)
                setLoading(false)
                if (data.error) {
                    alert({
                        title: data.error.message,
                        status: "error",
                        duration: 2000,
                        isClosable: false,
                        position: 'top'
                    })
                    return
                }
            })
            setCity('')
        }

    }, [city])

    return { loading, weather }
}