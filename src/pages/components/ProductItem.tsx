import {IProduct} from "../../types/types.ts";
import ProductPriceContainer from "./ProductPriceContainer.tsx";

interface IProductItemProps {
    product: IProduct
}

const ProductItem = ({product}: IProductItemProps) => {
    return (
        <div className="p-2.5 shadow-3xl rounded-[15px] flex">
            <div className="flex gap-[18px] flex-grow">
                <div className="bg-[#D9D9D9] rounded-lg w-[80px] h-[82px]">
                    <img src={product.img} alt="product-image"/>
                </div>
                <div className="flex flex-col justify-center ">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-sm">{product.description}</p>
                </div>
            </div>
            <ProductPriceContainer product={product}/>
        </div>
    )
}
export default ProductItem
