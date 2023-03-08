import Head from 'next/head'
import React, { useState } from 'react'
import Layout from 'layout/layout'
import styles from '@/styles/Form.module.css'
import { HiEye, HiEyeOff, HiAtSymbol, HiOutlineUser } from 'react-icons/hi'
import { useFormik } from 'formik'
import Link from 'next/link'
import { registerValidate } from 'lib/validate'

type HiddenProps = {
  passwd: boolean,
  confirmpasswd: boolean
}

const Register: React.FC = () => {
  const [hidden, setHidden] = useState<HiddenProps>({ passwd: true, confirmpasswd: true })
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPasswd: "",
    },
    validate: registerValidate,
    onSubmit
  })

  async function onSubmit(value: any) {
    console.log(value)
  }

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

      <form className='flex flex-col gap-5 px-10' onSubmit={formik.handleSubmit}>
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type="text"
            placeholder='Username'
            {...formik.getFieldProps("username")}
          />
          <span className='icon flex items-center px-4'>
            <HiOutlineUser />
          </span>
        </div>
        {formik.errors.username && formik.touched.username
          ?
          <span className='text-sm text-red-600 text-left'>{formik.errors.username}</span>
          :
          <></>
        }
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
            type={hidden.passwd ? "password" : "text"}
            placeholder='Password'
            {...formik.getFieldProps("password")}
          />
          <span className='icon flex items-center px-4'>
            {hidden.passwd ?
              // <HiEyeOff onClick={() => handleClickPassword(hidden.passwd)} />
              <HiEyeOff onClick={() => setHidden({
                ...hidden,
                passwd: !hidden.passwd
              })} />
              :
              <HiEye onClick={() => setHidden({
                ...hidden,
                passwd: !hidden.passwd
              })} />
            }
          </span>
        </div>
        {formik.errors.password && formik.touched.password
          ?
          <span className='text-sm text-red-600 text-left'>{formik.errors.password}</span>
          :
          <></>
        }
        <div className={styles.input_group}>
          <input
            className={styles.input_text}
            type={hidden.confirmpasswd ? "password" : "text"}
            placeholder='Confirm Password'
            {...formik.getFieldProps("confirmPasswd")}
          />
          <span className='icon flex items-center px-4'>
            {hidden.confirmpasswd ?
              <HiEyeOff onClick={() => setHidden({
                ...hidden,
                confirmpasswd: !hidden.confirmpasswd
              })} />
              :
              <HiEye onClick={() => setHidden({
                ...hidden,
                confirmpasswd: !hidden.confirmpasswd
              })} />
            }
          </span>
        </div>
        {formik.errors.confirmPasswd && formik.touched.confirmPasswd
          ?
          <span className='text-sm text-red-600 text-left'>{formik.errors.confirmPasswd}</span>
          :
          <></>
        }
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