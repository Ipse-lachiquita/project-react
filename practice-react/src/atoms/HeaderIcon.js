import React from 'react'
import styled from 'styled-components'

function HeaderIcon(props) {
  return (
    <Wrap>
      <Icon src={props.src} />
    </Wrap>
  )
}

const Wrap = styled.span`
  margin-left: 20px;
`
const Icon = styled.img`
  height: 20px;
  width: 20px;
`

export default HeaderIcon
