import React from 'react'
import styled from 'styled-components'

function UserName(props) {
  return (
    <>
      <Name weight={props.weight}>{props.title}</Name>
    </>
  )
}

const Name = styled.h4`
  font-weight: ${(props) => props.weight};
  font-size: 22px;
`

export default UserName
