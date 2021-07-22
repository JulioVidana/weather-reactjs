import React, { useState } from 'react'
import SearchForm from '../../components/Home/searchForm'
import CardWeather from '../../components/Home/CardWeather'
import { VStack } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import { useWeather } from '../../hooks/useWeather'

const Home = () => {
    const [city, setCity] = useState('')
    const alert = useToast()
    const { loading, weather } = useWeather({ city, setCity, alert })

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
