import * as React from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'
import { Drawer, IconButton, styled, TextField } from '@mui/material'
import { useGlobalHandlers, useGlobalState } from '~/contexts'
import { SearchIcon } from '~/components'

const AppSearchDrawerRoot = styled(Drawer)(({ theme }) => ({
  zIndex: `${theme.zIndex.appBar - 1} !important`, // Override Mui inline styles
  top: 'var(--matspar-header-height, 0px) !important', // Override Mui inline styles
  '& .MuiBackdrop-root': {
    top: 'var(--matspar-header-height, 0px)',
  },
  '& .MuiDrawer-paper': {
    top: 'var(--matspar-header-height, 0px)',
    maxHeight: 'calc(100% - var(--matspar-header-height, 0px))',
    backgroundColor: theme.palette.background.default,
  },
}))

const AppSearchDrawerForm = styled('form')(({ theme }) => ({
  width: '100%',
  padding: theme.spacing(0, 'var(--matspar-container-spacing)', 2),
}))

const AppSearchDrawer = React.memo(function AppSearchDrawer(props) {
  const { isSearchMenuOpen, ...other } = props

  const { onSearchMenuClose } = useGlobalHandlers()

  const valueRef = React.useRef('')
  const [value, setValue] = React.useState('')
  const handleChange = React.useCallback((event) => {
    valueRef.current = event.target.value
    setValue(event.target.value)
  }, [])

  const handleSubmit = React.useCallback((event) => {
    event.preventDefault()
    Router.push(`/kategori/?q=${valueRef.current}`).then(() => window.scrollTo(0, 0))
  }, [])

  const submitButton = (
    <IconButton disabled={!value} size="small" type="submit" aria-label={`Submit search`}>
      <SearchIcon />
    </IconButton>
  )

  return (
    <AppSearchDrawerRoot
      onClose={onSearchMenuClose}
      open={isSearchMenuOpen}
      anchor="top"
      {...other}
    >
      <AppSearchDrawerForm
        onSubmit={handleSubmit}
        role="search"
        // iOS needs an "action" attribute for nice input: https://stackoverflow.com/a/39485162/406725
        // We default the action to "#" in case the preventDefault fails (just updates the URL hash)
        action="#"
      >
        <TextField
          onChange={handleChange}
          value={value}
          placeholder={`Search products`}
          size="small"
          variant="standard"
          InputProps={{
            endAdornment: submitButton,
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          inputProps={{
            autoCapitalize: 'off',
            autoComplete: 'off',
            autoCorrect: 'off',
            maxLength: 100,
            spellCheck: 'false',
          }}
          type="search"
          fullWidth
          autoFocus
        />
      </AppSearchDrawerForm>
    </AppSearchDrawerRoot>
  )
})

AppSearchDrawer.propTypes = {
  isSearchMenuOpen: PropTypes.bool,
}

function AppSearchDrawerContainer(props) {
  const { isSearchMenuOpen } = useGlobalState()

  return <AppSearchDrawer isSearchMenuOpen={isSearchMenuOpen} {...props} />
}

export default AppSearchDrawerContainer
