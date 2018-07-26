import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component {
  render() {
    return (
      <div className="item">
        <h4 className="name">{this.props.name}</h4>
        <h6 className="quantity">{this.props.quantity}</h6>
        <h6 className="description">{this.props.description}</h6>
        <h6 className="category">{this.props.category}</h6>
        <h6 className="price">{this.props.price}€</h6>
      </div>
      );
  }
}
List.defaultProps = {
  description:"No tiene descripcion",
}
List.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
}
export default List;
