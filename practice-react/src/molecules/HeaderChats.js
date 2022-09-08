import React from 'react'
import styled from 'styled-components'
import HeaderIcon from '../atoms/HeaderIcon'
import HeaderTitle from '../atoms/HeaderTitle'
import magnifierHover from '../images/magnifierHover.png'
import chat from '../images/chat.png'
import music from '../images/music.png'
import settings from '../images/settings.png'

function HeaderChats() {
  return (
    <Header>
      <HeaderTitle title="Chats" />
      <Wrap>
        <HeaderIcon src={magnifierHover} />
        <HeaderIcon src={chat} />
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

export default HeaderChats
