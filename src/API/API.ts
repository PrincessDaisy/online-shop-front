/* eslint-disable class-methods-use-this */
import { Order, PayOrder, UpdateCart } from '../types';
import instanceAPI from './APIclient';

class OnlineShopAPI {
  public getProducts() {
    return instanceAPI.get('/products');
  }

  public getCart() {
    return instanceAPI.get('/cart');
  }

  public updateCart(updateCart: UpdateCart) {
    return instanceAPI.post('/cart/update', updateCart);
  }

  public payOrder(i: PayOrder) {
    return instanceAPI.post('/order/pay', i);
  }

  public getManagerCart() {
    return instanceAPI.get('/cart/manager');
  }

  public deliverOrder(i: Order) {
    return instanceAPI.post('/cart/manager/deliver', i);
  }
}

export default OnlineShopAPI;
