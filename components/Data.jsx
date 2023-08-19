import React from 'react'
import useFetch from './FetchApi'
import { Box, Card, CardBody, Heading } from '@chakra-ui/react'

const Data = () => {
    const {data, loading, error} = useFetch(`http://api.weatherapi.com/v1/current.json?key=1c9641396de54c3280d143724231908&q=London&aqi=yes`)
  return (
    <>
        <Card m={4}>
            <Heading>
                Weather
            </Heading>
            <CardBody >
                <Box >
                Location: {data.location.name}
                </Box>
                <Box>
                Region: {data.location.region}
                </Box>
                <Box>
                    Temperature(in Celcius): {data.current.temp_c}
                </Box>
                <Box>
                    Wind Speed(in kph): {data.current.wind_kph}
                </Box>
                <Box>
                Humidity: {data.current.humidity}
                </Box>
            </CardBody>

        </Card>
    </>
  )
}

export default Data