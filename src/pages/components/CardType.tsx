const CardType = ({type, icon, onClick}: { onClick: (a: number) => void, type: number, icon: string }) => {
    return (
        <button onClick={() => onClick(type)}>
            <img src={icon} alt="MasterCard"/>
        </button>
    )
}

export default CardType
