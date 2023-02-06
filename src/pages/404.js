import * as React from 'react'
import Head from 'next/head'
import { SITE_NAME } from '~/utils/constants'
 import ErrorBlock from '~/blocks/ErrorBlock'

function NotFoundPage() {

  return (
    <React.Fragment>
      <Head>
        <title>404 | {SITE_NAME}</title>
      </Head>

      <ErrorBlock
        subheading="404"
        heading={`Page not found`}
        text={`The page you are looking for might have been renamed, removed or might never have existed.`}
        ctaLabel={`Back to homepage`}
        ctaUrl="/"
      />
    </React.Fragment>
  )
}

export default NotFoundPage
