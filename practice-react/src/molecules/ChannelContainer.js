import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Channel from './Channel'

function ChannelContainer() {
  return (
    <Wrap>
      <Header>
        <Title>Channel</Title>
        <FontAwesomeIcon icon={faChevronUp} size={'xs'} />
      </Header>
      <Channel />
    </Wrap>
  )
}

const Wrap = styled.div`
  margin-top: 25px;
  border-top: var(--main-border);
  padding-top: 15px;
`

const Header = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.5);
`

const Title = styled.span``

export default ChannelContainer
