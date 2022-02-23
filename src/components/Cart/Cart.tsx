/* eslint-disable */
import * as React from 'react';
import styled from 'styled-components';
import OnlineShopAPI from '../../API';
import CartProduct from './CartProduct';
import { CartType } from '../../types';
import CartModal from './CartModal';

const OnlineShop = new OnlineShopAPI();

type CartProps = {
  cartType: CartType,
  setQuery: () => {}
};

const CartWrapper = styled.div`
  position: relative;
`;

const Cart: React.FC<any> = ({ cartType, setQuery }: CartProps) => {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <CartWrapper>
      <button onClick={() => {
        if (cartType.order === null) {
          alert("Добавьте товар в корзину");
        } else {
          setShowModal(true);
        }
        
        }}>Оплатить</button>
      {
        showModal && cartType.order !== null && <CartModal setShowModal={setShowModal} orderId={cartType.order.id} setQuery={setQuery}/>
      }
      {
        !showModal && cartType.orderProducts != null && cartType.orderProducts.map(item => {
          return <CartProduct {...item} key={item.id} />
        })
      }
    </CartWrapper>
  )
};

export default Cart;
