import { CardType } from "../../pojos/Dashboard.pojos";


const Card: React.FC<CardType> = ({ title, icon, result, className, iconClassName }) => {
    return (
        <>
            <div className={`flex flex-col ${className}`}>
                <img src={icon} alt="" className={`${iconClassName}`} />
                <div>{title}</div>
                <div>{result}</div>
            </div>
        </>
    )
}

export default Card;