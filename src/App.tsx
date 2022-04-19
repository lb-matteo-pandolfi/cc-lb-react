import React from 'react'
import { Container } from '@components/examples/Container'
import { Title } from '@components/examples/Title'
import { User } from '@components/examples/User'

export const App: React.VFC = () => {
  return (
    <Container>
      <Title name={'Hello world'} />
      <User user={{ fullname: 'Tom Cruise', job: 'Actor', age: 59 }} />
    </Container>
  )
}
