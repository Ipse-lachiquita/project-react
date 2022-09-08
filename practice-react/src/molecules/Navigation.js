import React from 'react'
import styled from 'styled-components'
import NavIcon from '../atoms/NavIcon'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  let navigate = useNavigate()

  return (
    <Wrap>
      <List>
        <NavIcon src={user} to="/Friends" />
        <NavIcon src={comment} to="/Chats" />
        <NavIcon src={magnifier} to="/Find" />
        <NavIcon src={option} to="/More" />
      </List>
    </Wrap>
  )
}

const Wrap = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #f9f9fa;
  padding: 20px 50px;
  box-sizing: border-box;
  border-top: 1px solid rgba(121, 121, 121, 0.3);
`

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`

export default Navigation
