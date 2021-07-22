import React, { useState, useEffect, useContext } from 'react'
import SearchForm from '../../components/Home/searchForm'
import CardWeather from '../../components/Home/CardWeather'
import { VStack } from '@chakra-ui/react'
import getWeather from '../../services/getWeather'
import { useToast } from '@chakra-ui/react'
import WeatherContext from '../../context/WeatherContext'

const Home = () => {
    const { weather, saveWeather } = useContext(WeatherContext)
    const [city, setCity] = useState('')
    const [loading, setLoading] = useState(false)
    const toast = useToast()

    useEffect(() => {
        if (city) {
            getWeather({ city: city, days: 7 }).then(data => {
                saveWeather(data)
                setLoading(false)
                if (data.error) {
                    toast({
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


    return (
        <>
            <VStack p={4}>
                <SearchForm setCity={setCity} setLoading={setLoading} />
            </VStack>
            <CardWeather weather={weather} loading={loading} />

        </>
    )
}

export default Home
