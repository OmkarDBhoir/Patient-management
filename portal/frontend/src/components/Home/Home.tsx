import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Navbar/Sidebar";


const Home: React.FC = () => {
    return (
        <>
            <div className="flex-1 w-full min-h-screen flex border-b-8">
                <Sidebar />
                <div className="w-full flex items-center justify-center">
                    <Dashboard />
                </div>
            </div>
        </>
    )
}

export default Home;