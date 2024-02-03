export interface IProduct {
    id: number,
    img: string,
    name: string,
    price: number,
    amount: number,
    description: string,
}

export interface ICardInfo {
    cardNumber: string,
    expiryDate: string,
    cardName: string,
    cvc: string,
}

export interface IOrder extends ICardInfo {
    cardType: number,
    products: {
        productId: IProduct["id"],
        amount: IProduct["amount"],
        price: IProduct["price"],
    }[]
}