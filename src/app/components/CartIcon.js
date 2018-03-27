import React, { Component } from 'react';


class CartIcon extends Component {
   render() {
      return (
         <div>
            
            {this.props.text}
         </div>
      );
   }
}
CartIcon.propTypes = {
    text: PropTypes.string
  };
  CartIcon.defaultProps = {
    text: null
  };
export default CartIcon;