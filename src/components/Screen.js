import PropTypes from 'prop-types'
import "../styles/Screen.css";

function Screen ({ value }) {
  return (
    <div className="screen">
      {value}
    </div>
  )
}

Screen.propTypes = {
    value: PropTypes.number
}

export default Screen;