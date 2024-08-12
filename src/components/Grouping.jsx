import { Button, Group } from '@mantine/core'
import React from 'react'

const Grouping = () => {
  return (
   <><div>
      <Group>
        <Button variant='transparent'>one </Button>
        <Button variant='subtle'>two</Button>
        <Button variant=''>three</Button>
      </Group>

<Group grow>
    First 
    <>
    <div>Elemrt inside fragment</div>
    <div>Elemrt no fragment</div>
    </>
    {20}
</Group>
    </div>
    </> )
}

export default Grouping
