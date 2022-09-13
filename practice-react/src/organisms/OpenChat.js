import React from 'react'
import styled from 'styled-components'

function OpenChat() {
  return (
    <Wrap>
      <Column>
        <Title>#BTS</Title>
      </Column>
    </Wrap>
  )
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Column = styled.div``
const Title = styled.h5`
  font-weight: 600;
  margin-bottom: 10px;
`

export default OpenChat
