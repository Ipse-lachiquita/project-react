import React from 'react'
import styled from 'styled-components'
import UserName from '../atoms/UserName'
import UserImg from '../atoms/UserImg'
import userImg from '../images/userImg.png'

function User() {
  return (
    <Wrap>
      <Column>
        <UserImg src={userImg} height="80px" width="80px" radius="30px" />
        <UserName weight={600} title="Lee Sohee" />
      </Column>
    </Wrap>
  )
}

const Wrap = styled.div`
  justify-content: space-between;
`

const Column = styled.div`
  &:first-child {
    display: flex;
    align-items: center;
  }
`

export default User
