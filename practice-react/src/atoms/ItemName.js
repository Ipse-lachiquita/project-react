import React from 'react'
import styled from 'styled-components'

function ItemName(props) {
  return (
    <>
      <Name>{props.itemName}</Name>
    </>
  )
}

const Name = styled.span`
  margin-top: 18px;
`

export default ItemName
