import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import { productArray } from '../productStore';
import ProductCard from '../components/ProductCard';
const Store = () => {
  return (
    <>
    <h1 align="center" className="p-3">Welcome to Our Store!</h1>
    <Container>
            <Row>
                {productArray.map(product => (
                    <Col key={product.id} sm="12" md="6" lg="4" className="mb-3">
                        <ProductCard product={product} />
                    </Col>
                ))}
            </Row>
        </Container>
     
              </>
  )
}

export default Store
