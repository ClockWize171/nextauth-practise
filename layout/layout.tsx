import React from 'react'
import styles from '@/styles/Layout.module.css'
import { useRouter } from 'next/router'

type LayoutProps = {
  children: JSX.Element | JSX.Element[]
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter()
  const currentPath = router.pathname;

  return (
    <div className='flex h-screen bg-blue-400'>
      <div className={
        `m-auto bg-slate-50 rounded-md 
        w-3/5 h-3/4 
        ${currentPath === '/' ? '' : 'grid lg:grid-cols-2'}`
      }>
        {currentPath === '/' ?
          null
          :
          <div className={styles.imgStyle}>
            <div className={styles.cartoonImg} />
            <div className={styles.cloudOne} />
            <div className={styles.cloudTwo} />
            <div />
          </div>
        }

        <div className='right flex flex-col h-full justify-evenly'>
          <div className='text-center py-10'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Layout