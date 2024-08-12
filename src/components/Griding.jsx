import { Grid } from '@mantine/core'
import React from 'react'

const Griding = () => {
  return (
    <div>
      <Grid>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }} style={{background:"red"}}>1</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>2</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>3</Grid.Col>
      <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>4</Grid.Col>
      <Grid.Col span={3} offset={3}>75</Grid.Col>      </Grid>
    </div>
  )
}

export default Griding
