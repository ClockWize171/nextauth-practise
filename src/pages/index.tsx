import Head from 'next/head'
import { useState } from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Layout from 'layout/layout'
import Guest from '@/components/Guest'
import User from '@/components/User'
import { getSession, useSession } from "next-auth/react"


export default function Home() {
  const { data: session } = useSession();
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      {session === null ? <Guest session={session} /> : <User session={session} />}
    </Layout>
  )
}

export async function getServerSideProps({ req }: any) {
  const session = await getSession({ req })
  if(!session){
    return{
      redirect: {
        destination: 'login',
        permanent: false,
      }
    }
  }
  return {
    props: { session }
  }
}
