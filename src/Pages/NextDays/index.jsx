import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Center,
    Text,
    VStack,
    HStack,
    Button,
    Spinner
} from '@chakra-ui/react'
import WeatherContext from '../../context/WeatherContext'
import ForecastList from '../../components/NextDays/List'
import { FaAngleLeft } from 'react-icons/fa'
import { useWeather } from '../../hooks/useWeather'

const NextDays = () => {
    const { weather, saveWeather } = useContext(WeatherContext)

    if (Object.keys(weather).length === 0) {
        useWeather({ city: localStorage.getItem('lastSearch'), saveWeather })
    }

    return (
        <>
            {Object.keys(weather).length !== 0 ? (
                <>
                    <VStack p={4}>
                        <HStack mt='5'>
                            <Text fontSize='xl'>
                                <strong>{weather.location.name}</strong>, {weather.location.country}
                            </Text>
                        </HStack>
                    </VStack>
                    <Center py={6}>
                        <ForecastList weather={weather} />
                    </Center>
                </>
            ) : (
                <VStack p={9}>
                    <HStack mt='5'>
                        <Spinner size="xl" />
                    </HStack>

                </VStack>
            )

            }
            <VStack p={4}>
                <HStack>
                    <NavLink to='/'>
                        <Button
                            leftIcon={<FaAngleLeft />}
                            colorScheme='blue'
                            _hover={{
                                transform: 'translateY(-2px)',
                                boxShadow: 'lg',
                            }}
                        >
                            Back
                        </Button>

                    </NavLink>
                </HStack>
            </VStack>
        </>
    )
}

export default NextDays
