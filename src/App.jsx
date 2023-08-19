import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {
    <>
    <Grid templateAreas={`"nav nav"
                          "icon data"`}>

    <GridItem bg={'orange.300'} area={'nav'}>
      nav
    </GridItem>
    <GridItem bg={'pink.300'} area={'icon'}>
      icon
    </GridItem>
    <GridItem bg={'green.400'} area={'data'}>
      data
    </GridItem>
    </Grid>
    </>
}

export default App
