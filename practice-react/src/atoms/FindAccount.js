import React from 'react'
import styled from 'styled-components'

function FindAccount(props) {
  return (
    <>
      <A>{props.text}</A>
    </>
  )
}

const A = styled.a`
  text-align: center;
  text-decoration: none;
  color: inherit;
  font-size: 13px;
`
export default FindAccount
