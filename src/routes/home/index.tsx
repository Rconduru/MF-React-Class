import React from 'react'
import { useLoginContext } from '../../states/exemplo1-context'

export default function Home() {
  const [loginState] = useLoginContext()

  return (
    <div>
      <h1>Home</h1>
      <h2>Email: {loginState.email}</h2>
      <h2>Password: {loginState.password}</h2>
    </div>
  )
}
