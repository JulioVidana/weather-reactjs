import React from 'react'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import {
    Heading,
    Box,
    Center,
    Image,
    Text,
    Stack,
    Button,
    useColorModeValue,
    SimpleGrid,
    Skeleton
} from '@chakra-ui/react'
import { FaWind, FaThermometerEmpty, FaSun, FaTachometerAlt } from 'react-icons/fa'
import StatsCard from '../../components/Home/StatsCard'

export default function CardWeather({ weather = {}, loading }) {
    const { location, current } = weather
    if (!current || Object.keys(current).length === 0) return null;

    return (
        <Center py={6}>
            <Box
                maxW={'320px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.900')}
                boxShadow={'2xl'}
                rounded={'lg'}
                p={6}
                textAlign={'center'}>
                <Skeleton isLoaded={!loading}>
                    <Text fontSize='xl'>
                        <strong>{location.name}</strong>, {location.country}
                    </Text>
                    <Box>
                        <Stack
                            spacing={0}
                            align={'center'}
                            mt={5}>
                            <Image
                                boxSize='32'
                                src={current.condition.icon}
                                alt="Weather data by WeatherAPI.com"
                            />
                        </Stack>

                    </Box>

                    <Box>
                        <Stack
                            mt={-2}
                            spacing={0}
                            align={'center'}
                            mb={5}>
                            <Heading
                                fontSize={'2xl'}
                                fontWeight={500}
                                fontFamily={'body'}>
                                {current.condition.text}
                            </Heading>
                            <Text color={'gray.500'}>
                                {moment(current.last_updated).format("dddd, D MMM")}
                            </Text>
                        </Stack>

                        <Stack spacing={0} align={'center'} mb={5}>
                            <Text
                                fontSize='6xl' fontWeight="700">
                                {current.temp_c.toFixed()}<span>&#xb0;</span>
                            </Text>
                        </Stack>


                        <SimpleGrid columns={2} spacing={6}>
                            <StatsCard
                                title='WIND'
                                stat={`${current.wind_kph}km/h`}
                                icon={<FaWind size={20} />}
                            />
                            <StatsCard
                                title='FEELS LIKE'
                                stat={`${current.feelslike_c.toFixed()}`}
                                icon={<FaThermometerEmpty size={20} />}
                            />
                            <StatsCard
                                title='INDEX UV'
                                stat={current.uv}
                                icon={<FaSun size={20} />}
                            />

                            <StatsCard
                                title='PRESSURE'
                                stat={`${current.pressure_mb} mbar`}
                                icon={<FaTachometerAlt size={20} />}
                            />
                        </SimpleGrid>

                        <NavLink to='/nextdays'>
                            <Button
                                w={'full'}
                                mt={8}
                                bg={'blue.400'}
                                color={'white'}
                                rounded={'md'}
                                boxShadow={
                                    '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                                }
                                _hover={{
                                    transform: 'translateY(-2px)',
                                    boxShadow: 'lg',
                                    bg: 'blue.500'
                                }}
                                _focus={{
                                    bg: 'blue.500',
                                }}
                            >
                                Next days
                            </Button>
                        </NavLink>
                    </Box>
                </Skeleton>
            </Box>

        </Center >
    )
}
