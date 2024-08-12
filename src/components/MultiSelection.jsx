import { Center, MultiSelect } from '@mantine/core'
import React from 'react'

const MultiSelection = () => {
  return (
  <Center>  <div >
      <MultiSelect label="Multi selection"
      placeholder='Favourites'
      data={['banana', 'orange', 'apple']}
      />
    </div>
    </Center>
    )
}

export default MultiSelection
