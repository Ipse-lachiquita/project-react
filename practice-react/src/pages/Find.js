import React from 'react'
import styled from 'styled-components'
import Navigation from '../atoms/Navigation'
import HeaderFind from '../molecules/HeaderFind'
import ItemContainer from '../molecules/ItemContainer'
import OpenChat from '../organisms/OpenChat'
import RecommendedFriends from '../organisms/RecommendedFriends'

function Find() {
  return (
    <>
      <HeaderFind />
      <Screen>
        <ItemContainer />
        <RecommendedFriends title="Recommend Friends" />
        <OpenChat />
      </Screen>
      <Navigation />
    </>
  )
}

const Screen = styled.main`
  padding: 0px var(--horizontal-space);
  height: 11000vh;
`

export default Find
