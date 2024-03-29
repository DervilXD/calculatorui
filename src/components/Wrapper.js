import PropTypes from 'prop-types'
import "../styles/Wrapper.css"

function Wrapper ({ children }){
  return <div className="wrapper">{children}</div>;
}

Wrapper.propTypes = {
  children: PropTypes.node
}

export default Wrapper;