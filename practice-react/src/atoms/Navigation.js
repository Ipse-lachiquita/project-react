import React from 'react'
import styled from 'styled-components'
import NavIcon from './NavIcon'
import userHover from '../images/userHover.png'
import comment from '../images/comment.png'
import magnifier from '../images/magnifier.png'
import option from '../images/option.png'
import { useNavigate } from 'react-router-dom'

function Navigation() {
  let navigation = useNavigate()
  return (
    <Wrap>
      <List>
        <NavIcon src={userHover} onClick={() => navigation('/Friends')} />
        <NavIcon src={comment} onClick={() => navigation('/Chats')} />
        <NavIcon src={magnifier} onClick={() => navigation('/Find')} />
        <NavIcon src={option} onClick={() => navigation('/More')} />
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
const Div = styled.div``
export default Navigation
