import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUp } from '../../actions/authActions';
import { setLoading } from '../../actions/InterfaceActions';
import { useForm } from '../../hooks/useForm'
import { validateSignUpForm } from '../../validations/authFormValidation';

const SignUpPage = () => {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.interfaceReducer)

  const [formValues, handleInputChanges] = useForm({
    name: "Bryan",
    lastName: "Florentino",
    phone: "",
    email: "bryan@gmail.com",
    user: "bryanxv",
    password: '123456',
    password2: '123456'
  })

  const [ msgError, setMsgError ] = useState({
    responsibleInput: null,
    message : null
  })

  const {responsibleInput, message} = msgError
  const {name, lastName, phone, email, user, password, password2} = formValues;

  const handleSignUp = (e) => {
    e.preventDefault()

    const validForm = validateSignUpForm(formValues)

    if(validForm === true){
      setMsgError({message: null, responsibleInput: null})
      dispatch(setLoading())
      dispatch(signUp(formValues))
    }else{
      setMsgError({
        message: validForm[0],
        responsibleInput : validForm[1]
      })
    }
  }

  return (
    <section className ='flex flex-row items-center justify-center  h-screen'>
      <form 
        onSubmit={handleSignUp}
        className='flex flex-col items-center bg-white h-[490px] w-[400px] rounded-xl'
      >
        <h1 className='font-bold text-2xl'>Sign Up</h1>
        <input 
          type="text"
          name='name'
          autoComplete='off'
          placeholder='Your Name'
          value={name}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg focus'
        />
        {
          (message && responsibleInput === 0 ) && 
          (
            <div className='text-red-error text-sm w-4/5 mt-1'>
              {message }
            </div>
          )
        }

        <input 
          type="text"
          name='lastName'
          autoComplete='off'
          placeholder='Your Last Name'
          value={lastName}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg'
        />
          {
            (message && responsibleInput === 1 ) && 
            (
              <div className='text-red-error text-sm w-4/5 mt-1'>
              {message }
            </div>
            )
          }
        <input 
          type="text"
          name='phone'
          autoComplete='off'
          placeholder='Your Phone Number'
          value={phone}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg'
          />
          {
            (message && responsibleInput === 3 ) && 
            (
              <div className='text-red-error text-sm w-4/5 mt-1'>
               {message }
              </div>
            )
          }
        <input 
          type="text"
          name='email'
          autoComplete='off'
          placeholder='Your Email'
          value={email}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg'
        />
        {
          (message && responsibleInput === 2) && 
          (
            <div className='text-red-error text-sm w-4/5 mt-1'>
              {message }
            </div>
          )
        }
        <input 
          type="text"
          name='user'
          autoComplete='off'
          placeholder='Your User Name'
          value={user}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg'
        />
        {
          (message && responsibleInput === 4 ) && 
          (
            <div className='text-red-error text-sm w-4/5 mt-1'>
              {message }
            </div>
          )
        }
        <input 
          type="password"
          name='password'
          placeholder='Your Password'
          value={password}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg'
        />
          {
            (message && responsibleInput === 5) && 
            (
              <div className='text-red-error text-sm w-4/5 mt-1'>
               {message }
              </div>
            )
          }
        <input 
          type="password"
          name='password2'
          placeholder='Confirm Your Password'
          value={password2}
          onChange={handleInputChanges}
          className= 'w-4/5 mt-4 text-lg'
        />

        <button   
          type='submit'
          disabled = {loading} 
          className='bg-auth-submit hover:bg-link text-white w-4/5 py-1 mt-8 font-bold'
        > 
            Sign Up 
        </button>

        <Link to='/auth/login' className='mt-4 cursor-pointer hover:underline text-sm'>
              Already have an account? 
        </Link>

      </form>
    </section>
  )
}
export default SignUpPage