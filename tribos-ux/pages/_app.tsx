// CSS
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Session, SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import '../styles/globals.scss'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  // Create a new supabase browser client on every first render.
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      {getLayout(<Component {...pageProps} />)}
    </SessionContextProvider>
  )
}
