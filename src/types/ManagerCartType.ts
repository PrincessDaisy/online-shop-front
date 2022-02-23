type ManagerCartType = [
    {
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
      orderStatus: [
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
    }
]
export default ManagerCartType;
