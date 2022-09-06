import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWifi,
  faBatteryFull,
  faBoltLightning,
} from '@fortawesome/free-solid-svg-icons'

function StatuesBar() {
  return (
    <StatusBar>
      <Column>
        <span>No service</span>
        <FontAwesomeIcon icon={faWifi} />
      </Column>
      <Column>
        <span>18:43</span>
      </Column>
      <Column>
        <span>100%</span>
        <FontAwesomeIcon className="battery" icon={faBatteryFull} size="lg" />
        <FontAwesomeIcon icon={faBoltLightning} />
      </Column>
    </StatusBar>
  )
}

const StatusBar = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px 3px;
`
const Column = styled.div`
  width: 33%;
  &:nth-child(2) {
    display: flex;
    justify-content: center;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  &:first-child span {
    margin-right: 5px;
  }
  &:last-child .battery {
    margin: 0px 5px;
  }
`

export default StatuesBar
