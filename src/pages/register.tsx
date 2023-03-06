import Head from 'next/head'
import React, { useState } from 'react'
import Layout from 'layout/layout'
import styles from '@/styles/Form.module.css'
import { HiEye, HiEyeOff, HiAtSymbol, HiOutlineUser } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'

type HiddenProps = {
  passwd: boolean,
  confirmpasswd: boolean
}

const Register: React.FC = () => {
  const [hidden, setHidden] = useState<HiddenProps>({ passwd: true, confirmpasswd: true })

  return (
    <Layout>
      <Head>
        <title>Register</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10 pb-3'>
        <div>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Register</h1>
          <p className='w-3/4 mx-auto text-gray-400'>
            Register your credentials using NextAuth.
          </p>
        </div>
      </section>

      <form className='flex flex-col gap-5 px-10'>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="text"
            name='username'
            placeholder='Username' />
          <span className='icon flex items-center px-4'>
            <HiOutlineUser />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="email"
            name='email'
            placeholder='Email' />
          <span className='icon flex items-center px-4'>
            <HiAtSymbol />
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={hidden.passwd ? "password" : "text"}
            name='password'
            placeholder='Password' />
          <span className='icon flex items-center px-4'>
            {hidden.passwd ?
              // <HiEyeOff onClick={() => handleClickPassword(hidden.passwd)} />
              <HiEyeOff onClick={() => setHidden({
                passwd: !hidden.passwd,
                confirmpasswd: hidden.confirmpasswd
              })} />
              :
              <HiEye onClick={() => setHidden({
                passwd: !hidden.passwd,
                confirmpasswd: hidden.confirmpasswd
              })} />
            }
          </span>
        </div>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={hidden.confirmpasswd ? "password" : "text"}
            name='confrim_password'
            placeholder='Confirm Password' />
          <span className='icon flex items-center px-4'>
            {hidden.confirmpasswd ?
              <HiEyeOff onClick={() => setHidden({
                passwd: hidden.passwd,
                confirmpasswd: !hidden.confirmpasswd
              })} />
              :
              <HiEye onClick={() => setHidden({
                passwd: hidden.passwd,
                confirmpasswd: !hidden.confirmpasswd
              })} />
            }
          </span>
        </div>
        <div className={styles.button}>
          <button type='submit'>Register</button>
        </div>

        <p className='text-center text-gray-400'>
          Already have an account. <Link className='text-blue-500' href='/login'>Login</Link>
        </p>
      </form>
    </Layout>
  )
}

export default Register