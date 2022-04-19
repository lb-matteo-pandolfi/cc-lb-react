import React from 'react'
import styled from 'styled-components'

export const Container: React.FC = (props) => {
  return <ContainerStyled>{props.children}</ContainerStyled>
}

const ContainerStyled = styled.div`
  padding: 1rem 1.5rem 0;
  max-width: 1000px;
  margin: 0 auto;
`
