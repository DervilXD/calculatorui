import PropTypes from 'prop-types'
import "../styles/ButtonBox.css";

function ButtonBox({ children }) {
  return <div className="buttonBox">{children}</div>;
}

ButtonBox.propTypes = {
    children: PropTypes.node
}
export default ButtonBox;