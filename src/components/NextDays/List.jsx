import React from 'react'
import {
    Box,
    Text,
    useColorModeValue,
    Image,
    Flex,
} from '@chakra-ui/react'
import moment from 'moment'

const ForecastList = ({ weather }) => {
    return (
        <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>

            <Text color={'gray.500'}>Next Days</Text>
            <Box mt={6}>
                {weather.forecast.forecastday.map((item) => (
                    <Flex key={item.date} mt='4'>
                        <Box w="40px" >
                            <Image
                                boxSize='8'
                                src={item.day.condition.icon}
                            />
                        </Box>
                        <Box flex='2'>
                            <Text>{moment(item.date).format("dddd, D MMM")}</Text>
                        </Box>
                        <Box flex="1" >
                            <Text>{item.day.maxtemp_c.toFixed()}/{item.day.mintemp_c.toFixed()}<span>&#xb0;</span></Text>
                        </Box>
                    </Flex>
                ))}
            </Box>

        </Box>
    )
}

export default ForecastList
