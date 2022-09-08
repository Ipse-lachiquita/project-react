import React from 'react'
import styled from 'styled-components'

function ChatContent(props) {
  return (
    <>
      <Content>{props.content}</Content>
    </>
  )
}

const Content = styled.h6`
  margin-top: 5px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.5);
`

export default ChatContent
