import React from 'react'
import '../App.css';
export default function Login() {
  return (
    <div className="login">
        <h1>Login Form</h1>
      <p>Please fill in this form to login.</p>
      <form action="">
        <label htmlFor="Name">Username</label>
        <input type="text" id="Name"/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email"/>
        <label htmlFor="passwd">Password</label>
        <input type="password" id="passwd" />
      </form>
      <button type="submit" >show password</button>
      <button className="btn">Login</button>
    </div>
  )
}
