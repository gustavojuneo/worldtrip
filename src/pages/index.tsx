import Head from 'next/head'
import SwiperCore, { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Box,
  Center,
  Divider,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react'
import { Header } from '../components/Header'
import { HomeBanner } from '../components/HomeBanner'

SwiperCore.use([Navigation, Pagination])

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Worldtrip</title>
      </Head>

      <Flex direction="column">
        <Header />
        <HomeBanner />
        <Flex
          as="main"
          direction="column"
          w="100%"
          maxWidth={1440}
          mx="auto"
          py="8"
        >
          <SimpleGrid
            flex="1"
            gap="16"
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

          <Flex direction="column" w="100%" align="center" justify="center">
            <Heading
              textAlign="center"
              fontWeight="medium"
              lineHeight="tall"
              size="xl"
              mb="16"
            >
              Vamos nessa?
              <Text>Então escolha seu continente</Text>
            </Heading>

            <Box width="90%" h={450} maxWidth={1240}>
              <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                navigation
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <Box
                    width="100%"
                    h={450}
                    bg="gray.900"
                    pos="relative"
                    zIndex="1"
                  >
                    <Image
                      src="./europe.jpg"
                      pos="absolute"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      zIndex="-1"
                    />

                    <Flex
                      direction="column"
                      w="100%"
                      h="100%"
                      align="center"
                      justify="center"
                    >
                      <Heading
                        color="gray.50"
                        fontWeight="bold"
                        size="2xl"
                        mb="4"
                      >
                        Europa
                      </Heading>
                      <Text
                        as="span"
                        color="gray.100"
                        fontWeight="bold"
                        fontSize="2xl"
                      >
                        o continente mais antigo.
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    width="100%"
                    h={450}
                    bg="gray.900"
                    pos="relative"
                    zIndex="1"
                  >
                    <Image
                      src="./europe.jpg"
                      pos="absolute"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      zIndex="-1"
                    />

                    <Flex
                      direction="column"
                      w="100%"
                      h="100%"
                      align="center"
                      justify="center"
                    >
                      <Heading
                        color="gray.50"
                        fontWeight="bold"
                        size="2xl"
                        mb="4"
                      >
                        Europa
                      </Heading>
                      <Text
                        as="span"
                        color="gray.100"
                        fontWeight="bold"
                        fontSize="2xl"
                      >
                        o continente mais antigo.
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    width="100%"
                    h={450}
                    bg="gray.900"
                    pos="relative"
                    zIndex="1"
                  >
                    <Image
                      src="./europe.jpg"
                      pos="absolute"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      zIndex="-1"
                    />

                    <Flex
                      direction="column"
                      w="100%"
                      h="100%"
                      align="center"
                      justify="center"
                    >
                      <Heading
                        color="gray.50"
                        fontWeight="bold"
                        size="2xl"
                        mb="4"
                      >
                        Europa
                      </Heading>
                      <Text
                        as="span"
                        color="gray.100"
                        fontWeight="bold"
                        fontSize="2xl"
                      >
                        o continente mais antigo.
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
                <SwiperSlide>
                  <Box
                    width="100%"
                    h={450}
                    bg="gray.900"
                    pos="relative"
                    zIndex="1"
                  >
                    <Image
                      src="./europe.jpg"
                      pos="absolute"
                      width="100%"
                      height="100%"
                      objectFit="cover"
                      zIndex="-1"
                    />

                    <Flex
                      direction="column"
                      w="100%"
                      h="100%"
                      align="center"
                      justify="center"
                    >
                      <Heading
                        color="gray.50"
                        fontWeight="bold"
                        size="2xl"
                        mb="4"
                      >
                        Europa
                      </Heading>
                      <Text
                        as="span"
                        color="gray.100"
                        fontWeight="bold"
                        fontSize="2xl"
                      >
                        o continente mais antigo.
                      </Text>
                    </Flex>
                  </Box>
                </SwiperSlide>
              </Swiper>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}
