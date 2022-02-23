/* eslint-disable */
import * as React from 'react';
import { useQuery } from 'react-query';
import Product from './Product';
import OnlineShopAPI from '../../API';
import styled from 'styled-components';
import { UpdateCart, ProductType } from '../../types';

const OnlineShop = new OnlineShopAPI();

type ProductListProps = {
    productData: ProductType[]
    setUpdate: (i: UpdateCart) => void
}

let fetchProducts = async () => {
    const result = await OnlineShop.getProducts().then(response => response.data);
    return result;
};

const Content = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    background: gray;
`;

const ProductList: React.FC<any> = ({ setUpdate }: ProductListProps) => {
    const {
        data, 
        isSuccess,
    } = useQuery<ProductType[], Error>('product', () => fetchProducts(), {
        select: (data) => data
    });
    return (
        <Content>
            {!!isSuccess && data?.map((item) => <Product {...item} key={item.id} setUpdate={setUpdate} />)}
        </Content>
    )
};

export default ProductList;