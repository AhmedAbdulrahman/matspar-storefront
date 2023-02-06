const overrides = {
  styleOverrides: {
    root: ({ theme }) => ({
      paddingInline: 'var(--matspar-container-spacing)',
      // Breakpoint is needed to override internal MUI styles.
      [theme.breakpoints.up('sm')]: {
        paddingInline: 'var(--matspar-container-spacing)',
      },
    }),
  },
}

export default overrides
