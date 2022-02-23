/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';
import { Order } from '../../types';
import ManagerArmHistoryItem from './ManagerArmHistoryItem';
import ManagerArmProduct from './ManagerArmProduct';

type ManagerArmItemProps = {
    totalPrice: number,
    products: [
      {
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
    ],
    orderHistory: [
        {
            id: number,
            statusChange: Date,
            orderStatus: string,
            order: {
                id: number,
                userId: number,
                totalPrice: number,
                orderStatus: string
            }
        }
    ]
    orderDetails: {
        id: 0,
        address: string,
        iban: string,
        order: {
            id: number,
            userId: number,
            totalPrice: number,
            orderStatus: string
        }
    }
    deliverOrder: (i: Order) => {}
};

const OrderItem = styled.div`
    background: #fff;
    border-radius: 15px;
    padding: 16px 0;
    margin-bottom: 24px;
`;

const Info = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 16px;
    font-weight: bold;
    font-size: 20px;
`;

const HistoryTopItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    font-weight: bold;
`;

const HistoryWrapper = styled.div`
    margin-top: 20px;
`;

const Details = styled.div`
    display: flex;
    font-size: 18px;
    margin-top: 16px;
    padding: 16px;
    justify-content: space-between;
`;
const Button = styled.button`
    background: green;
    color: #fff;
    border-radius: 8px;
    padding: 8px;
    cursor: pointer;
`;

const ManagerArmItem: React.FC<any> = ({ totalPrice, products, orderHistory, orderDetails, deliverOrder }: ManagerArmItemProps) => {
    return (
        <OrderItem>
            <h3>Заказ {orderHistory[0].order.id}</h3>
            <div>
                {products.map(item => <ManagerArmProduct {...item} key={item.name}/>)}
            </div>
            <Info>
                <span>Статус: {orderHistory[orderHistory.length - 1].order.orderStatus}</span>
                <span>Общая стоимость: {totalPrice} ТГ</span>
            </Info>
            {orderDetails != null && 
                <Details>
                    <span>Адрес: {orderDetails.address}</span>
                    <span>Номер карты: {orderDetails.iban}</span>
                    {orderHistory[orderHistory.length - 1].order.orderStatus != "Доставлен" && <Button onClick={() => {deliverOrder(orderDetails.order)}}>Доставить</Button> }
                </Details>
            }
            <HistoryWrapper>
                <h3>История изменений</h3>
                <HistoryTopItem>
                    <span>ID</span>
                    <span>Время изменения</span>
                    <span>Действие</span>
                </HistoryTopItem>
                <div>
                    {orderHistory.map(item => <ManagerArmHistoryItem {...item} key={item.id} />)}
                </div>
            </HistoryWrapper>
        </OrderItem>
    )
};

export default ManagerArmItem;