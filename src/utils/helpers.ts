import {IProduct} from "../types/types.ts";

export const formatCurrency = (amount: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    return formatter.format(amount).replace(/\.00$/, '');
};

export const calcPrices = (acc: number, product: IProduct) => acc + (product.price * product.amount)

export const removeSpaces = (str: string) => str.split(" ").join("")
