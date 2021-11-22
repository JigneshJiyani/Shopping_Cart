import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Badge } from 'react-bootstrap';




class Cart extends React.Component {
  render() {
    const { cartdata, RemoveCart } = this.props;
    return (
      <div>
        <h3>Cart Items</h3>
        <hr />
        {console.log(cartdata)}
        {cartdata.map((item, i) => (
          <div as="ol" numbered key={i}>
            <Badge className="ms-2 me-auto">
              {item.product}
            </Badge>
            <ul>
              Item Size = {item.selectsize}
              <br />
              Item Qty = {item.count + 1}
              <br />
              Total Item Price = {item.Price * item.count}/-
            </ul>
            <div>
              <br />
              <Button classname="btn btn-outline-danger"onClick={() => { RemoveCart(i) }}>Remove</Button>
              <br />
            </div>
            <br />
            <br />
          </div>
        ))}
        <Badge>
          <h3>Final Price</h3>
          <h4>{cartdata.reduce((a, v) => a = Number(a) + (Number(v.Price) * v.count), 0)}/-</h4>
        </Badge>
      </div>
    )
  }
}

export default Cart;