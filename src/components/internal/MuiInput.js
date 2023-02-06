const overrides = {
  styleOverrides: {
    underline: {
      '&:after': {
        display: 'none',
      },
      '&:before': {
        borderBottom: '1px dashed currentColor',
      },
      '&:hover:not(.Mui-disabled):before': {
        borderBottom: '1px dashed currentColor',
      },
    },
  },
}

export default overrides
