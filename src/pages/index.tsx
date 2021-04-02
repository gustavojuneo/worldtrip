import Head from 'next/head'
import {
  Box,
  Center,
  Divider,
  Flex,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Flex direction="column" h="100vh">
        <Header />
        <HomeBanner />
        <Flex
          as="main"
          direction="column"
          w="100%"
          maxWidth={1440}
          mx="auto"
          mt="8"
        >
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="158px"
            align="flex-start"
            mt="32"
          >
            <Flex direction="column" align="center" justify="center">
              <Image
                src="./icons/cocktail.svg"
                alt="Vida noturna"
                h="85"
                mb="6"
              />
              <Text as="span" fontWeight="semibold" fontSize="sm">
                vida noturna
              </Text>
            </Flex>

            <Flex direction="column" align="center" justify="center">
              <Image src="./icons/surf.svg" alt="beach" h="85" mb="6" />
              <Text as="span" fontWeight="semibold" fontSize="sm">
                praia
              </Text>
            </Flex>

            <Flex direction="column" align="center" justify="center">
              <Image src="./icons/building.svg" alt="moderno" h="85" mb="6" />
              <Text as="span" fontWeight="semibold" fontSize="sm">
                moderno
              </Text>
            </Flex>

            <Flex direction="column" align="center" justify="center">
              <Image src="./icons/museum.svg" alt="clássico" h="85" mb="6" />
              <Text as="span" fontWeight="semibold" fontSize="sm">
                clássico
              </Text>
            </Flex>

            <Flex direction="column" align="center" justify="center">
              <Image src="./icons/earth.svg" alt="e mais" h="85" mb="6" />
              <Text as="span" fontWeight="semibold" fontSize="sm">
                e mais...
              </Text>
            </Flex>
          </SimpleGrid>

          <Center my="24" height="2px">
            <Divider
              borderColor="gray.900"
              borderBottomWidth="2px"
              maxWidth={90}
            />
          </Center>
        </Flex>
      </Flex>
    </div>
  )
}
