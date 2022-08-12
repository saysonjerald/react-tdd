/* eslint-disable react/button-has-type */
import { Component } from 'react';

class SignUpPage extends Component {
  render() {
    return (
      <>
        <h1>Sign Up</h1>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <label htmlFor="passwordRepeat">Password Repeat</label>
        <input type="password" id="passwordRepeat" />
        <button disabled>Sign Up</button>
      </>
    );
  }
}

// function SignUpPage() {
//   return <h1>Sign Up</h1>;
// }

// const SignUpPage = () => <h1>Sign Up</h1>;

export default SignUpPage;
