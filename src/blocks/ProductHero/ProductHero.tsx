/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from 'react'
import { styled } from '@mui/material/styles'
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material'
import { Media, MediaReveal } from '@noaignite/oui'
import {
  CoopIcon,
  HemkopIcon,
  IcaIcon,
  MathemIcon,
  // LyrecoIcon,
  WillysIcon,
} from '~/components'
import { ProductDetail } from '~/types/product'
import { RouterLink } from '~/containers'
import { getRelativeTime } from '~/utils'

const BRANDS_ICONS: Record<string, unknown> = {
  '13': CoopIcon,
  '16': HemkopIcon,
  '17': IcaIcon,
  '11': MathemIcon,
  // instagram: LyrecoIcon,
  '15': WillysIcon,
}

const BREAKPOINT_KEY = 'md'

const ProductHeroRoot = styled('section')(({ theme }) => ({
  // ...theme.mixins.contain('md'),
  '--matspar-accordion-spacing': '0px',
  [theme.breakpoints.up(BREAKPOINT_KEY)]: {
    display: 'grid',
    gridTemplateColumns: '1fr minmax(400px, 1fr)',
    paddingInline: 'var(--matspar-container-spacing)',
  },
}))

const ProductHeroMediaLayout = styled('div')(() => ({
  display: 'flex',
}))

const ProductHeroDetails = styled('div')({
  position: 'sticky',
  top: 'var(--matspar-header-height, 0px)',
})

const ProductMediaReveal = styled(MediaReveal)({
  '& > img': {
    // maxWidth: '100%',
    // margin: '0 auto',
    maxHeight: 600,
    // width: 'auto',
    // height: 'auto',
    objectFit: 'contain',
  },
})

const ProductHeroContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(3, 2),
  '& + &': {
    paddingTop: 0,
  },
}))

const ProductHeroContentItem = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: 250,
}))
const ListItemTextItem = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
}))

type Props = {
  product: ProductDetail
}

function ProductHero(props: Props) {
  const { product } = props
  return (
    <ProductHeroRoot>
      <ProductHeroMediaLayout>
        <ProductMediaReveal width={200} height={200}>
          <Media
            src={`https://d1ax460061ulao.cloudfront.net/500x500/f/0/${product?.image}.webp`}
            alt={product?.name}
          />
        </ProductMediaReveal>
      </ProductHeroMediaLayout>

      <div>
        <ProductHeroDetails>
          <ProductHeroContent>
            <Typography component="h1" variant="h4" gutterBottom>
              {product.name}
            </Typography>
            <Typography
              variant="subtitle2"
              noWrap
              component={RouterLink}
              href={`/${product?.brandslug}`}
              sx={{ display: 'block' }}
            >
              {`${product?.brand} ${product.weight_pretty}`}
            </Typography>
            <Rating name="read-only" value={product?.rating} readOnly />

            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              PRIS I BUTIK
            </Typography>
            {product.prices && (
              <List sx={{ width: '100%' }}>
                {Object.keys(product.prices)?.map((price, idx) => {
                  const Icon = BRANDS_ICONS[price]

                  if (!Icon) {
                    return null
                  }

                  return (
                    <React.Fragment key={idx}>
                      <ListItem>
                        <ListItemAvatar
                          sx={{
                            flex: '1 1 auto',
                          }}
                        >
                          {/* @ts-ignore */}
                          <Icon fontSize="large" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={`${product.prices[price] / 100} kr`}
                          sx={{ flex: 'unset' }}
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  )
                })}
              </List>
            )}
          </ProductHeroContent>

          <ProductHeroContent>
            <Typography variant="body2">{product.description}</Typography>
          </ProductHeroContent>
          {product?.nutrition_claim?.length > 0 && (
            <ProductHeroContent>
              <Typography
                variant="body1"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              >
                NÄRINGSINNEHÅLL
              </Typography>
              <Typography variant="body2">{product.ingredients}</Typography>
              {product.nutrition_claim.map((nutrition) => (
                <Typography variant="body2">{nutrition}</Typography>
              ))}
            </ProductHeroContent>
          )}

          {product?.preparation?.length > 0 && (
            <ProductHeroContent>
              <Typography
                variant="body1"
                sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
              >
                TILLAGNING
              </Typography>
              {product.preparation.map((prepare) => (
                <Typography variant="body2">{prepare}</Typography>
              ))}
            </ProductHeroContent>
          )}

          <ProductHeroContent>
            <Typography
              variant="body1"
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
            >
              FÖRPACKNING
            </Typography>

            <ProductHeroContentItem>
              <Typography variant="body2">Mått:</Typography>
              <Typography variant="body2" sx={{ display: ' flex', flexDirection: 'column' }}>
                <span>Höjd: {product.height}</span>
                <span>Bredd: {product.width}</span>
                <span>Djup: {product.height}</span>
              </Typography>
            </ProductHeroContentItem>
          </ProductHeroContent>

          <ProductHeroContent>
            <Typography
              variant="body1"
              sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
            >
              ÖVRIG INFORMATION
            </Typography>

            <ProductHeroContentItem>
              <Typography variant="body2">Totalvikt:</Typography>
              <Typography variant="body2">{product.gross_weight}</Typography>
            </ProductHeroContentItem>
            <ProductHeroContentItem>
              <Typography variant="body2">Innehållsmängd:</Typography>
              <Typography variant="body2">{product.content_weight}</Typography>
            </ProductHeroContentItem>
          </ProductHeroContent>

          <ProductHeroContent>
            {product?.reviews?.length > 0 && (
              <React.Fragment>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
                >
                  OMDÖMEN
                </Typography>

                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                  {product.reviews.map((review, idx) => (
                    <React.Fragment key={idx}>
                      <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                          <Avatar alt={review.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                          primary={
                            <ListItemTextItem>
                              <Typography
                                variant="body2"
                                sx={{ fontWeight: (theme) => theme.typography.fontWeightBold }}
                              >
                                {review.name}
                              </Typography>
                              <Rating
                                name="read-only"
                                size="small"
                                value={review?.rating}
                                readOnly
                              />
                            </ListItemTextItem>
                          }
                          secondary={
                            <React.Fragment>
                              <Typography
                                sx={{ display: 'inline' }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                              >
                                {review.review}
                              </Typography>
                              <Typography variant="body2" color="text.primary">
                                {getRelativeTime(new Date(review.datestamp).getTime())}
                              </Typography>
                            </React.Fragment>
                          }
                        />
                      </ListItem>
                      <Divider variant="inset" component="li" />
                    </React.Fragment>
                  ))}
                </List>
              </React.Fragment>
            )}
          </ProductHeroContent>
        </ProductHeroDetails>
      </div>
    </ProductHeroRoot>
  )
}

export default ProductHero
