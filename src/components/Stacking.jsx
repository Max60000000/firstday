import { Button, Stack } from '@mantine/core'
import React from 'react'

const Stacking = () => {
  return (
    <div>
      <Stack
      justify='center'
      align='center'
      >
        <Button variant='default'>1</Button>
        <Button variant='default'>2</Button>
        <Button variant='default'>3</Button>
      </Stack>
    </div>
  )
}

export default Stacking
