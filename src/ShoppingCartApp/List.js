import React from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';
import Cart from './Cart';


class List extends React.Component {
    render() {

        const { products, handleClick, cart, Increase, Decrease, changeSize } = this.props;

        //console.log(products['']);
        return (
            <div>
                <h3>Products</h3>
                <hr />
                {this.props.cart}
                <div>
                    <Row xs={1} md={2}>
                        {console.log(cart)}
                        {products.filter((cat) => cat.category === cart).map((item, i) =>
                            <Col key={i}>
                                <Card>
                                    <Card.Img variant="top" height="200px" width="250px" src={item.productImage} />
                                    <Card.Body>
                                        <Card.Title >{item.product}</Card.Title>
                                        <Card.Title >
                                            {item.sizes.map((e) => (
                                                <button onClick={() => changeSize(item.id, e)}>{e.size}</button>
                                            ))}
                                        </Card.Title>
                                        <Card.Text>Price : {item.Price}
                                        </Card.Text>
                                        <p>{item.count}</p>
                                        <Col>
                                            <Button type="submit" onClick={() => Increase(item.id)}> +</Button>
                                            <Button type="submit" onClick={() => Decrease(item.id)}>-</Button>
                                       
                                            <Button
                                                type="submit" onClick={() => handleClick(item)}>Add To Cart
                                            </Button>{Cart}
                                        </Col>
                                        <br />
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                        }
                    </Row>

                </div>
            </div>
        );
    }
}
export default List;