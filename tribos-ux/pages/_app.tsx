// CSS
import "../styles/globals.scss";
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider, Session } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
   // Create a new supabase browser client on every first render.
   const [supabaseClient] = useState(() => createBrowserSupabaseClient())

  return  (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
       <Component {...pageProps} />
    </SessionContextProvider>
  )
}
