/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';
import { UpdateCart, ProductType } from '../../types';

type ProductProps = {
    id: number,
    name: string,
    title: string,
    price: number,
    imageLink: string,
    amount: number,
    setUpdate: (i: UpdateCart ) => void
}

const Price = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const Image = styled.img`
    width: 60%;
    margin: auto;
`;

const ProductCard = styled.div`
    background-color: white;
    border-radius: 15px;
    &:hover {
        transform: scale(1.05);
        transition: 0.8s;
    }
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Button = styled.button`
    display: block;
    width: 40px;
    height: 40px;
    background: ${({color}) => color ? color : "green" };
    font-size: 25px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    cursor: pointer;
`;

const ButtonWrapper = styled.div`
    display: flex;
    margin: 20px auto 0;
    width: 100px;
    justify-content: space-between;
`;

const Product: React.FC<any> = (
    { 
        id, 
        name, 
        title, 
        price, 
        imageLink, 
        amount, 
        setUpdate 
    }: ProductProps) => {
    
    return (
        <ProductCard>
            <Image src={imageLink} alt={name} />
            <h3>{name}</h3>
            <p>{title}</p>
            <Price>{price} ТГ</Price>
            <ButtonWrapper>
                <Button onClick={() => {setUpdate({Action: "ADD-PRODUCT", ProductId: id})}}>+</Button>
                <div>{amount}</div>
                <Button color={"red"} onClick={() => {setUpdate({Action: "REMOVE-PRODUCT", ProductId: id})}}>-</Button>
            </ButtonWrapper>
        </ProductCard>
    )
}
export default Product;
