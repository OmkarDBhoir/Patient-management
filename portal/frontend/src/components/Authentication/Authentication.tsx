import Navbar from "../Navbar/Navbar";
import Login from "./Login";


const Authentication: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="flex-1 w-full flex items-center justify-center border-b-8">
                <Login />
            </div>
        </>
    )
}

export default Authentication;