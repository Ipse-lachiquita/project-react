import React from 'react'
import styled from 'styled-components'
import UserImg from '../atoms/UserImg'
import UserName from '../atoms/UserName'
import chatImg from '../images/chatImg.png'
import ChatContent from '../atoms/ChatContent'

function Room(props) {
  return (
    <>
      <Wrap>
        <Column>
          <UserImg src={chatImg} height="70px" width="70px" radius="25px" />
          <Div>
            <UserName weight={600} title="Lee JiHoon" />
            <ChatContent content="Please check My Kokoa Account Info" />
          </Div>
        </Column>
        <Column>
          <Time>{props.time}</Time>
          <Count>{props.count}</Count>
        </Column>
      </Wrap>
    </>
  )
}

const Wrap = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`

const Column = styled.div`
  &:first-child {
    display: flex;
    align-items: center;
  }
  &:last-child {
    color: rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`
const Div = styled.div``

const Time = styled.span`
  margin-bottom: 10px;
  display: block;
`

const Count = styled.div`
  background-color: red;
  color: white;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  font-weight: 600;
`
export default Room
