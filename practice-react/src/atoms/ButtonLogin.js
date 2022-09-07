import React from 'react'
import styled from 'styled-components'

function ButtonLogin(props) {
  return (
    <>
      <Button type="submit" value={props.value} />
    </>
  )
}

const Button = styled.input`
  background-color: var(--yellow);
  cursor: pointer;
  padding: 20px 0px;
  border-radius: 5px;
  border: none;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 25px;
`

export default ButtonLogin
