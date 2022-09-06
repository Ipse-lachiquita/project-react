import React from 'react'
import styled from 'styled-components'

function NavIcon(props) {
  return (
    <List>
      <Link>
        <Image src={props.src} />
      </Link>
    </List>
  )
}

const List = styled.li`
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  position: relative;
  color: #2e353e;
`

const Image = styled.img`
  height: 32px;
  width: 32px;
`

export default NavIcon
