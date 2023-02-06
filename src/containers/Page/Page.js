import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import * as blockVariants from '~/blocks'
import { createRenderBlock } from '~/utils'
import { MetaData } from '~/components'

const renderBlock = createRenderBlock(blockVariants)

function Page(props) {
  const { blocks, children, seo } = props

  return (
    <React.Fragment>
      <MetaData component={Head} {...seo} />

      {children}
      {blocks.map(renderBlock)}
    </React.Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  blocks: PropTypes.array,
  seo: PropTypes.object,
}

export default Page
