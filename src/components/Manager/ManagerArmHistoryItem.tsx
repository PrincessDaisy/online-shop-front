/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';

type HistoryItemProps = {
    id: number,
    statusChange: Date,
    orderStatus: string,
    order: {
        id: number,
        userId: number,
        totalPrice: number,
        orderStatus: string
    }
};

const HistoryItem = styled.div`
    display: grid;
    grid-template-columns: 1fr 3fr 3fr;
    padding: 8px;
    margin-top: 16px;
`;

const ManagerArmHistoryItem: React.FC<any> = ({ id, statusChange, orderStatus, order }: HistoryItemProps) => {
    
    return (
        <HistoryItem>
            <span>{id}</span>
            <span>{new Date(statusChange).toLocaleDateString('ru-RU', {
                hour: "numeric", 
                minute: "numeric", 
                second: "numeric"
            })}</span>
            <span>{orderStatus}</span>
        </HistoryItem>
    );
}

export default ManagerArmHistoryItem;
