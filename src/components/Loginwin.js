import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import '../App.css';
export default function Loginwin() {
  return (
    <div className="login">
      <p>Please<Link to="/Login">Login</Link></p>
    </div>
  )
}
