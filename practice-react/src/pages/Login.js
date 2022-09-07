import React from 'react'
import styled from 'styled-components'
import HeaderLogin from '../molecules/HeaderLogin'
import StatuesBar from '../atoms/StatuesBar'
import InputLogin from '../atoms/InputLogin'
import FindAccount from '../atoms/FindAccount'
import ButtonLink from '../molecules/ButtonLink'

function Login() {
  return (
    <>
      <StatuesBar />
      <HeaderLogin
        title="Welcome to Kokoa Clone"
        text="If you have a Kokoa Account, log in with your email or phone number."
      />
      <Form>
        <InputLogin
          name="username"
          type="text"
          placeholder="Email or phone number"
        />
        <InputLogin name="password" type="password" placeholder="Password" />
        <ButtonLink to="/Friends" />
        <FindAccount text="Find Kokoa Account or Password" />
      </Form>
    </>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`

export default Login
