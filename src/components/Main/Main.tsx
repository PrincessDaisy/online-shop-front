/* eslint-disable  */
import * as React from 'react';
import { Cart } from '../Cart';
import { ProductList } from '../Product';
import styled from 'styled-components';
import { UpdateCart, ProductType, CartType, ManagerCartType, Order} from '../../types';
import OnlineShopAPI from '../../API';
import { useQuery, useMutation } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import { ManagerArm } from '../Manager';

const MainContent = styled.div`
    display: grid;
    grid-template-columns: 3fr 2fr;
    padding: 20px;
    grid-gap: 10px;
`;
const Loader = styled.div`
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.15);
`;

const Button = styled.button`
    padding: 8px;
    font-size: 24px;
    color: #fff;
    cursor: pointer;
`;

let OnlineShop = new OnlineShopAPI()

const updateCart = async (i: UpdateCart) => {
    if (i.Action === "") {
        return;
    }
    const result = await OnlineShop.updateCart(i).then(response => response.data);
    return result;
};

const deliverOrderCallback = async (i: Order) => {
    const result = await OnlineShop.deliverOrder(i).then(response => response.data);
    return result;
};

const fetchProducts = async () => {
    const result = await OnlineShop.getProducts().then(response => response.data);
    return result;
};

const fetchCart = async () => {
    const result = await OnlineShop.getCart().then((response) => response.data);
    return result;
};

const fetchManagerCart = async () => {
    const result = await OnlineShop.getManagerCart().then((response) => response.data);
    return result;
};

const Main: React.FC<any> = () => {

    const [ query, setQuery ] = React.useState(0);

    // Не стал использовать react router для ради одной компоненты
    const [ showArm, setShowArm] = React.useState(false);

    const updateOrder = useMutation((i: UpdateCart) => {
        return updateCart(i);
    });

    const {
        data: productData, 
        isSuccess: productIsSuccess,
        isLoading: productIsLoading,
    } = useQuery<ProductType[], Error>(['product', query.toString()], () => fetchProducts(), {
        select: (data) => data
    });

    const {
        data: cartData,
        isSuccess: cartIsSuccess,
    } = useQuery<CartType, Error>(['cart', query.toString()], () => fetchCart(), {
        select: (data) => data,
    });

    const {
        data: managerCartData,
        isSuccess: managerCartIsSuccess,
    } = useQuery<ManagerCartType, Error>(['managerCart', query.toString()], () => fetchManagerCart(), {
        select: (data) => data,
    });

    const updateOrderFunc = (i: UpdateCart) => {
        updateOrder.mutate(i, {
            onSuccess: () => {setQuery(query + 1)}
        });
    };

    const deliverOrderFunc = useMutation((i: Order) => {
        return deliverOrderCallback(i);
    });

    const deliverOrder = (i: Order) => {
        deliverOrderFunc.mutate(i, {
            onSuccess: () => {setQuery(query + 1)}
        })
    }

    return (
        <>
            <Button onClick={() => {setShowArm(false)}}>Магазин</Button>
            <Button onClick={() => {setShowArm(true)}}>АРМ Менеджера</Button>
            {
                !showArm && <MainContent>
                    {
                        productIsLoading && <Loader><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Loader.gif/480px-Loader.gif" alt="" /></Loader>
                    }
                    {
                        !!productIsSuccess && <ProductList setUpdate={updateOrderFunc} productData={productData}/>
                    }
                    {
                        !!cartIsSuccess && <Cart cartType={cartData} setQuery={setQuery}/>
                    }
                </MainContent>
            }
            {
                showArm && <div>
                    {
                        !!managerCartIsSuccess && managerCartData !== null && <ManagerArm managerCartData={managerCartData} deliverOrder={deliverOrder} />
                    }
                </div>
            }
        </>
    );
};

export default Main;
