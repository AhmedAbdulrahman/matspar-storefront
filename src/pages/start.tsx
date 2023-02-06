import { ApiClient } from '~/utils'
import { settings } from '~/api/__mock__'

export { default } from '~/containers/Page'

const apiClient = ApiClient.default

export async function getServerSideProps() {
  const searchResults = await apiClient.request('POST', 'slug', {
    query: {},
    slug: '/start',
  })

  if (searchResults && searchResults?.payload) {
    const lists = Object.values(searchResults.payload.lists)
    return {
      props: {
        settings,
        page: {
          blocks: [
            {
              name: 'ProductsSlideshow',
              props: {
                products: lists[0],
              },
            },
            {
              name: 'ProductsSlideshow',
              props: {
                products: lists[1],
              },
            },
            {
              name: 'ProductsSlideshow',
              props: {
                products: lists[2],
              },
            },
            {
              name: 'ProductsSlideshow',
              props: {
                products: lists[3],
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
