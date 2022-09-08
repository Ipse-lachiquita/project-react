import React from 'react'
import HeaderFriends from '../molecules/HeaderFriends'
import DisplayFriendLink from '../atoms/DisplayFriendLink'
import User from '../molecules/User'
import ChannelContainer from '../molecules/ChannelContainer'
import styled from 'styled-components'
import Navigation from '../atoms/Navigation'
import Channel from '../molecules/Channel'

function Friends() {
  return (
    <>
      <HeaderFriends />
      <DisplayFriendLink />
      <Screen>
        <User />
        <ChannelContainer>
          <Channel />
        </ChannelContainer>
      </Screen>
      <Navigation />
    </>
  )
}

const Screen = styled.main`
  padding: 0px var(--horizontal-space);
`

export default Friends
