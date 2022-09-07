import React from 'react'
import styled from 'styled-components'
import HeaderIcon from './HeaderIcon'
import HeaderTitle from './HeaderTitle'
import magnifierHover from '../images/magnifierHover.png'
import music from '../images/music.png'
import settings from '../images/settings.png'

function HeaderFriends() {
  return (
    <Header>
      <HeaderTitle title="Friends" />
      <Wrap>
        <HeaderIcon src={magnifierHover} />
        <HeaderIcon src={music} />
        <HeaderIcon src={settings} />
      </Wrap>
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
const Wrap = styled.div``

export default HeaderFriends
