import PropTypes from 'prop-types'
import "../styles/Button.css"

function Button({ className, value, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  )
}

Button.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func
}

export default Button;