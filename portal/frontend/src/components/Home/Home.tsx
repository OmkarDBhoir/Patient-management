import { useEffect, useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Sidebar from "../Navbar/Sidebar";
import dashboard from '../../assets/dashboard.png'
import billing from '../../assets/billing.png'
import appointment from '../../assets/appointments.png'
import reports from '../../assets/reports.png'
import patients from '../../assets/patients.png'
import { navs } from "../../pojos/NavbarPojos";
import TopNavbar from "../Navbar/TopNavBar";
import doctor_profile from '../../assets/doctor_profile.png'
import Patients from "../Patients/Patients";
import Appointment from "../Appointment/Appointment";
import { patientsDtls } from "../../pojos/Dashboard.pojos";
import apiService from "../../services/ApiService";

interface User {
    name: string;
    role: string;
}

const tempList: navs[] = [
    { name: 'Dashboard', icon: dashboard },
    { name: 'Patients', icon: patients },
    { name: 'Appointments', icon: appointment },
    { name: 'Billing', icon: billing },
    { name: 'Reports', icon: reports }
]
const Home: React.FC = () => {
    const [user, setUser] = useState<User>({ name: 'Dr. smith', role: 'Admin' })
    const [active, setActive] = useState<number>(0);
    const [navList, setNavList] = useState<navs[]>(tempList);
    const [recentPatients, setRecentPatients] = useState<patientsDtls[]>([]);
    const [refresh, setRefresh] = useState<boolean>(true);

    const fetchPatients = async () => {

        try {
            const response = await apiService.get<patientsDtls[]>("/patients/recentPatients");
            setRecentPatients(response.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        if (refresh) {
            fetchPatients();
            setRefresh(false);
        }
    }, [refresh])

    const render = () => {
        switch (active) {
            case 0:
                return <Dashboard recentPatients={recentPatients} setRefresh={setRefresh} />
            case 1:
                return <Patients recentPatients={recentPatients} setRefresh={setRefresh} />
            case 2:
                return <Appointment />
            default:
                return <><div>default</div></>
        }
    }
    return (
        <>
            <div className="flex-1 w-full min-h-screen flex border-b-8">
                <Sidebar name={user.name} role={user.role} active={active} setActive={setActive} navList={navList} />
                <div className="w-full flex flex-col">
                    <TopNavbar title={navList[active].name} profileIcon={doctor_profile} />
                    {render()}
                </div>
            </div>
        </>
    )
}

export default Home;