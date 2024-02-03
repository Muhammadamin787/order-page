import {createContext, PropsWithChildren, useContext, useMemo} from "react";
import {db} from "../utils/db.ts";
import {IProduct} from "../types/types.ts";
import {useLiveQuery} from "dexie-react-hooks";
import {calcPrices} from "../utils/helpers.ts";

interface IPriceContext {
    total: number;
    subTotal: number;
    shippingPrice: number;
    products: IProduct[] | undefined;
    increaseAmount: (id: IProduct["id"]) => void
    decreaseAmount: (id: IProduct["id"]) => void
    deleteProduct: (id: IProduct["id"]) => void
}

const initialValues: IPriceContext = {
    total: 0,
    subTotal: 0,
    shippingPrice: 0,
    products: [],
    increaseAmount: () => {
    },
    decreaseAmount: () => {
    },
    deleteProduct: () => {
    }
};

const PriceContext = createContext(initialValues);

export const PriceProvider = ({children}: PropsWithChildren) => {

    // Helper Hooks
    const products = useLiveQuery(() => db.products.toArray());
    const {value: shippingPrice} = useLiveQuery(() => db.shippingPrice.get(1)) || {value: 0};

    // Functions
    const subTotal = useMemo(() => products?.reduce(calcPrices, 0), [products]) || 0

    async function increaseAmount(productId: IProduct["id"]) {
        const found = await db.products.get(productId)
        if (found) {
            const updated = {...found, amount: found.amount + 1}
            await db.products.put(updated, productId)
        }
    }

    async function decreaseAmount(productId: IProduct["id"]) {
        const found = await db.products.get(productId)
        if (found && found.amount > 1) {
            const updated = {...found, amount: found.amount - 1}
            await db.products.put(updated, productId)
        }
    }

    async function deleteProduct(productId: IProduct["id"]) {
        await db.products.delete(productId)
    }

    const value: IPriceContext = {
        increaseAmount,
        decreaseAmount,
        deleteProduct,
        subTotal,
        total: subTotal - shippingPrice,
        products,
        shippingPrice,
    };

    return (
        <PriceContext.Provider value={value}>
            {children}
        </PriceContext.Provider>
    );
};

export function useProductPrice() {
    return useContext(PriceContext);
}