import imgPizza from "../../public/images/Pizza.png";
import Combo from "../../public/images/Combo.png";
import Rice from "../../public/images/Rice.png";
import type {IProduct} from "../types/types.ts";

export const fakeProducts: IProduct[] = [
    {
        id: 1,
        img: imgPizza,
        amount: 1,
        price: 200,
        name: "Italy Pizza",
        description: "Extra cheese and toping"
    },
    {
        id: 2,
        img: Combo,
        amount: 1,
        price: 100,
        name: "Combo Plate",
        description: "Extra cheese and toping"
    },
    {
        id: 3,
        img: Rice,
        amount: 1,
        price: 230,
        name: "Spanish Rice",
        description: "Extra garllic"
    }
]