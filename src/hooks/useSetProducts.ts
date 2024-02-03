import {useEffect} from "react";
import {fakeProducts} from "../utils/constants.ts";
import {db} from "../utils/db.ts";

export default function useSetProducts() {

    // Effects
    useEffect(() => {
        async function addFriend() {
            try {
                const promises = fakeProducts.map(product => db.products.add(product))
                await Promise.all(promises);

                await db.shippingPrice.add({value: 4})

            } catch (error) {
                // console.log(error)
            }
        }

        addFriend()

    }, []);
}

