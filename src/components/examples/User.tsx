import React from 'react'
import { SampleUser } from 'App'
import styled from 'styled-components'

interface Props {
  user: SampleUser
}

export const User: React.VFC<Props> = (props) => {
  return (
    <StyledCard>
      <ul>
        <li>Name: {props.user.fullname}</li>
        <li>Job: {props.user.job}</li>
        <li>Age: {props.user.age}</li>
      </ul>
    </StyledCard>
  )
}

const StyledCard = styled.div`
  padding: 1rem 2rem;
  border: 1px solid ${(props) => props.theme.color.success};
`
