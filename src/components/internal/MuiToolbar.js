const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      minHeight: 'var(--matspar-toolbar-height)',
      // Breakpoint is needed to override internal MUI styles.
      [theme.breakpoints.up('sm')]: {
        minHeight: 'var(--matspar-toolbar-height)',
      },
    }),
    gutters: ({ theme }) => ({
      paddingInline: 'var(--matspar-toolbar-spacing)',
      // Breakpoint is needed to override internal MUI styles.
      [theme.breakpoints.up('sm')]: {
        paddingInline: 'var(--matspar-toolbar-spacing)',
      },
    }),
    dense: {
      minHeight: 'var(--matspar-toolbar-dense-height)',
    },
  },
}

export default overrides
