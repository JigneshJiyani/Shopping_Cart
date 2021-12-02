import { Container, Row, Col, Form, Offcanvas } from 'react-bootstrap';
import Category from './Category';
import List from './List';
import Cart from './Cart';
import React, { useEffect, useState } from "react";
import Button from '@restart/ui/esm/Button';

function MainSlide() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let finalData = {};
     let tblval = [];

    const changeData = (event) => {
        const { name, value } = event.target
        finalData = {
            ...finalData,   
            [name]: value
        }
    }

    const handleSave = (e) => {
        let First_Name = document.getElementById("fname").value;

        let Last_Name = document.getElementById("lname").value;

        let Address = document.getElementById("Address").value;

        let sd = { First_Name: First_Name, Last_Name: Last_Name, Address: Address }
        tblval.push(sd)
        
        localStorage["TableValue"] = JSON.stringify(tblval); 
        var get = localStorage.getItem("TableValue");
                var g = JSON.parse(localStorage.getItem("TableValue"));
    }


    //-------------------------------------SlideBar Menu---------------------------------------//

    function OffCanvasExample() {
        return (
            <>
                <button class="btn btn-primary" type="button" onClick={handleShow}>
                   Slidebar Menu
                </button>

                <Offcanvas show={show} onHide={handleClose}>
                    <center><b>Fill Details</b></center>
                    <Offcanvas.Body>
                        <Form>

                            <Form.Group className="mb-3 form-control">
                                <lable className="form-lable"><b>First Name</b></lable>
                                <input
                                    className="mb-3 form-control"
                                    name="fname"
                                    id="fname"
                                    onChange={changeData}
                                />
                                <lable className="form-lable"><b>Last Name</b></lable>
                                <input
                                    className="mb-3 form-control"
                                    name="lname"
                                    id="lname"
                                    onChange={changeData}
                                />
                                <lable className="form-lable"><b>Address</b></lable>
                                <input
                                    className="mb-3 form-control"
                                    name="Address"
                                    id="Address"
                                    onChange={changeData}
                                />
                                <button class="btn btn-outline-success" type="submit" onClick={() => handleSave()}>Submit</button>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button class="btn btn-outline-danger" type="reset">Reset</button>
                            </Form.Group>
                        </Form>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        );
    }

    return (
        <center>
            <br />
            <br />
            <div>
                <Container fluid>
                    <>
                        <OffCanvasExample
                            placement='end'
                            name='end'
                            handleClose={handleClose}
                            handleShow={handleShow}
                            handleSave={handleSave}
                        />
                    </>
                </Container>
            </div>
        </center>

    );
}

//----------------------------------Greetings Menu------------------------------------------//

function Greeting() {

    const [firstName, setFirstName] = useState(() =>
      window.localStorage.getItem('hooksFirstName') || ''
    );
    const [lastName, setLastName] = useState(() =>
      window.localStorage.getItem('hooksLastName') || ''
    );
    const handleFirstNameChange = (e) => setFirstName(e.target.value);
    const handleLastNameChange = (e) => setLastName(e.target.value);
  
    useEffect(() => {
      window.localStorage.setItem('hooksFirstName', firstName);
      window.localStorage.setItem('hooksLastName', lastName);
    });
  
    return (
      <div>
        <input value={firstName} onChange={handleFirstNameChange} /><br />
        <input value={lastName} onChange={handleLastNameChange} />
        <p>
          Hello, <span>{firstName} {lastName}</span>
        </p>
      </div>
    );
  }

//-----------------------------------------Shopping Cart----------------------------------------//

function Shoppingcart() {
    const [data, setData] = useState('Partywear');
    const [cartdata, setcartdata] = useState([]);
    const [countdata, setcountdata] = useState(0);
    const [componentKey, setComponentKey] = useState(0);
    const productData = [
        { id: "1", count: 1, category: "Sport", product: "Nike Red", Price: "1500", sizes: [{ size: "41", price: "1500" }, { size: "42", price: "1300" }, { size: "43", price: "1500" }, { size: "46", price: "1700" }], productImage: "Images/01.jpg" },
        { id: "2", count: 1, category: "Sport", product: "Nike Pink", Price: "2500", sizes: [{ size: "41", price: "2500" }, { size: "42", price: "1900" }, { size: "43", price: "2000" }, { size: "46", price: "2400" }], productImage: "Images/02.jpg" },
        { id: "3", count: 1, category: "Sport", product: "Rebook Offwhite", Price: "1399", sizes: [{ size: "41", price: "1399" }, { size: "42", price: "1000" }, { size: "43", price: "1200" }, { size: "46", price: "1400" }], productImage: "Images/07.jpg" },
        { id: "4", count: 1, category: "Sport", product: "Powerline Black", Price: "1800", sizes: [{ size: "41", price: "1800" }, { size: "42", price: "1500" }, { size: "43", price: "1700" }, { size: "46", price: "2000" }], productImage: "Images/08.jpg" },
        { id: "5", count: 1, category: "Loafer", product: "Comfort Loafer", Price: "1599", sizes: [{ size: "41", price: "1599" }, { size: "42", price: "1300" }, { size: "43", price: "1500" }, { size: "46", price: "1700" }], productImage: "Images/03.jpg" },
        { id: "6", count: 1, category: "Loafer", product: "Welley Loafer", Price: "3200", sizes: [{ size: "41", price: "3200" }, { size: "42", price: "2700" }, { size: "43", price: "3000" }, { size: "46", price: "3300" }], productImage: "Images/04.jpg" },
        { id: "7", count: 1, category: "Loafer", product: "Addidas Brown", Price: "4000", sizes: [{ size: "41", price: "4000" }, { size: "42", price: "3500" }, { size: "43", price: "3700" }, { size: "46", price: "4200" }], productImage: "Images/09.jpg" },
        { id: "8", count: 1, category: "Loafer", product: "BlackLable Brown", Price: "5500", sizes: [{ size: "41", price: "5500" }, { size: "42", price: "4900" }, { size: "43", price: "5200" }, { size: "46", price: "5500" }], productImage: "Images/10.jpg" },
        { id: "9", count: 1, category: "Partywear", product: "Brown Fancy PartyWear", Price: "7800", sizes: [{ size: "41", price: "7800" }, { size: "42", price: "7000" }, { size: "43", price: "7500" }, { size: "46", price: "7800" }], productImage: "Images/05.jpg" },
        { id: "10", count: 1, category: "Partywear", product: "Shiny PartyWear", Price: "8400", sizes: [{ size: "41", price: "8400" }, { size: "42", price: "8000" }, { size: "43", price: "8300" }, { size: "46", price: "8500" }], productImage: "Images/06.jpg" },
        { id: "11", count: 1, category: "Partywear", product: " Rajwadi", Price: "6399", sizes: [{ size: "41", price: "6399" }, { size: "42", price: "6000" }, { size: "43", price: "6100" }, { size: "46", price: "6400" }], productImage: "Images/11.jpg" },
        { id: "12", count: 1, category: "Partywear", product: "Bata Rajwadi", Price: "5400", sizes: [{ size: "41", price: "5400" }, { size: "42", price: "5000" }, { size: "43", price: "5300" }, { size: "46", price: "5700" }], productImage: "Images/12.jpg" }
    ]
    const [products] = useState(productData);

    const handleClick = (data) => {
        if (cartdata.length) {
            cartdata.filter((cr, i) => {
                if (cr.id === data.id) {
                    cartdata[i] = {
                        ...cartdata[i],
                        count: cartdata[i].count + data.count,
                    }
                    setComponentKey(componentKey + 1)
                    return;
                }
                setcartdata([...cartdata, data]);
            })
        } else {
            setcartdata([...cartdata, data]);

        }
    }

    // Product Item Definition
    const handleSelect = (e) => {
        setData(e.target.value)
    }
    // Cart Item Remove Function
    const RemoveCart = (index) => {
        setcartdata(cartdata.filter((e, i) => i !== index))
    }
    //Size Chart
    const changeSize = (id, Size) => {
        const productIndex = products.findIndex(ele => ele.id === id)
        products[productIndex] = {
            ...products[productIndex],
            selectsize: Size.size,
            Price: Size.price,
        }
        setcountdata((countdata + 1), products[productIndex])
    }

    //Cart Data Increament Function
    const Increase = (id) => {
        const productIndex = products.findIndex(ele => ele.id === id)
        products[productIndex] = {
            ...products[productIndex],
            count: products[productIndex].count + 1,
        }
        setcountdata((countdata + 1), products[productIndex])
    }
    //Cart Data Decreament Function
    const Decrease = (id) => {
        const productIndex = products.findIndex(ele => ele.id === id)
        products[productIndex] = {
            ...products[productIndex],
            count: products[productIndex].count - 1,
        }
        setcountdata((countdata - 1), products[productIndex])
    }


    return (
        <center>
            <img src="Images/logo.png" alt="logo" width="100px"></img>
            <div className="shoping">
                <Container fluid>
                    <hr />
                    <Row>
                        <Col md={3} >

                            <Category
                                handleSelect={handleSelect}
                                cart={data}
                            />
                            <MainSlide/>
                            <br/>
                            <br/>
                            <Button><b>Greetings Bar</b></Button>
                            <br/>
                            <br/>
                            <Greeting/>
                        </Col>
                        <Col md={6}><List
                            key={countdata}
                            cart={data}
                            products={products}
                            handleClick={handleClick}
                            Increase={Increase}
                            Decrease={Decrease}
                            changeSize={changeSize} />
                        </Col>

                        <Col md={3}>
                            <Cart
                                cartdata={cartdata}
                                RemoveCart={RemoveCart} />
                        </Col>

                    </Row>
                </Container>
            </div>
        </center>

    );
}

export default Shoppingcart;