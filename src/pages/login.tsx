import Head from 'next/head'
import React, { useState } from 'react'
import Layout from 'layout/layout'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiEye, HiEyeOff } from 'react-icons/hi'
import { signIn } from "next-auth/react"
import { useFormik } from 'formik'
import { loginValidate } from 'lib/validate'

const Login = () => {
  const [hidden, setHidden] = useState(true);

  const handleSubmit = async (value: any) => {
    console.log(value)
  }

  // FORMIK CONFIG
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: handleSubmit
  })

  const handleGoogleSignIn = async () => {
    signIn('google', { callbackUrl: "http://localhost:3000" })
  }

  const handleGithubSignIn = async () => {
    signIn('github', { callbackUrl: "http://localhost:3000" })
  }

  // console.log(formik.errors)

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10 pb-3'>
        <div>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Login</h1>
          <p className='w-3/4 mx-auto text-gray-400'>
            Basic authentication with nextAuth in NextJS.
          </p>
        </div>
      </section>

      <form className='flex flex-col gap-5 px-10' onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="email"
            placeholder='Email'
            {...formik.getFieldProps("email")}
          />
          <span className='icon flex items-center px-4'>
            <HiAtSymbol />
          </span>
        </div>
        {formik.errors.email && formik.touched.email
          ?
          <span className='text-sm text-red-600 text-left'>{formik.errors.email}</span>
          :
          <></>
        }
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={hidden ? "password" : "text"}
            placeholder='Password'
            {...formik.getFieldProps("password")}
          />
          <span className='icon flex items-center px-4'>
            {hidden ?
              <HiEyeOff onClick={() => setHidden(!hidden)} />
              :
              <HiEye onClick={() => setHidden(!hidden)} />
            }
          </span>
        </div>
        {formik.errors.password && formik.touched.password
          ?
          <span className='text-sm text-red-600 text-left'>{formik.errors.password}</span>
          :
          <></>}
        <div>
          <button className={styles.button} type='submit'>Login</button>
        </div>
        <div className="input-button">
          <button type='button' onClick={handleGoogleSignIn} className={styles.button_custom}>
            Sign In with Google <Image src={'/assets/google.svg'} alt='google' width='20' height='20' />
          </button>
        </div>
        <div className="input-button">
          <button type='button' onClick={handleGithubSignIn} className={styles.button_custom}>
            Sign In with Github <Image src={'/assets/github.svg'} alt='github' width='20' height='20' />
          </button>
        </div>

        <p className='text-center text-gray-400'>
          Don&apos;t have an account yet? <Link className='text-blue-500' href='/register'>Sign Up</Link>
        </p>
      </form>
    </Layout>
  )
}

export default Login