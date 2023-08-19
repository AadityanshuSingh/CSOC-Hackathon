import { HStack, IconButton, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import React from 'react'

const Nav = () => {
  return (
    <>
        <HStack justifyContent={'space-between'}>
            <InputGroup>
            <Input placeholder='Enter City Name' variant={'filled'}/>
            <InputRightElement>
            <IconButton
                colorScheme='blue'
                aria-label='Search database'
                icon={<SearchIcon/>}
            />
            </InputRightElement>
            </InputGroup>
        </HStack>
    </>
  )
}

export default Nav