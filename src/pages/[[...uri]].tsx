import { GetServerSidePropsContext } from 'next'
import { nextUriToString, ApiClient } from '~/utils'
import { settings } from '~/api/__mock__'

export { default } from '~/containers/Page'

const apiClient = ApiClient.default

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { query } = ctx

  const uriString = nextUriToString(query.uri)
  const searchTerm = query.q || ''

  const searchResults = await apiClient.request('POST', 'slug', {
    query: searchTerm ? { q: searchTerm } : {},
    slug: uriString,
  })

  if (searchResults && searchResults?.active) {
    return {
      props: {
        settings,
        page: {
          blocks: [
            {
              name: 'CategoryProducts',
              props: {
                ...searchResults?.payload,
              },
            },
          ],
          seo: {},
        },
      },
    }
  }

  return {
    notFound: true,
  }
}
