import React from 'react'
import styled from 'styled-components'

function HeaderLogin(props) {
  return (
    <>
      <Wrap>
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
      </Wrap>
    </>
  )
}

const Wrap = styled.header`
  margin-top: 90px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: 600;
`

const Title = styled.h1`
  margin-bottom: 20px;
  font-size: 25px;
`

const Text = styled.p`
  width: 60%;
  margin-bottom: 90px;
  opacity: 0.7;
}`

export default HeaderLogin
