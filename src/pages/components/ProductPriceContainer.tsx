import {IconTrash} from "../../utils/icons.tsx";
import {formatCurrency} from "../../utils/helpers.ts";
import {IProduct} from "../../types/types.ts";
import {useProductPrice} from "../../context/PriceProvider.tsx";

interface Props {
    product: IProduct
}

const ProductPriceContainer = ({product}: Props) => {

    // Helper Hooks
    const {increaseAmount, decreaseAmount, deleteProduct} = useProductPrice()

    return (
        <div className="flex w-[136px] sm:w-[216px] text-[#393939] items-center">
            <div className="actiond flex items-center gap-1.5 w-20">
                <div className="text-[22px] font-semibold select-none">{product.amount}</div>
                <div className="flex flex-col gap-2">
                    <button onClick={() => increaseAmount(product.id)}
                            className="border-[10px] border-t-transparent border-x-transparent border-[#393939]"/>
                    <button onClick={() => decreaseAmount(product.id)}
                            className="border-[10px] border-b-transparent border-x-transparent border-[#393939]"/>
                </div>
            </div>
            <div className="text-sm font-medium flex-grow text-center">
                {formatCurrency(product.price * product.amount)}
            </div>
            <div className="ml-2 sm:ml-0 sm:mr-[15px] md:mr-[23px]">
                <button onClick={() => deleteProduct(product.id)}>
                    <IconTrash/>
                </button>
            </div>
        </div>
    )
}
export default ProductPriceContainer
