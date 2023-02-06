import { GetServerSidePropsContext } from 'next'
import { nextUriToString, ApiClient } from '~/utils'
import { settings } from '~/api/__mock__'

export { default } from '~/containers/Page'

const apiClient = ApiClient.default

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { params } = ctx

  const uriString = nextUriToString(params?.product)

  const searchResults = await apiClient.request('POST', 'slug', {
    query: {},
    slug: uriString,
  })

  if (searchResults && searchResults?.payload) {
    return {
      props: {
        settings,
        page: {
          blocks: [
            {
              name: 'ProductHero',
              props: {
                product: searchResults?.payload,
              },
            },
          ],
        },
      },
    }
  }

  return {
    notFound: true,
  }
}
