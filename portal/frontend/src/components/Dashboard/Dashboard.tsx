import Card from "./Card";
import userIcon from '../../assets/user.png';

const Dashboard: React.FC = () => {
    return (
        <>
            <div>
                <Card icon={userIcon} title="Patients" result="1.250" className="w-[80px] h-[80px] border" iconClassName="w-[40px] h-[40px]" />
            </div>
        </>
    )
}

export default Dashboard;