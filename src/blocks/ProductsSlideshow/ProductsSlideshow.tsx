import * as React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { styled } from '@mui/system'
// import { Typography } from '@mui/material'
import { ProductCard } from '~/containers'
import { Product } from '~/types/product'

// const BREAKPOINT_KEY = 'md'

const ProductsSlideshowRoot = styled('section')(({ theme }) => ({
  position: 'relative',
  padding: 'var(--matspar-section-spacing)',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
}))

// const ProductsSlideshowHeading = styled(Typography)(({ theme }) => ({
//   marginBottom: theme.spacing(3),
//   [theme.breakpoints.up(BREAKPOINT_KEY)]: theme.typography.h5,
// }))

const ProductsSlideshowEmblaContainer = styled('div')({
  display: 'flex',
  marginLeft: -1,
})

const ProductsSlideshowEmblaSlide = styled('div')(({ theme }) => ({
  position: 'relative',
  flexShrink: 0,
  width: 'calc(100% / 2.2)',
  paddingLeft: 1,
  marginRight: 15,
  boxShadow: '0 2px 6px 0 rgb(0 0 0 / 20%)',
  [theme.breakpoints.up('md')]: {
    width: 'calc(100% / 3.2)',
  },
  [theme.breakpoints.up('lg')]: {
    width: 'calc(100% / 4.3)',
  },
}))

type ProductsSlideshowProps = {
  products: Product[]
}
function ProductsSlideshow(props: ProductsSlideshowProps) {
  const { products = [] } = props

  const [emblaRef] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
  })

  return (
    <ProductsSlideshowRoot>
      {/* {heading && (
        <ProductsSlideshowHeading component="h1" variant="h6">
          {heading}
        </ProductsSlideshowHeading>
      )} */}

      <div key={products?.[0]?.productid} ref={emblaRef}>
        <ProductsSlideshowEmblaContainer>
          {products?.map((product, idx) => (
            <ProductsSlideshowEmblaSlide key={idx}>
              <ProductCard product={product} />
            </ProductsSlideshowEmblaSlide>
          ))}
        </ProductsSlideshowEmblaContainer>
      </div>
    </ProductsSlideshowRoot>
  )
}

export default ProductsSlideshow
