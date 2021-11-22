import { Container, Row, Col, Form } from 'react-bootstrap';
import React from "react";


class Category extends React.Component {
    render() {
        const {handleSelect,cart} = this.props;
        return (
            <div>
                <h3>Category</h3>
                <hr/>
                <Container fluid>
                    <Row >   
                        <Col>
                            <Form.Select value={cart} onChange={handleSelect}>
                                <option>Select</option>
                                <option value="Sport" >Sport Shoes</option>
                                <option value="Loafer">Loafer Shoes</option>
                                <option value="Partywear">Partywear Shoes</option>
                            </Form.Select>
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Category;