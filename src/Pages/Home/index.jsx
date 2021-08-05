import React, { useContext } from 'react'
import SearchForm from '../../components/Home/searchForm'
import CardWeather from '../../components/Home/CardWeather'
import { VStack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useWeather } from '../../hooks/useWeather'
import WeatherContext from '../../context/WeatherContext'

const Home = () => {
    const { weather, saveWeather, city, setCity } = useContext(WeatherContext)
    const alert = useToast()
    //Custom hook to get data from API
    const { loading } = useWeather({ city, alert, saveWeather })

    return (
        <>
            <VStack p={4}>
                <SearchForm setCity={setCity} loading={loading} />
            </VStack>
            <CardWeather weather={weather} loading={loading} />

        </>
    )
}

export default Home
