/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';

type ManagerArmProductProp = {
    name: string,
    price: number,
    amount: number,
    imageLink: string,
    order: {
        id: number,
        userId: number,
        totalPrice: number,
        orderStatus: string
    }
}

const Product = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 15px;
    overflow: hidden;
    padding: 8px 24px;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 12px;
`;

const Image = styled.img`
    width: 80px;
`;

const ManagerArmProduct: React.FC<any> = ({ name, price, amount, imageLink, order }: ManagerArmProductProp) => {
    return (
        <Product>
            <Image src={imageLink} alt={name} />
            <div>{name}</div>
            <div>{price} ТГ</div>
            <div>{amount}</div>
        </Product>
    )
};

export default ManagerArmProduct;