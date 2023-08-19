import React from 'react'
import useFetch from './FetchApi'
import { Card, Heading } from '@chakra-ui/react'

const Data = () => {
  return (
    <>
        <Card m={4}>
            <Heading>
                Weather
            </Heading>
        </Card>
    </>
  )
}

export default Data