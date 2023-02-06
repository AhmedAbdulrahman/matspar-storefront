import * as React from 'react'
import { styled } from '@mui/system'
import { MediaReveal, Media } from '@noaignite/oui'
import { Typography } from '@mui/material'
import RouterLink from '~/containers/RouterLink'
import { Product } from '~/types/product'

const ProductCardRoot = styled('article')({
  position: 'relative',
  display: 'block',
  color: 'inherit',
  textDecoration: 'none',
  paddingTop: 20,
})

const ProductCardMediaArea = styled('div')({
  position: 'relative',
})

const ProductCardToolbar = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0),
  textAlign: 'center',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(1),
  },
}))

const ProductCardMediaReveal = styled(MediaReveal)(({ theme }) => ({
  '& > img': {
    maxHeight: 100,
    objectFit: 'contain',
    [theme.breakpoints.up('md')]: {
      maxHeight: 150,
    },
  },
}))

type Props = {
  product: Product
}
function ProductCard(props: Props) {
  const { product, ...other } = props

  return (
    <RouterLink href={`products/${product.slug}`} {...other}>
      <ProductCardRoot>
        <ProductCardMediaArea>
          <ProductCardMediaReveal width={'100%'} height={150}>
            <Media
              src={`https://d1ax460061ulao.cloudfront.net/140x150/7/9/${product.image}.webp`}
              alt={product?.name}
            />
          </ProductCardMediaReveal>
        </ProductCardMediaArea>
        <ProductCardToolbar>
          <Typography variant="subtitle2" noWrap>
            {`${product?.brand} ${product.weight_pretty}`}
          </Typography>

          <Typography variant="subtitle2" noWrap>
            {product?.name}
          </Typography>

          <Typography variant="subtitle1">{product?.price}</Typography>
        </ProductCardToolbar>
      </ProductCardRoot>
    </RouterLink>
  )
}

export default ProductCard
