import React from 'react'
import styled from 'styled-components'

function InputLogin(props) {
  return (
    <>
      <Input
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  )
}

const Input = styled.input`
  &::placeholder {
    color: rgba(0, 0, 0, 0.4);
  }
  &:not([type='submit']) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  &:focus {
    border-color: var(--yellow);
  }
  border: none;
  padding: 15px 0px;
  font-size: 18px;
  margin-bottom: 25px;
`

export default InputLogin
