import React, { useState } from 'react'
import { Button, HStack, Input, useToast } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const SearchForm = ({ setCity, loading }) => {
    const [content, setContent] = useState('')
    const toast = useToast()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!content) {
            toast({
                title: "No data",
                status: "error",
                duration: 2000,
                isClosable: false,
                position: 'top'
            })
            return
        }
        setCity(content)
        setContent('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <HStack mt="5" >
                <Input
                    variant="filled"
                    placeholder="Search City"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <Button
                    isLoading={loading}
                    colorScheme='gray'
                    px="8"
                    type="submit"
                >
                    Search
                </Button>
            </HStack>

        </form>
    )
}

SearchForm.propTypes = {
    setCity: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default SearchForm
