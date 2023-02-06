import PropTypes from 'prop-types'
import { breakpoints } from '~/components/styles'

export default PropTypes.shape({
  component: PropTypes.oneOf(['image', 'picture', 'video']),
  src: PropTypes.string,
  alt: PropTypes.string,
  breakpoints: PropTypes.shape(
    Object.fromEntries(
      Object.keys(breakpoints.values).map((breakpoint) => [breakpoint, PropTypes.string]),
    ),
  ),
})
