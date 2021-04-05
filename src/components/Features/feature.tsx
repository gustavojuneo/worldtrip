import { Flex, Image, Text, useBreakpointValue } from '@chakra-ui/react'

interface FeatureProps {
  icon: string
  text: string
}

export function Feature({ icon, text }: FeatureProps) {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true
  })

  return (
    <Flex direction={['row', 'column']} align="center" justify="center">
      {isMobile ? (
        <Image src={`./icons/${icon}.svg`} alt={text} h="85" mb="6" />
      ) : (
        <Text color="yelow.500" mr="2">
          •
        </Text>
      )}
      <Text as="span" fontWeight="semibold" fontSize="sm">
        {text}
      </Text>
    </Flex>
  )
}
