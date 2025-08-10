import { SimpleCardType } from "../../pojos/CardPojos";

const SimpleCard: React.FC<SimpleCardType> = ({ title, result, className, titleClassName, resultClassName, style }) => {
    return (
        <>
            <div className={`flex flex-col ${className}`} style={style}>
                <div className={`${titleClassName}`}>{title}</div>
                <div className={`${resultClassName}`}>{result}</div>
            </div>
        </>
    )
}

export default SimpleCard;