import * as React from 'react'
import PropTypes from 'prop-types'

export const RemoteConfigContext = React.createContext({})

if (process.env.NODE_ENV !== 'production') {
  RemoteConfigContext.displayName = 'RemoteConfigContext'
}

export function useRemoteConfig() {
  return React.useContext(RemoteConfigContext)
}

function RemoteConfigProvider(props) {
  const { children, value = {} } = props



  return (
    <RemoteConfigContext.Provider value={value}>{children}</RemoteConfigContext.Provider>
  )
}

RemoteConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.object.isRequired,
}

export default RemoteConfigProvider
