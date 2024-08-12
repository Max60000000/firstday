import {  Button, Fieldset, Group, TextInput } from '@mantine/core'
import React from 'react'

const FieldSetting = () => {
  const FieldSet=()=>{
    
  }
  return (
    <div >
      <Fieldset w={500}  legend="Personal info">
        <TextInput label="Your name " placeholder='Your name '/>
        <TextInput label="Email" placeholder='Email' mt="sm" />

        <Group justify='flex-end' mt="md">
          <Button>Send</Button>
        </Group>
</Fieldset>
    </div>
  )
}

export default FieldSetting
