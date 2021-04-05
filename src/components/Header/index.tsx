import { Flex, Grid, Icon, IconButton, Image, Link } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import { FiChevronLeft } from 'react-icons/fi'

export function Header() {
  const { asPath, back } = useRouter()
  const notHomePage = asPath !== '/'

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1440}
      h={['50px', '100px']}
      mx="auto"
      align="center"
      justify="center"
      px="12"
    >
      <Grid
        w="100%"
        maxW={1440}
        h="100%"
        mx="auto"
        alignItems="center"
        templateColumns="repeat(3, 1fr)"
        justifyContent="center"
        alignSelf="start"
      >
        {notHomePage && (
          <IconButton
            aria-label="Back page"
            icon={<Icon as={FiChevronLeft} />}
            variant="unstyled"
            fontSize="24"
            justifySelf="start"
            onClick={back}
          />
        )}

        <Link justifySelf="center" gridColumn="2">
          <Image src="./logo.svg" alt="Worldtrip" />
        </Link>
      </Grid>
    </Flex>
  )
}
