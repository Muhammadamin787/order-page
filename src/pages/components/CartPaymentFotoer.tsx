import {Fragment} from 'react'
import {formatCurrency} from "../../utils/helpers.ts";
import {IconRightArrow} from "../../utils/icons.tsx";
import {useProductPrice} from "../../context/PriceProvider.tsx";

const CartPaymentFooter = () => {

    // Helper Hooks
    const {subTotal, total, shippingPrice} = useProductPrice()

    return (
        <Fragment>
            <div className="mt-[14px] flex flex-col gap-[6px]">
                <div className="flex justify-between">
                    <div>Subtotal</div>
                    <div>
                        {formatCurrency(subTotal)}
                    </div>
                </div>
                <div className="flex justify-between">
                    <div>Shipping</div>
                    <div>{formatCurrency(shippingPrice)}</div>
                </div>
                <div className="flex justify-between">
                    <div>Total (Tax incl.)</div>
                    <div>
                        {formatCurrency(total)}
                    </div>
                </div>
            </div>
            <button
                className="flex w-full mt-[26px] bg-[#4DE1C1] h-[60px] items-center justify-between px-6 rounded-xl">
                <div>{formatCurrency(total)}</div>
                <div className="flex items-center justify-between gap-1">
                    Checkout
                    <IconRightArrow/>
                </div>
            </button>
        </Fragment>
    )
}
export default CartPaymentFooter
