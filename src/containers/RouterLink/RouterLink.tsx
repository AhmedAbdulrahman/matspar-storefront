import * as React from 'react'
import Link from 'next/link'

type RouterLinkProps = {
  as?: string
  external?: boolean
  href?: string
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  children?: React.ReactNode
  style?: React.CSSProperties
}

const RouterLink = React.forwardRef<HTMLAnchorElement, React.PropsWithChildren<RouterLinkProps>>(
  function RouterLink(props, ref) {
    const { as, children, external, href = '', replace, scroll, shallow, ...other } = props

    // Render as a regular `a` tag if external link.
    if (external || /^https?:\/\//.test(href)) {
      return (
        <a href={href} rel="noopener noreferrer" target="_blank" ref={ref} {...other}>
          {children}
        </a>
      )
    }

    return (
      <Link
        as={as}
        href={href}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        ref={ref}
        passHref
        {...other}
      >
        {children}
      </Link>
    )
  },
)

export default RouterLink
