import React, { createContext, useState, useEffect } from 'react'

const Context = createContext({})

export function WeatherContextProvider({ children }) {
    const [weather, setWeather] = useState({})

    //if the page is reload -> get value from localStorage
    useEffect(() => {
        if (localStorage.getItem('lastSearch')) {
            const lastSearch = JSON.parse(localStorage.getItem('lastSearch'))
            setWeather(lastSearch)
        }
    }, [])

    const saveWeather = value => {
        setWeather(value)
        localStorage.setItem('lastSearch', JSON.stringify(value))
    }
    return (
        <Context.Provider value={{ weather, saveWeather }}>
            {children}
        </Context.Provider>
    )
}

export default Context
