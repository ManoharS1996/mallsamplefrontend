import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;
`;

const ProductCard = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  text-align: center;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  color: #f5a623;
`;

const Button = styled.button`
  background-color: #f5a623;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #d48a20;
  }
`;

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <div>
            <ProductContainer>
                {products.map(product => (
                    <ProductCard key={product.id}>
                        <ProductImage src={product.image} alt={product.name} />
                        <div>{product.name}</div>
                        <ProductPrice>₹{product.price}</ProductPrice>
                        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
                    </ProductCard>
                ))}
            </ProductContainer>
            <h2>Cart</h2>
            <div>
                {cart.map((item, index) => (
                    <div key={index}>
                        <div>{item.name} - ₹{item.price}</div>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
