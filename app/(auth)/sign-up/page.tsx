// those files within signup and signin folder without () count as aditional route
// http://localhost:3000/sign-in

import React from 'react'
import AuthForm from '@/components/AuthForm'

const SignUp = () => {
  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up'/>
    </section>
  )
}

export default SignUp