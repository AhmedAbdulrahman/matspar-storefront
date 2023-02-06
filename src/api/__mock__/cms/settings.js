export const menuPrimary = [
  {
    label: 'Alla varor',
    url: '/kategori',
  },
  {
    label: 'MelloMat',
    url: '/kategori/mellomat',
  },
]

export const menuFooter = [
  {
    label: 'Nyheter',
    url: '/nyheter',
  },
  {
    label: 'Färdiga matkassar',
    url: '/matkasse',
  },
  {
    label: 'Populära varumärken',
    url: '/varumarke',
  },
  {
    label: 'Vad är Matspar.se',
    url: '/om-oss',
  },
]

export default {
  menus: {
    primary: menuPrimary,

    footer: menuFooter,
  },
  facebookUrl: 'https://www.facebook.com/',
  instagramUrl: 'https://www.instagram.com/',
  pinterestUrl: 'https://www.pinterest.com/',
  storeMessage: 'Matspar.se i ett nötskal',
  termsPageUrl: '/terms-and-conditions',
  twitterUrl: 'https://twitter.com/',
}
