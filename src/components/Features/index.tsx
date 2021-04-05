import { Grid, GridItem } from '@chakra-ui/react'
import { Feature } from './feature'

export function Features() {
  return (
    <Grid
      w="100%"
      maxW={1160}
      mx="auto"
      templateColumns={['1fr 1f', '1fr 1fr', '1fr 1fr', 'repeat(5, 1fr)']}
      flexWrap="wrap"
      justify="space-between"
      align="center"
      mt={['10', '32']}
      gap={[1, 5]}
    >
      <GridItem>
        <Feature icon="cocktail" text="vida noturna" />
      </GridItem>

      <GridItem>
        <Feature icon="surf" text="praia" />
      </GridItem>

      <GridItem>
        <Feature icon="building" text="moderno" />
      </GridItem>

      <GridItem>
        <Feature icon="museum" text="clássico" />
      </GridItem>

      <GridItem>
        <Feature icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  )
}
