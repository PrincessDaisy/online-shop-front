type CartType = {
    id: number,
    order: {
      id: number,
      userId: number,
      totalPrice: number
    },
    orderProducts: [
      {
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
          totalPrice: number
        }
      }
    ]
  }

export default CartType;
