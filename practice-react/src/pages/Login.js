import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
import HeaderLogin from '../molecules/HeaderLogin'
import StatuesBar from '../atoms/StatuesBar'
import InputLogin from '../atoms/InputLogin'
import FindAccount from '../atoms/FindAccount'
import ButtonLink from '../molecules/ButtonLink'
import Calculator from 'awesome-react-calculator'
import './styles.css'

function onResultChange(result) {
  console.log(result)
}

function Login() {
  // return (
  //   <>
  //     <HeaderLogin
  //       title="Welcome to Kokoa Clone"
  //       text="If you have a Kokoa Account, log in with your email or phone number."
  //     />
  //     <Form>
  //       <InputLogin
  //         name="username"
  //         type="text"
  //         placeholder="Email or phone number"
  //       />
  //       <InputLogin name="password" type="password" placeholder="Password" />
  //       <ButtonLink to="/Friends" />
  //       <FindAccount text="Find Kokoa Account or Password" />
  //     </Form>
  //   </>
  // )
  return (
    <div className="calculator" style={{ margin: 30 }}>
      <Calculator />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<Login />, rootElement)

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0px 30px;
`

export default Login
