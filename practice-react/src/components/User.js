import React from 'react'
import styled from 'styled-components'

function User(height, width) {
  return (
    <MainScreen>
      <UserWrap>
        <UserColumn>
          <Image
            src="https://avatars3.githubusercontent.com/u/3612017"
            height={height}
            width={width}
          />
          <UserText>
            <UserTitle>Nicolas</UserTitle>
          </UserText>
        </UserColumn>
      </UserWrap>
    </MainScreen>
  )
}

const MainScreen = styled.main`
  padding: 0px var(--horizontal-space);
`
const UserWrap = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`

const Image = styled.img`

  width: ${(props) => props.width}
  height: ${(props) => props.height}
  border-radius: 30px;
  margin-right: 20px;
`

const UserColumn = styled.div`
  &: first-child {
    display: flex;
    align-items: center;
  }
`

const UserText = styled.div``

const UserTitle = styled.h4`
  font-weight: 600;
  font-size: 22px;
`

export default User
