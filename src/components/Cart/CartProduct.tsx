/* eslint-disable  */
import * as React from 'react';
import styled from 'styled-components';

type OrderProduct = {
    id: number,
    amount: number,
    product: {
        id: number,
        name: string,
        title: string,
        price: number,
        imageLink: string
    },
    order: {
        id: number,
        userId: number,
        totalPrice: number
    }
};

const ProductCard = styled.div`
    display: flex;
    margin-bottom: 20px;
    align-items: center;
    justify-content: space-between;
`;
const Image = styled.img`
    width: 180px;
`;
const Price = styled.span`
    font-size: 14px;
    font-weight: bold;
`;

const CartProduct : React.FC<any> = (
  {
      id,
      amount,
      product
  }: OrderProduct
) => {
  return (
    <ProductCard>
        <Image src={product.imageLink} alt="name" />
        <h4>{product.name}</h4>
        <Price>{product.price}&nbsp;ТГ</Price>
        <span>Количество: {amount}</span>
    </ProductCard>
  )
};

export default CartProduct;
