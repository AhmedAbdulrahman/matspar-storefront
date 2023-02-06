// Based on https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
import '../../scripts/globals'
import * as React from 'react'
import Head from 'next/head'
import type { AppProps as NextAppProps } from 'next/app'
import type { NextPage } from 'next'
import type { EmotionCache } from '@emotion/cache'
import { RootProvider } from '~/contexts'
import * as layoutVariants from '~/layouts'

export interface AppProps extends NextAppProps {
  Component: NextPage<Page>
  emotionCache?: EmotionCache
  pageProps: {
    layout?: keyof typeof layoutVariants
    page: Page
    settings: Record<string, unknown>
  }
}

function App(props: AppProps) {
  const { Component, emotionCache, pageProps: nextPageProps } = props

  const { layout, page, ...other } = nextPageProps

  const LayoutComponent = layout ? layoutVariants[layout] : layoutVariants.App

  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        />
      </Head>
      <RootProvider emotionCache={emotionCache} {...other}>
        <LayoutComponent>
          <Component {...page} />
        </LayoutComponent>
      </RootProvider>
    </React.Fragment>
  )
}

export default App
