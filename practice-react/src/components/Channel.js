import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import User from './User'
function Channel() {
  return (
    <Wrap>
      <User
        height="60px"
        width="60px"
        radius="25px"
        titleName="Channel"
        src="https://avatars3.githubusercontent.com/u/3612017"
        weight="400"
      />
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
export default Channel
