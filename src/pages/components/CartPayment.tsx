import imgCardOwner from "../../../public/images/CardOwner.png";
import {db} from "../../utils/db.ts";
import {ChangeEvent, FormEvent, useState} from "react";
import CardTypes from "./CardTypes.tsx";
import {ICardInfo, IOrder} from "../../types/types.ts";
import {fakeProducts} from "../../utils/constants.ts";
import {TConductorInstance} from "react-canvas-confetti/dist/types";
import Realistic from "react-canvas-confetti/dist/presets/realistic";
import {useProductPrice} from "../../context/PriceProvider.tsx";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {usePaymentInputs} from "react-payment-inputs"
import CartPaymentFooter from "./CartPaymentFotoer.tsx";
import {removeSpaces} from "../../utils/helpers.ts";

const defaultValues: ICardInfo = {
    cvc: "",
    cardName: "",
    expiryDate: "",
    cardNumber: "",
}
const CartPayment = () => {

    // Helper Hooks
    const {products} = useProductPrice()
    const {meta, getCardNumberProps, getExpiryDateProps, getCVCProps,} = usePaymentInputs();

    // States
    const [cardType, setCardType] = useState(1)
    const [cardInfo, setCardInfo] = useState<ICardInfo>(defaultValues)
    const [conductor, setConductor] = useState<TConductorInstance>();

    // Functions
    const onChangeField = (e: ChangeEvent<HTMLInputElement>) => {
        setCardInfo(prev => ({
            ...(prev || {}),
            [e.target.name]: e.target.value
        }));
    }

    const onSubmit = async (event: FormEvent) => {
        event.preventDefault();

        const order: IOrder = {
            cardType,
            ...cardInfo,
            expiryDate: removeSpaces(cardInfo.expiryDate),
            cardNumber: removeSpaces(cardInfo.cardNumber),
            products: products?.map(product => ({
                productId: product.id,
                price: product.price,
                amount: product.amount,
            })) || []
        }

        const isSuccess = await db.orders.add(order)

        if (isSuccess) {
            setCardInfo(defaultValues)
            setCardType(1)

            // Update "products"
            const promises = fakeProducts.map(product => db.products.update(product.id, product));
            await Promise.all(promises);

            // Confetti
            conductor?.shoot();
        }

    };

    const onInit = ({conductor}: {
        conductor: TConductorInstance
    }) => {
        setConductor(conductor);
    };

    return (
        <div
            className="max-w-[398px] bg-[#565ABB] text-white border border-blue-500 px-[19px] py-[21px] rounded-[20px]">

            <div className="text-[22px] font-semibold flex justify-between items-center">
                <h2>Card Details</h2>
                <img src={imgCardOwner} alt="avatar"/>
            </div>

            <form className="mt-[15px]" onSubmit={onSubmit}>
                <CardTypes cardType={cardType} setCardType={setCardType}/>
                <div className="mt-[27px]">
                    <label>Name on card</label>
                    <input required
                           placeholder="Name"
                           name="cardName"
                           value={cardInfo.cardName}
                           onChange={onChangeField}
                           className="primary-input"/>
                </div>
                <div className="mt-3.5">
                    <label htmlFor="cc-number">Card Number</label>
                    <div className="mt-[3px] text-black">
                        <input
                            required
                            name="cardNumber"
                            max={16}
                            className="primary-input"
                            {...getCardNumberProps({onChange: onChangeField})}
                            value={cardInfo?.cardNumber}/>
                    </div>

                </div>
                <div className="flex gap-2 mt-[14px]">
                    <div className="flex-grow">
                        <label>Expiration date</label>
                        <input name="expiryDate"
                               required
                               className="primary-input"
                               {...getExpiryDateProps({onChange: onChangeField})}
                               value={cardInfo?.expiryDate}/>
                    </div>
                    <div className="flex-grow">
                        <label>CVC</label>
                        <input name="cvc"
                               required
                               className="primary-input"
                               {...getCVCProps({onChange: onChangeField})} value={cardInfo?.cvc}/>
                    </div>
                </div>

                <div className="text-red-400 mt-1 -mb-2">
                    {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
                </div>

                <hr className="mt-[22px] border-[#5F65C3] bg-[#5F65C3]"/>
                <CartPaymentFooter/>
            </form>

            {/* Confetti */}
            <Realistic onInit={onInit}/>
        </div>
    )
}
export default CartPayment
