import React from 'react'
import styled from 'styled-components'
import UserName from './UserName'
import UserImg from './UserImg'

function User(props) {
  return (
    <Wrap>
      <Column>
        <UserImg
          src={props.src}
          height={props.height}
          width={props.width}
          radius={props.radius}
        />
        <UserName weight={600} title="Han" />
      </Column>
    </Wrap>
  )
}

const Wrap = styled.div`
  justify-content: space-between;
`

const Image = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radius};
  margin-right: 20px;
`

const Column = styled.div`
  &:first-child {
    display: flex;
    align-items: center;
  }
`

export default User
