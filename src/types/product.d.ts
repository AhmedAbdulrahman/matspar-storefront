export interface CategoryProducts {
  products: Product[]
  total: number
  new_filters: { [key: string]: number }
  pagination: Pagination
  topprio: null
  productbundle: unknown[]
}

export interface Pagination {
  page: number
  more: boolean
  rules: Rule[]
}

export interface Rule {
  type: string
  key: string
  id?: string
}

export interface Product {
  productid: number
  id: number
  name: string
  brand: string
  brandid: number | string
  image: string
  weight_pretty: string
  weight_ish: string
  slug: string
  price: number
  prices: { [key: string]: number }
  promo: unknown[] | { [key: string]: PromoValue }
  filters: string[]
  country_from: CountryFrom
  categoryids: number[]
  rating: number | string
  reviews_count: number | string
  price_info: number[]
  w_prices: { [key: string]: number }
  w_promo?: unknown[] | { [key: string]: PromoValue }
  w_from_prices: unknown[]
  median_price: number
}

export enum CountryFrom {
  Empty = '',
  Nederländerna = 'Nederländerna',
  Schweiz = 'Schweiz',
  Sverige = 'Sverige',
  Tyskland = 'Tyskland',
  Ungern = 'Ungern',
}

export interface PromoValue {
  afteramount: number
  price: number
  type: Type
  bonuscard?: boolean
  maxperorder?: number
}

export enum Type {
  XForFixed = 'X_FOR_FIXED',
}

export interface ProductDetail {
  productid: number
  id: number
  name: string
  brand: string
  brandid: number
  brandslug: string
  supplier: string
  ingredients: string
  description: string
  image: string
  weight_pretty: string
  slug: string
  price: number
  prices: { [key: string]: number }
  recyclefee: number
  promo: PromoClass
  durability: string
  alcohol_percentage: string
  country_from: string
  allergens: Allergen[]
  categoryids: number[]
  filters: string[]
  our_own_image: boolean
  reviews: Review[]
  temperature_min: string
  temperature_max: string
  nonfood_ingredients: string
  nutrition_claim: string[]
  hazards: string
  warnings: string
  packaging: string[]
  preparation: string[]
  preparation_type: string[]
  serving: string
  allergen_statement: string
  storage: string
  usage: string
  servings_package: string
  shortmarketing_messages: string
  packaging_type: string[]
  packaging_weight: string
  recyclable: string
  recycling_message: string
  country_origin: string
  comparison_type: string
  comparison_measurement: string
  comparison_unit: string
  depth: string
  height: string
  width: string
  quantity: string
  season: string
  original_supplier: string
  gross_weight: string
  content_weight: string
  net_weight: string
  total_lifespan: string
  open_lifespan: string
  nutritional_value: NutritionalValue[]
  weight_ish: string
  rating: number
  reviews_count: number
  leaf_categoryids: number[]
  price_info: number[]
  w_prices: { [key: string]: number }
  w_promo: WPromo
  w_from_prices: unknown[]
  median_price: number
  similar: Similar[]
}

export interface Allergen {
  Allergenkod: string
  Niva: string
  Nivakod: string
  Allergen: string
  NivakodText: string
}

export interface NutritionalValue {
  quantity_unit: string
  quantity: number
  quantity_type: string
  intake_type: null
  serving: null
  nutrients: Nutrient[]
  preparation: string
}

export interface Nutrient {
  daily: number
  type: string
  value: number
  measurement: string
}

export interface PromoClass {
  '17': The17
}

export interface The17 {
  afteramount: number
  price: number
  type: string
}

export interface Review {
  datestamp: Date
  review: string
  name: string
  rating: number
  reviewid: number
}

export interface Similar {
  productid: number
  id: number
  name: string
  brand: string
  brandid: number
  image: string
  weight_pretty: string
  weight_ish: string
  slug: string
  price: number
  prices: { [key: string]: number }
  promo: unknown[] | PromoClass
  filters: string[]
  country_from: string
  categoryids: number[]
  rating: number | string
  reviews_count: number | string
  price_info: number[]
  w_prices: { [key: string]: number }
  w_promo?: WPromo
  w_from_prices: unknown[]
  median_price: number
}

export interface WPromo {
  '1932': The17
}
