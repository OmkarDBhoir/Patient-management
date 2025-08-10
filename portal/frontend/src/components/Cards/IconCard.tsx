import { IconCardType } from "../../pojos/CardPojos";

const IconCard: React.FC<IconCardType> = ({ title, icon, result, className, iconClassName, titleClassName, resultClassName, style }) => {
    return (
        <>
            <div className={`flex flex-col ${className}`} style={style}>
                <img src={icon} alt="" className={`${iconClassName}`} />
                <div className={`${titleClassName}`}>{title}</div>
                <div className={`${resultClassName}`}>{result}</div>
            </div>
        </>
    )
}

export default IconCard;