import Link from 'next/link'
import React from 'react'

type Props = {
  session: any;
}

const Guest = (props: Props) => {
  return (
    <main className='flex flex-col mx-auto h-auto justify-center items-center'>
      <h1 className='text-3xl font-bold underline'>Your are a Guest!</h1>
      <div className='flex justify-center mt-5'>
        <Link href='/login'>
          <button className='px-10 py-1 rounded-sm bg-blue-500 text-gray-50'>
            Sign In
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Guest