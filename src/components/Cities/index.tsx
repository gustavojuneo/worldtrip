import { Flex, Grid, Heading } from '@chakra-ui/react'
import { City } from './City'

const citiesList = [
  {
    name: 'Londres',
    country: 'Reino Unido',
    image: '/continents/europe/london.png',
    flag: '/countries/united-kingdom.png'
  },
  {
    name: 'Paris',
    country: 'França',
    image: '/continents/europe/paris.png',
    flag: '/countries/french.png'
  },
  {
    name: 'Roma',
    country: 'Itália',
    image: '/continents/europe/roma.png',
    flag: '/countries/italy.png'
  },
  {
    name: 'Praga',
    country: 'República Tcheca',
    image: '/continents/europe/praga.png',
    flag: '/countries/republic.png'
  },
  {
    name: 'Amsterdã',
    country: 'Holanda',
    image: '/continents/europe/amsterdam.png',
    flag: '/countries/netherlands.png'
  }
]

export function Cities() {
  return (
    <Flex direction="column">
      <Heading fontSize={['2xl', '5xl']} fontWeight="medium" mb="10">
        Cidades +100
      </Heading>

      <Grid
        templateColumns={['1fr', '1fr 1fr', 'repeat(3, 1fr)', 'repeat(4, 1fr)']}
        gap={['20px', '45px']}
        justifyContent="center"
        px={['30px', '0']}
      >
        {citiesList.map(city => (
          <City city={city} />
        ))}
      </Grid>
    </Flex>
  )
}
