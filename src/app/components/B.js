import React from "react";
import PropTypes from "prop-types";

// Component B displays the value it is given.
class B extends React.Component {
  render() {
    return <p>{this.props.text}</p>;
  }
}
B.propTypes = {
  text: PropTypes.string
};
B.defaultProps = {
  text: null
};
export default B;