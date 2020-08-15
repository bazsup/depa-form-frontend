import React, { useState } from "react"
import jwtDecode from "jwt-decode"

import { JWT_TOKEN, lang } from "../../constants"
import { login } from "../../services/authen"
import { PrimaryButton } from "../../elements/PrimaryButton"
import { Form, Input } from "semantic-ui-react"

const LoginForm = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {
    login({
      email,
      password,
    })
      .then((loginResponse) => {
        const userJwtToken = loginResponse.data.accessToken
        localStorage.setItem(JWT_TOKEN, userJwtToken)
        alert(lang.th.loginSuccess)
      })
      .catch((err) => {
        alert(lang.th.loginFail)
      })
  }

  const logout = () => {
    alert("Clear cache JWT !!!")
    localStorage.clear()
  }

  return (
    <Form>
      <div className="row justify-content-md-center mt-3">
        <div className="col">
          <Form.Field>
            <label>Email</label>
            <Input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e, { value }) => {
                setEmail(value)
              }}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e, { value }) => {
                setPassword(value)
              }}
            />
          </Form.Field>
          <PrimaryButton fluid onClick={handleLogin}>
            Login
          </PrimaryButton>
          {/* <button onClick={logout} class="ui secondary button">
            Logout
          </button> */}
        </div>
      </div>
    </Form>
  )
}

export default LoginForm