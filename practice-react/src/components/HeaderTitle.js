import React from 'react'
import styled from 'styled-components'

function HeaderTitle(props) {
  return <Title>{props.title}</Title>
}

const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
`

export default HeaderTitle
