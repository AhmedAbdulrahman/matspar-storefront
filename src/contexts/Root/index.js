import * as React from 'react'
import PropTypes from 'prop-types'
import { CacheProvider } from '@emotion/react'
import { CssBaseline, Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material'
import createEmotionCache from '~/utils/createEmotionCache'
import { defaultTheme } from '~/components'
import GlobalProvider from '../Global'
import RemoteConfigProvider from '../RemoteConfig'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()
// Disable "potentially unsafe selector when doing server-side rendering" for Storybook.
clientSideEmotionCache.compat = process.env.STORYBOOK === 'true'

function RootProvider(props) {
  const { children, emotionCache = clientSideEmotionCache, settings } = props

  return (
    <CacheProvider value={emotionCache}>
      <RemoteConfigProvider value={settings}>
        <GlobalProvider>
          <CssVarsProvider theme={defaultTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />

            {children}
          </CssVarsProvider>
        </GlobalProvider>
      </RemoteConfigProvider>
    </CacheProvider>
  )
}

RootProvider.propTypes = {
  children: PropTypes.node.isRequired,
  emotionCache: PropTypes.object,
  settings: PropTypes.object,
}

export default RootProvider
