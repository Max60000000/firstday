import { Container } from '@mantine/core'
import React from 'react'

const Contain = () => {
const demo={   
     bg:"gray",
    h:"100",
    
    mt:"lg"
}
  return (
    <div>
      <Container ta='center' {...demo}>Default Container</Container>
      <Container size={'20rem'} {...demo}>
xs container
      </Container>
      <Container fluid px={0} size="30rem" {...demo}>Helowe</Container>
    </div>
  )
}
 
export default Contain
