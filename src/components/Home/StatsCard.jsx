import React from 'react'
import {
    Box,
    Flex,
    Stat,
    useColorModeValue,
    Text
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

const StatsCard = ({ title, stat, icon }) => {
    return (
        <Stat
            px={{ base: 2, md: 4 }}
            py={'2'}
            rounded={'lg'}>
            <Flex justifyContent={'space-between'}>
                <Box
                    my={'auto'}
                    color={useColorModeValue('gray.800', 'gray.200')}
                    alignContent={'center'}>
                    {icon}
                </Box>
                <Box pl={{ base: 2, md: 4 }}>
                    <Text fontSize={'sm'} color={'gray.500'}>
                        {title}
                    </Text>
                    <Text fontWeight={600}>
                        {stat}
                    </Text>
                </Box>

            </Flex>
        </Stat>
    )
}

StatsCard.propTypes = {
    title: PropTypes.string.isRequired,
    stat: PropTypes.node.isRequired,
    icon: PropTypes.element.isRequired
}

export default StatsCard
