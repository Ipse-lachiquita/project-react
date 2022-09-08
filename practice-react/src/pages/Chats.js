import React from 'react'
import styled from 'styled-components'
import Navigation from '../atoms/Navigation'
import HeaderChats from '../molecules/HeaderChats'
import Room from '../molecules/Room'

function Chats() {
  return (
    <>
      <HeaderChats />
      <Screen>
        <Room time="09:22" count="3" />
      </Screen>
      <Navigation />
    </>
  )
}

const Screen = styled.main`
  padding: 0px var(--horizontal-space);
`

export default Chats
