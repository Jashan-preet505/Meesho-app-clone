import React from 'react'

const Login = () => {
  return (
    <>
      <div>
        <form>
            <input type="text" placeholder="Username" required />
            <input type='email' placeholder="Email" required />
            <input type="password" placeholder="Password" required autoComplete='currentpassword' />
        </form>
      </div>
    </>
  )
}

export default Login