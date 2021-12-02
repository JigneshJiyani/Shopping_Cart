import Button from '@restart/ui/esm/Button';
import { image } from 'faker';
import React from 'react';
import { Form } from 'semantic-ui-react';

class LoginForm extends React.Component {

  handleSignIn(e) {
    e.preventDefault()
    let username = this.refs.username.value
    let password = this.refs.password.value
    console.log(username, password)
    if (username !== '' && password !== '') {
      window.location.replace('/login')
      this.props.onSignIn(username, password)
    }
  }

  render() {
    console.log(this.props)
    return (
      <center>
        <Form className="login" onSubmit={this.handleSignIn.bind(this)}>
          <h1>Login Page</h1>
          <br />
          <input type="text" ref="username" placeholder="Enter username" />
          <br /><br />
          <input type="password" ref="password" placeholder="Enter password" />
          <br /><br />
          <Button type="submit" value="Login">Login</Button>
        </Form>
      </center>
    )
  }

}

export default LoginForm;