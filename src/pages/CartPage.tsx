import {CartProducts, CartPayment} from "./components";
import {PriceProvider} from "../context/PriceProvider.tsx";
import {useSetProducts} from "../hooks";

const CartPage = () => {

    // Config Indexed DB
    useSetProducts()

    return (
        <div className="flex items-center justify-center h-screen">
            <div
                className="h-[744px] border max-h-full overflow-auto w-[1133px] max-w-[1133px] bg-white rounded-[20px] py-[30px] px-[10px] md:px-[40px] lg:px-[45px] shadow-2xl">
                <div
                    className="h-full flex flex-col items-center lg:flex-row gap-0 md:gap-[55px] text-[#1E1E1E]">
                    <PriceProvider>
                        <CartProducts/>
                        <CartPayment/>
                    </PriceProvider>
                </div>
            </div>
        </div>
    )
}
export default CartPage
