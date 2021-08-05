import React, { createContext, useState } from 'react'

const Context = createContext({})

export function WeatherContextProvider({ children }) {
    const cityStorage = localStorage.getItem('lastSearch')
    const [weather, setWeather] = useState({})
    const [city, setCity] = useState(cityStorage)

    const saveWeather = value => {
        setWeather(value)
        localStorage.setItem('lastSearch', JSON.stringify(value.location.name))
    }
    return (
        <Context.Provider value={{ weather, saveWeather, city, setCity }}>
            {children}
        </Context.Provider>
    )
}

export default Context
