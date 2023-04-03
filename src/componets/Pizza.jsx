import React,{useState} from 'react'
import {Button ,Card, Col, Row,Modal } from 'react-bootstrap';
import { useDispatch,useSelector } from 'react-redux';
import{addToCart} from "../actions/cart-action"
export default function Pizza({pizza}) {
    const [varient, setvarient] = useState("medium");
    const [quantity, setquantity] = useState(1);
    const [show, setShow] = useState(false);
 
    const dispatch=useDispatch();
    const addToCartHandler=()=>{
      dispatch(addToCart(pizza,quantity,varient))
    }

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Card style={{ width: '18rem' , marginTop:"30px" }}>
      <Card.Img variant="top" src={pizza.image} style={{height:"250px",cursor:"pointer"}} 
      onClick={handleShow}/>
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
      <hr/>
        <Card.Text>
         <Row>
            <Col md={6} lg={6} sm={12}>
                <h6>Varients</h6>
                <select 
                onChange={(e)=>{
                  setvarient(e.target.value)
                  console.log(e.target.value);
                }}
                >{pizza.varients.map((varient=>(
                    <option  
                   >{varient}</option>
                )))}</select>
            </Col>
            <Col md={6}>
            <h6>Quentiy</h6>
            <select value={quantity}
             onChange={(e)=>setquantity(e.target.value)} >{[...Array(10).keys()].map((v,i)=>(
                <option value={i+1}>{i+1}</option>
            ))}</select>
            </Col>
         </Row>
        </Card.Text>
        <Row>
            <Col md={6}>price:{pizza.prices[0][varient]*quantity}</Col>
            <Col md={6}>
              <button className='bg-warning text-white'
              onClick={addToCartHandler}
              >Add TO Cart</button>
            </Col>
        </Row>
        
      </Card.Body>
    </Card>
    {/* modal */}

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{pizza.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div> <Card.Img variant="top" src={pizza.image} style={{height:"250px"}} 
      /></div>
      <div>
        <h5>Description:</h5>
        <h6>{pizza.description}</h6>
      </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}
