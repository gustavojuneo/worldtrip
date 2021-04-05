import {
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'

export function ContinentBanner() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box w="100%" h={500} pos="relative">
      <Image
        src="/continent-background.jpg"
        w="100%"
        h="100%"
        pos="absolute"
        left="0"
        top="0"
        zIndex="-1"
      />

      <Flex
        w="90%"
        h="100%"
        maxWidth={1440}
        mx="auto"
        justify="space-between"
        align="center"
      >
        <Heading
          size="xl"
          fontWeight="medium"
          color="gray.50"
          alignSelf="flex-end"
          mb="16"
        >
          Europa
        </Heading>
      </Flex>
    </Box>
  )
}
