import imgMasterCard from "../../../public/images/MasterCard.png";
import imgVisa from "../../../public/images/Visa.png";
import imgRuPay from "../../../public/images/RuPay.png";

interface IProps {
    cardType: number,
    setCardType: (n: number) => void
}

const CardTypes = ({cardType, setCardType}: IProps) => {

    // Functions
    const isActive = (type: number) => type === cardType ? "border-2 border-[#a0a3C1] rounded-lg shadow-lg" : ""

    return (
        <div>
            <h4>Card type</h4>
            <div className="flex gap-[17px] mt-3.5">

                <button type="button" onClick={() => setCardType(1)} className={isActive(1)}>
                    <img src={imgMasterCard} alt="MasterCard"/>
                </button>
                <button type="button" onClick={() => setCardType(2)} className={isActive(2)}>
                    <img src={imgVisa} alt="MasterCard"/>
                </button>
                <button type="button" onClick={() => setCardType(3)} className={isActive(3)}>
                    <img src={imgRuPay} alt="MasterCard"/>
                </button>

                <button
                    type="button"
                    className="w-[75px] h-[55px] bg-[#7073C1] font-bold rounded-[5px] flex items-center justify-center">
                    See all
                </button>
            </div>
        </div>
    )
}

export default CardTypes
