import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'
import Nav from '../components/Nav'
import Data from '../components/Data'

function App() {
  return(
    <>
    <Grid templateAreas={`"nav nav"
                          "icon data"`}>

    <GridItem  area={'nav'}>
      <Nav/>
    </GridItem>
    <GridItem bg={'pink.300'} area={'icon'}>
      Icon
    </GridItem>
    <GridItem area={'data'}>
      <Data/>
    </GridItem>
    </Grid>
    </>
  )
    
}

export default App
