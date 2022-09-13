import React from 'react'
import styled from 'styled-components'

function RecommendedFriends(props) {
  return (
    <>
      <Wrap>
        <Title>{props.title}</Title>
        <Content>You have no recommended friends.</Content>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  margin: 25px 0px;
  padding: 25px 0px;
  border-top: var(--main-border);
  border-bottom: var(--main-border);
`
const Title = styled.h6`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
`
const Content = styled.span`
  margin: 110px 0px;
  display: block;
  text-align: center;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
`
export default RecommendedFriends
