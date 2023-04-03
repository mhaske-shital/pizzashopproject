import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { addToCart, deleteFromCart } from "../actions/cart-action";
export default function Cartsection() {
  const dispatch = useDispatch();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  const subTotal = cartItems.reduce((x, item) => x + item.price, 0);
  return (
    <>
      <Container>
        <Row>
          <Col md={6} lg={10}>
            <h1>Cart Items</h1>
            <Row>
              {cartItems.map((item) => {
                return (
                  <>
                    <Col md={7} lg={8}>
                      <h4>
                        {item.name} [{item.varient}]
                      </h4>
                      <h6>
                        Price:{item.quantity} x {item.prices[0][item.varient]}=
                        {item.price}
                      </h6>
                      <h6>
                        Quantity:&nbsp; {item.quantity}&nbsp;
                        <AiFillMinusCircle
                          className="text-danger"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity - 1, item.varient)
                            );
                          }}
                        />
                        &nbsp;
                        <AiFillPlusCircle
                          className="text-success"
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            dispatch(
                              addToCart(item, item.quantity + 1, item.varient)
                            );
                          }}
                        />
                      </h6>
                    </Col>
                    <Col md={5} lg={4}>
                      <img
                        alt={item.name}
                        src={item.image}
                        style={{ width: "100px", height: "80px" }}
                      />
                      <button
                        style={{ cursor: "pointer", marginLeft: "10px" }}
                        className="btn btn-danger"
                        onClick={() => {
                          dispatch(deleteFromCart(item));
                        }}
                      >
                        Remove
                      </button>
                    </Col>
                    <hr />
                  </>
                );
              })}
            </Row>
          </Col>
          <Col md={4} lg={2} mt={5}>
            <h1> Payment Info</h1>
            <h4>Sub Total</h4>
            <h4>RS :{subTotal} /-</h4>
            <Button>checkout</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
