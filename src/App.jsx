import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import Nav from '../components/Nav'

function App() {
  return(
    <>
    <Grid templateAreas={`"nav nav"
                          "icon data"`}>

    <GridItem bg={'orange.300'} area={'nav'}>
      <Nav/>
    </GridItem>
    <GridItem bg={'pink.300'} area={'icon'}>
      Icon
    </GridItem>
    <GridItem bg={'green.400'} area={'data'}>
      Data
    </GridItem>
    </Grid>
    </>
  )
    
}

export default App
