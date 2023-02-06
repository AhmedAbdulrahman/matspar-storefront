import * as React from 'react'
import PropTypes from 'prop-types'
import { Drawer, IconButton, styled, Toolbar } from '@mui/material'
import { useGlobalHandlers, useGlobalState, useRemoteConfig } from '~/contexts'
import { CloseIcon } from '~/components'
import AppNavDrawerListItem from './AppNavDrawerListItem'

const AppNavDrawerRoot = styled(Drawer)({
  '& .MuiDrawer-paper': {
    maxWidth: '100%',
    width: 414, // iPhone 6/7/8 Plus
  },
})

const AppNavDrawerScrollContainer = styled('div')(({ theme }) => ({
  ...theme.mixins.scrollable,
  ...theme.mixins.scrollbars,
  display: 'inherit',
  flexDirection: 'inherit',
  flexGrow: 1,
  padding: theme.spacing(2),
}))

const AppNavDrawerList = styled('ul')(({ theme }) => ({
  margin: theme.spacing(2, 0, 4),
  '&:first-of-type': {
    marginTop: 0,
  },
}))

const AppNavDrawer = React.memo(function AppNavDrawer(props) {
  const { isNavMenuOpen, ...other } = props

  const { menus } = useRemoteConfig()
  const { onNavMenuClose } = useGlobalHandlers()

  return (
    <AppNavDrawerRoot onClose={onNavMenuClose} open={isNavMenuOpen} anchor="left" {...other}>
      <Toolbar>
        <IconButton
          onClick={onNavMenuClose}
          edge="start"
          size="small"
          aria-label={`Close main menu`}
        >
          <CloseIcon />
        </IconButton>
      </Toolbar>

      <AppNavDrawerScrollContainer>
        <nav aria-label={`Main navigation`}>
          {menus?.primary?.length > 0 && (
            <AppNavDrawerList>
              {menus.primary.map((menuLink, idx) => (
                <AppNavDrawerListItem key={idx} menuLink={menuLink} />
              ))}
            </AppNavDrawerList>
          )}


        </nav>
      </AppNavDrawerScrollContainer>
    </AppNavDrawerRoot>
  )
})

AppNavDrawer.propTypes = {
  isNavMenuOpen: PropTypes.bool,
}

function AppNavDrawerContainer(props) {
  const { isNavMenuOpen } = useGlobalState()

  return <AppNavDrawer isNavMenuOpen={isNavMenuOpen} {...props} />
}

export default AppNavDrawerContainer
