// those files within signup and signin folder without () count as aditional route
// http://localhost:3000/sign-in

import React from 'react'
import AuthForm from '@/components/AuthForm'


const SignUp = async () => {
  // const loggedInUser = await getLoggedInUser();
  // console.log(loggedInUser)
//   {
//   '$id': '664461f300128f3e060a',
//   '$createdAt': '2024-05-15T07:19:20.349+00:00',
//   '$updatedAt': '2024-05-15T07:19:20.349+00:00',
//   name: 'MAX PHUA',
//   registration: '2024-05-15T07:19:20.342+00:00',
//   status: true,
//   labels: [],
//   passwordUpdate: '2024-05-15T07:19:20.342+00:00',
//   email: 'maxphua90@gmail.com',
//   phone: '',
//   emailVerification: false,
//   phoneVerification: false,
//   mfa: false,
//   prefs: {},
//   targets: [
//     {
//       '$id': '664461f873088961de50',
//       '$createdAt': '2024-05-15T07:19:20.471+00:00',
//       '$updatedAt': '2024-05-15T07:19:20.471+00:00',
//       name: '',
//       userId: '664461f300128f3e060a',
//       providerId: null,
//       providerType: 'email',
//       identifier: 'maxphua90@gmail.com'
//     }
//   ],
//   accessedAt: '2024-05-15T07:19:20.342+00:00'
// }

  return (
    <section className='flex-center size-full max-sm:px-6'>
      <AuthForm type='sign-up'/>
    </section>
  )
}

export default SignUp