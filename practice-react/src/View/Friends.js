import React from 'react'
import StatuesBar from '../components/StatuesBar'
import HeaderFriends from '../components/HeaderFriends'
import DisplayFriendLink from '../components/DisplayFriendLink'
import User from '../components/User'

function Friends() {
  return (
    <>
      <StatuesBar />
      <HeaderFriends />
      <DisplayFriendLink />
      <User height="80px" width="80px" />
    </>
  )
}

export default Friends
