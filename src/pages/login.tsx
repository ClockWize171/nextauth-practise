import Head from 'next/head'
import React, { useState } from 'react'
import Layout from 'layout/layout'
import Link from 'next/link'
import styles from '@/styles/Form.module.css'
import Image from 'next/image'
import { HiAtSymbol, HiEye, HiEyeOff } from 'react-icons/hi'

const Login = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className='w-3/4 mx-auto flex flex-col gap-10 pb-3'>
        <div>
          <h1 className='text-gray-800 text-4xl font-bold py-4'>Explore</h1>
          <p className='w-3/4 mx-auto text-gray-400'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore mollitia ut accusantium amet quos, ipsum reprehenderit rerum ea praesentium esse vero non iure atque.
          </p>
        </div>
      </section>

      <form className='flex flex-col gap-5 px-10'>
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
            type={hidden ? "password" : "text"}
            name='password'
            placeholder='Password' />
          <span className='icon flex items-center px-4'>
            {hidden ?
              <HiEyeOff onClick={() => setHidden(!hidden)} />
              :
              <HiEye onClick={() => setHidden(!hidden)} />
            }
          </span>
        </div>

        <div className={styles.button}>
          <button type='submit'>Login</button>
        </div>
        <div className="input-button">
          <button type='button' className={styles.button_custom}>
            Sign In with Google <Image src={'/assets/google.svg'} alt='google' width='20' height='20' />
          </button>
        </div>
        <div className="input-button">
          <button type='button' className={styles.button_custom}>
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