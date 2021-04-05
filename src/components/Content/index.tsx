import { Grid, Text } from '@chakra-ui/layout'
import { Info } from './Info'

export function Content() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr', '1.2fr 1fr']}
      gap={[5, 10, 16, 20]}
      my={[8, 20]}
    >
      <Text textAlign="justify" fontSize={['lg', 'xl', 'xl', '2xl']}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum delectus
        nulla et fugit itaque iste odio totam, deleniti facere velit ab vero,
        at, minima esse. Odit qui explicabo doloremque minima?
      </Text>

      <Info />
    </Grid>
  )
}
