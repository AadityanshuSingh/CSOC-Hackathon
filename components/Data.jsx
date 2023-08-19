import React from 'react'
import useFetch from './FetchApi'
import { Box, Card, CardBody, Heading } from '@chakra-ui/react'

const Data = () => {
    const {data, loading, error} = useFetch(`http://api.weatherapi.com/v1/current.json?key=0192de40d23c418d8fc140232231908&q=London&aqi=no`)
  return (
    <>
        <Card m={4}>
            <Heading>
                Weather
            </Heading>
            <CardBody>
                <Box>
                    {data.name}
                </Box>
            </CardBody>

        </Card>
    </>
  )
}

export default Data