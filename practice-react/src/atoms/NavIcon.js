import React from 'react'
import styled from 'styled-components'

function NavIcon(props) {
  return (
    <List>
      <Div onClick={props.onClick}>
        <Image src={props.src} />
      </Div>
    </List>
  )
}

const List = styled.li`
  display: flex;
  justify-content: space-between;
`

const Div = styled.div``

const Image = styled.img`
  height: 32px;
  width: 32px;
`

export default NavIcon
