import React from 'react'
import styled from 'styled-components'
import Navigation from '../atoms/Navigation'
import HeaderFind from '../molecules/HeaderFind'

function Find() {
  return (
    <>
      <HeaderFind />
      <Screen></Screen>
      <Navigation />
    </>
  )
}

const Screen = styled.main`
  padding: 0px var(--horizontal-space);
`

export default Find
