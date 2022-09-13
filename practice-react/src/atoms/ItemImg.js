import React from 'react'
import styled from 'styled-components'

function ItemImg(props) {
  return (
    <>
      <Item src={props.src} />
    </>
  )
}

const Item = styled.img`
  width: 35px;
  height: 35px;
`

export default ItemImg
