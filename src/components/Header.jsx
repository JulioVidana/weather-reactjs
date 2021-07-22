import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    Box,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useColorMode,
    Text
} from '@chakra-ui/react'
import { FaSun, FaMoon } from 'react-icons/fa'

export default function Header() {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
            <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                <HStack spacing={8} alignItems={'center'}>
                    <Box>
                        <NavLink to='/'>
                            <Text
                                bgGradient="linear(to-l, #2538DE,#60BDF4)"
                                bgClip="text"
                                fontSize="3xl"
                                fontWeight="extrabold"
                            >
                                The Weather
                            </Text>
                        </NavLink>

                    </Box>

                </HStack>
                <Flex alignItems={'center'}>
                    <IconButton
                        icon={colorMode === 'light' ? <FaSun /> : <FaMoon />}
                        size="lg"
                        variant="outline"
                        mr={4}
                        isRound
                        alignSelf="flex-end"
                        onClick={toggleColorMode}
                    />
                </Flex>
            </Flex>
        </Box>

    )
}