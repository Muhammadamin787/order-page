import {IconLeftArrow} from "../../utils/icons.tsx";
import ProductItem from "./ProductItem.tsx";
import {useLiveQuery} from "dexie-react-hooks";
import {db} from "../../utils/db.ts";

const CartProducts = () => {

    // Helper Hooks
    const products = useLiveQuery(() => db.products.toArray());

    return (
        <div className="flex-grow ">
            <div
                className="text-lg font-semibold border-b-2 border-[#D0CFCF] pb-[22px] flex">
                <button className="-ml-2">
                    <IconLeftArrow/>
                </button>
                <p>Shopping Continue</p>
            </div>
            <div className="py-[24px]">
                <h1 className="text-lg font-medium">Shopping cart</h1>
                <p className="text-sm">You have {products?.length} item in your cart</p>
                <div className="py-[29px] flex flex-col gap-6">
                    {
                        products?.map((product, index) => {
                            return <ProductItem product={product} key={index}/>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default CartProducts
