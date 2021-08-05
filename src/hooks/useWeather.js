import { useState, useEffect } from 'react'
import getWeather from '../services/getWeather'

export function useWeather({ city, alert, saveWeather }) {
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (city) {
            setLoading(true)
            getWeather({ city: city, days: 7 }).then(data => {
                if (data.error) {
                    alert({
                        title: data.error.message,
                        status: "error",
                        duration: 2000,
                        isClosable: false,
                        position: 'top'
                    })
                    setLoading(false)
                    return
                }
                saveWeather(data)
                setLoading(false)
            })
        }

    }, [city])

    return { loading }
}