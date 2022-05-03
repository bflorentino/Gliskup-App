import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

const LoginPage = () => {

  const [ formValues, handleInputChanges ] = useForm({
    user: "bryanxv",
    password: "123456"
  })

  const {user, password} = formValues

  const handleLogin = (e) => {
    e.preventDefault()
  }

  return (
    <section className ='flex flex-row items-center justify-center  h-screen bg-auth-primary'>
          <form 
            onSubmit={handleLogin}
            className = 'flex flex-col items-center bg-white h-[250px] w-[370px] rounded-xl'
          >
            <h1 className='font-bold text-2xl'>Login</h1>
            <input 
              type="text"
              name='user'
              autoComplete='off'
              placeholder='Your User Name'
              value={user}
              onChange={handleInputChanges}
              className= 'w-4/5 mt-4 text-lg'
            />
        
            <input 
              type="password"
              name='password'
              placeholder='Your password'
              value={password}
              onChange={handleInputChanges}
              className= 'w-4/5 mt-4 text-lg'
            />

            <button type='submit' className='bg-auth-submit text-white w-4/5 py-1 mt-8 font-bold'>
              Sign In
            </button>

            <Link to='/auth/signup' className='mt-4 cursor-pointer hover:underline'>
              Already have an account? 
            </Link>

          </form>
    </section>
  )
}

export default LoginPage