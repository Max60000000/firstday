import { Button, Flex } from '@mantine/core'
import React from 'react'

const Flexing = () => {
  return (
    <div>
      <Flex
      justify="flex-end"
      align="flex-end"
      gap="md"
      mt="20px"
      >
        <Button>one</Button>
        <Button>two</Button>
        <Button>three</Button>
      </Flex>
    </div>
  )
}

export default Flexing
