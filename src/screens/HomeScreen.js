import React from "react";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import products from "../products";

const HomeScreen = () => {
    return (
        <>
            <h1>Available Products</h1>
            <Row>
                {products.map((product) => (
                    <Col sm={12} md={6} lang={4} xl={3}>
                        <Product product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default HomeScreen;
