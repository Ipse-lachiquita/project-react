import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import UserImg from '../atoms/UserImg'
import UserName from '../atoms/UserName'
import macLogo from '../images/macLogo.png'

function Channel() {
  return (
    <Wrap>
      <UserWrap>
        <UserColumn>
          <UserImg src={macLogo} height="60px" width="60px" radius="25px" />
          <UserName weight={400} title="McDonald's" />
        </UserColumn>
      </UserWrap>
      <Column>
        <Count>2</Count>
        <FontAwesomeIcon icon={faChevronRight} size="xs" />
      </Column>
    </Wrap>
  )
}

const Wrap = styled.div`
  justify-content: space-between;
  display: flex;
  align-items: center;
`
const Column = styled.div`
  color: rgba(0, 0, 0, 0.4);
  flex-direction: column;
  align-items: flex-end;
`
const Count = styled.span`
  margin-right: 3px;
`

const UserWrap = styled.div`
  justify-content: space-between;
`

const UserColumn = styled.div`
  &:first-child {
    display: flex;
    align-items: center;
  }
`
export default Channel
