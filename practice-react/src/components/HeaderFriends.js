import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGear,
  faMagnifyingGlass,
  faMusic,
} from '@fortawesome/free-solid-svg-icons'

function HeaderFriends() {
  return (
    <Header>
      <Title>Friends</Title>
      <IconWrap>
        <Icon>
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faMusic} size="lg" />
        </Icon>
        <Icon>
          <FontAwesomeIcon icon={faGear} size="lg" />
        </Icon>
      </IconWrap>
    </Header>
  )
}

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--horizontal-space);
  margin-bottom: 15px;
`
const Title = styled.h1`
  font-size: 32px;
  font-weight: 600;
`
const IconWrap = styled.div``

const Icon = styled.span`
  margin-left: 20px;
`

export default HeaderFriends
