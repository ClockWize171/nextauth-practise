import Link from 'next/link'
import React from 'react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'

type Props = {
  session: any,
}

const User = (props: Props) => {

  const handleSignOut = () => {
    signOut({ callbackUrl: 'http://localhost:3000/login' })
  }

  console.log(props.session)
  return (
    <main className='flex flex-col mx-auto h-full justify-center items-center'>
      <h1 className='text-3xl font-bold underline'>Your are {props.session?.user?.name}</h1>

      <div className=' object-cover mt-5'>
        <Image className='object-cover rounded-full' src={props.session?.user?.image} alt='image' width={200} height={200} />
      </div>

      <div className='detail my-5'>
        <h5>{props.session?.user?.email}</h5>
      </div>

      <div className='flex justify-center'>
        <button onClick={handleSignOut} className='px-10 py-1 rounded-sm bg-red-500 text-gray-50'>
          Logout
        </button>
      </div>

      <div className='flex justify-center mt-5'>
        <Link href='/login'>
          <button className='px-10 py-1 rounded-sm bg-blue-500 text-gray-50'>
            Profile
          </button>
        </Link>
      </div>
    </main>
  )
}

export default User