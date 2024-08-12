import { Autocomplete, Center } from '@mantine/core'
import React from 'react'

const AutoComletion = () => {
  return (
    <Center>
      <Autocomplete 
      label="Auto complete example"
      placeholder='Your library'
      w={200}
     
      data={['React','Sanjeev','Chota','Bade']}
      />
</Center>
      

  )
}

export default AutoComletion
