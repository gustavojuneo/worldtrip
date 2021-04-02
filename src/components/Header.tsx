import { Box, Flex, Icon, IconButton, Image, Link } from '@chakra-ui/react'
import { FiChevronLeft } from 'react-icons/fi'

interface HeaderProps {
  backButton?: boolean
}

export function Header({ backButton = false }: HeaderProps) {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h="25"
      mx="auto"
      align="center"
      justify="center"
      px="12"
      py="12"
      pos="relative"
    >
      {backButton && (
        <IconButton
          aria-label="Back page"
          icon={<Icon as={FiChevronLeft} />}
          variant="unstyled"
          fontSize="24"
          pos="absolute"
          left="10"
          onClick={() => {}}
        />
      )}

      <Link>
        <Image src="./logo.svg" alt="Worldtrip" />
      </Link>
    </Flex>
  )
}
