// CSS
import { createBrowserSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { Session, SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'
import '../styles/globals.scss'

import GroupsProvider from '../components/providers/GroupsProvider'

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page)
  // Create a new supabase browser client on every first render.
  const [supabase] = useState(() => createBrowserSupabaseClient())

  return (
    <GroupsProvider>
      <SessionContextProvider
        supabaseClient={supabase}
        initialSession={pageProps.initialSession}
      >
        {getLayout(<Component {...pageProps} />)}
      </SessionContextProvider>
    </GroupsProvider>
  )
}
