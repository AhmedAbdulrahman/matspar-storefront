import dynamic from 'next/dynamic'

export const ErrorBlock = dynamic(() => import(/* webpackChunkName: "blocks/ErrorBlock" */ './ErrorBlock')) // prettier-ignore
export const ProductsSlideshow = dynamic(() => import(/* webpackChunkName: "blocks/ProductsSlideshow" */ './ProductsSlideshow')) // prettier-ignore
export const CategoryProducts = dynamic(() => import(/* webpackChunkName: "blocks/CategoryProducts" */ './CategoryProducts')) // prettier-ignore
export const ProductHero = dynamic(() => import(/* webpackChunkName: "blocks/ProductHero" */ './ProductHero')) // prettier-ignore
