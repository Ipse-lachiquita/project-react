import React from 'react'
import StatuesBar from '../components/StatuesBar'
import HeaderFriends from '../components/HeaderFriends'
import DisplayFriendLink from '../components/DisplayFriendLink'
import User from '../components/User'
import ChannelContainer from '../components/ChannelContainer'
import styled from 'styled-components'
import Navigation from '../components/Navigation'

function Friends() {
  return (
    <>
      <StatuesBar />
      <HeaderFriends />
      <DisplayFriendLink />
      <Screen>
        <User
          height="80px"
          width="80px"
          radius="30px"
          titleName="Nicolas"
          src="https://avatars3.githubusercontent.com/u/3612017"
          weight="600"
        />
        <ChannelContainer />
      </Screen>
      <Navigation />
    </>
  )
}

const Screen = styled.main`
  padding: 0px var(--horizontal-space);
`

export default Friends
