import * as React from 'react'
import { styled } from '@mui/material/styles'
import { Typography } from '@mui/material'
import { ProductCard } from '~/containers'
import { Product } from '~/types/product'

const BREAKPOINT_KEY = 'md'

const CategoryProductsRoot = styled('section')({
  position: 'relative',
  margin: 'var(--matspar-section-spacing) 0',
  padding: '0 10px',
})

const CategoryProductsGrid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridGap: theme.spacing(0.5),
  gridTemplateColumns: 'repeat(2, 1fr)',
  [theme.breakpoints.up(BREAKPOINT_KEY)]: {
    gridGap: theme.spacing(2),
    gridTemplateColumns: 'repeat(4, 1fr)',
    padding: 'var(--matspar-section-spacing)',
  },
}))

const CategoryProductsGridItem = styled('div')(({ theme }) => ({
  boxShadow: '0 2px 6px 0 rgb(0 0 0 / 20%)',
  '&:nth-child(5n+5)': {
    gridColumn: 'span 2',
    [theme.breakpoints.up(BREAKPOINT_KEY)]: {
      gridColumn: 'span 1',
    },
  },
}))

const CategoryProductsResults = styled('div')(({ theme }) => ({
  ...theme.mixins.contain('sm'),
  textAlign: 'center',
}))

const CategoryProductsResultsHeading = styled('h1')(({ theme }) => ({
  ...theme.typography.h5,
  margin: 0,
  [theme.breakpoints.up('md')]: theme.typography.h3,
}))

type Props = {
  products: Product[]
}
function CategoryProducts(props: Props) {
  const { products } = props

  return (
    <CategoryProductsRoot>
      {products?.length > 0 ? (
        <CategoryProductsGrid>
          {products?.map((product, idx) => (
            <CategoryProductsGridItem key={idx}>
              <ProductCard product={product} />
            </CategoryProductsGridItem>
          ))}
        </CategoryProductsGrid>
      ) : (
        <CategoryProductsResults>
          <CategoryProductsResultsHeading sx={{ mb: 1 }}>
            {`No results found`}
          </CategoryProductsResultsHeading>
          <Typography component="h2" variant="h5" sx={{ mb: 1 }}>
            Please try another search...
          </Typography>
        </CategoryProductsResults>
      )}
    </CategoryProductsRoot>
  )
}

export default CategoryProducts
