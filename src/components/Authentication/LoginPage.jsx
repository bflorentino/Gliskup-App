import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginWithUserAndPassword } from '../../actions/authActions'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { setLoading } from '../../actions/InterfaceActions'

const LoginPage = () => {

  const [ formValues, handleInputChanges ] = useForm({
    user: "",
    password: ""
  })

  const {user, password} = formValues

  const dispatch = useDispatch()
  const { loading } = useSelector(state => state.interfaceReducer)

  const handleLogin = (e) => {
    e.preventDefault()
    dispatch(setLoading())    
    dispatch(loginWithUserAndPassword(user, password))
  }

  return (
    <section className ='flex flex-row items-center justify-center  h-screen'>
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

            <button type='submit' 
                    disabled={loading} 
                    className='bg-auth-submit text-white w-4/5 py-1 mt-8 font-bold hover:bg-link'
            >
              Sign In
            </button>

            <Link to='/auth/signup' className='mt-4 cursor-pointer hover:underline text-sm'>
                Don't have any account? You can register here 
            </Link>

          </form>
    </section>
  )
}

export default LoginPage