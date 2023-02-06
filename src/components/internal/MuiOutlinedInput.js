import { outlinedInputClasses } from '@mui/material'

const overrides = {
  styleOverrides: {
    root: {
      [`&.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
        borderColor: 'currentColor',
        borderWidth: 1,
      },
    },
    notchedOutline: {
      borderColor: 'currentColor',
    },
  },
}

export default overrides
