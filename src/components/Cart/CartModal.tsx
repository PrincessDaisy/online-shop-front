/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';
import { useMutation } from 'react-query';
import OnlineShopAPI from '../../API';
import { PayOrder } from '../../types';

const Modal = styled.div`
    z-index: 2;
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 20px;
`;

const Input = styled.input`
    background: #fff;
    font-size: 24px;
    color: #000;
    margin: 24px auto 24px;
    display: block;
    width: 240px;
    padding: 8px;
    border-radius: 15px;
`;

const Button = styled.button`
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    background: ${({color}) => color ? color : "green" };
    padding: 8px;
    border-radius: 15px;
`;

let OnlineShop = new OnlineShopAPI();

const payOrder = async (i: PayOrder) => {
    const result = await OnlineShop.payOrder(i).then(response => response.data);
    return result;
};

const CartModal: React.FC<any> = ({ setShowModal, orderId, setQuery }) => {
    const [value, setValue] = React.useState<PayOrder>({OrderId: orderId, Address: "", Iban: ""})

    const mutation = useMutation((i: PayOrder) => {
        return payOrder(i);
    });

    function handleChangeAddress(e: any) {
        setValue({
            OrderId: value.OrderId,
            Address: e.target.value,
            Iban: value.Iban
        });
    };

    function handleChangeIban(e: any) {
        setValue({
            OrderId: value.OrderId,
            Iban: e.target.value,
            Address: value.Address,
        });
    };

    return (
        <Modal>
        <form action="" onSubmit={(e) => {
                e.preventDefault(), 
                mutation.mutate(value);
                setQuery(orderId)
            }}>
                <Input type="text" placeholder="Адрес" required value={value.Address} onChange={handleChangeAddress}/>
                <Input type="text" placeholder="Номер карты" required value={value.Iban} onChange={handleChangeIban}/>
                <Button type="submit">Оплатить</Button>
                <Button color={"red"} onClick={() => {setShowModal(false)}}>Закрыть</Button>
        </form>
    </Modal>
    )
};

export default CartModal;
