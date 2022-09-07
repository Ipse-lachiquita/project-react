import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ButtonLogin from '../atoms/ButtonLogin'

function ButtonLink(props) {
  return (
    <>
      <PageLink to={props.to}>
        <ButtonLogin value="Log In" />
      </PageLink>
    </>
  )
}

const PageLink = styled(Link)`
  display: flex;
  flex-direction: column;
`

export default ButtonLink
