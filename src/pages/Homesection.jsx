import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
// import AllPiza from "../pizza-data";
import Pizza from "../componets/Pizza";
import { getAllPizzasAction } from "../actions/pizzaAction";
import { useDispatch, useSelector } from "react-redux";
export default function Homesection() {
  const dispatch = useDispatch();
  const pizzastate = useSelector((state) => state.getAllPizzaReducer);
  const { isloading, pizzas, Error } = pizzastate;
  console.log("====================================");
  console.log(pizzastate, "dfwre");
  console.log("====================================");
  useEffect(() => {
    dispatch(getAllPizzasAction());
  }, [dispatch]);

  return (
    <>
      <Container>
        {isloading ? (
          <h1>Loading...</h1>
        ) : Error ? (
          <h1>Error while fetching pizzas</h1>
        ) : (
          <Row>
            {pizzas.map((pizza) => (
              <Col md={4} sm={12}>
                <Pizza pizza={pizza} />
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
}
