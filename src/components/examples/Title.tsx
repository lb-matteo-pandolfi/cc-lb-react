import React from 'react'
import styled from 'styled-components'

interface Props {
  name: string
}

export const Title: React.VFC<Props> = ({ name, ...rest }) => {
  return <HeadingStyled {...rest}>{name}</HeadingStyled>
}

const HeadingStyled = styled.h1`
  color: ${(props) => props.theme.color.primary};
  font-size: 2rem;
  &:hover {
    color: ${(props) => props.theme.color.success};
  }
`
