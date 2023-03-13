import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { Abel } from 'next/font/google'

const lato = Abel({ subsets: ['latin'], weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <main className={lato.className}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  )
}
