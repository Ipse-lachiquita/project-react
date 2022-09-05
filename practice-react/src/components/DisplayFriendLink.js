import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faCircleInfo } from '@fortawesome/free-solid-svg-icons'

function DisplayFriendLink() {
  return (
    <>
      <DisplayLink>
        <FontAwesomeIcon icon={faCircleInfo} color="rgba(0, 0, 0, 0.3)" />{' '}
        Friend's Names Display{' '}
        <FontAwesomeIcon
          icon={faChevronRight}
          color="rgba(0, 0, 0, 0.3)"
          size="xs"
        />
      </DisplayLink>
    </>
  )
}

const DisplayLink = styled.a`
  text-align: center;
  display: block;
  background-color: #fafafa;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 15px;
  margin-top: -15px;
`

export default DisplayFriendLink
