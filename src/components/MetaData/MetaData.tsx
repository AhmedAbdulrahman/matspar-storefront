import * as React from 'react'
import { SITE_NAME } from '~/utils/constants'

export interface MetaDataProps<T = typeof React.Fragment> {
  alternates?: { hreflang: string; href: string }[]
  canonicalUrl?: string
  component: T
  description?: string
  image?: string
  structuredData?: Record<string, unknown>
  robots?: string
  title?: string
  url?: string
}

function MetaData<T extends React.ComponentType<{ children: React.ReactNode }>>(
  props: MetaDataProps<T>,
) {
  const {
    alternates,
    canonicalUrl,
    component: Component = React.Fragment,
    description,
    image,
    structuredData,
    title: titleProp,
    robots,
    url,
  } = props

  const title = `${titleProp} | ${SITE_NAME}`

  return (
    <Component>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {description && <meta name="og:description" content={description} />}
      {image && <meta name="og:image" content={image} />}
      {robots && <meta name="robots" content={robots} />}

      {url && <meta property="og:url" content={url} />}
      {(canonicalUrl || url) && <link rel="canonical" href={canonicalUrl || url} />}
      {alternates?.map(({ hreflang, href }, idx) => (
        <link key={idx} rel="alternate" hrefLang={hreflang} href={href} />
      ))}

      {structuredData && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Component>
  )
}

export default MetaData
