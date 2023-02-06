/* eslint-disable consistent-return */
// console logging makes sense in a middleware, it is only run on server
/* eslint-disable no-console */
import { NextRequest, NextResponse } from 'next/server'

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req

  // don't run middleware on public files, api routes or redirects
  if (
    /\.(.*)$/.test(nextUrl.pathname) ||
    nextUrl.pathname.includes('/api/') ||
    nextUrl.pathname.includes('_next') ||
    nextUrl.pathname.includes('/admin')
  ) {
    return NextResponse.next()
  }

  if (nextUrl.pathname === '/') {
    const url = nextUrl.clone()
    url.pathname = '/start'
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ['/'],
}
