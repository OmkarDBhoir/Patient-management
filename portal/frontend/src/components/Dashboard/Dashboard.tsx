import userIcon from '../../assets/user.png';
import appointmentIcon from '../../assets/appintment-icon.png';
import invoicesIcon from '../../assets/invoice-icon.png';
import dollerIcon from '../../assets/doller-icon.png';
import { useState } from "react";
import { patientsDtls, Stats } from "../../pojos/Dashboard.pojos";
import { BaseConstants } from "../../Utils/BaseConstants";
import AppointmentCalendar from "../Calendar/Calendar";
import IconCard from "../Cards/IconCard";

const Dashboard: React.FC = () => {
    const [dashboardStats, setDashboardStats] = useState<Stats>({
        patients: 1.250,
        appointments: 120,
        invoices: 50,
        totalRevenue: 85000
    })

    const [patients, setPatients] = useState<patientsDtls[]>([
        {
            name: "Jenny Willson",
            age: "45",
            gender: "Female",
            lastVisit: "01/23/2024"
        },
        {
            name: "Darrell Steward",
            age: "56",
            gender: "Male",
            lastVisit: "01/20/2024"
        },
        {
            name: "Esther Howard",
            age: "52",
            gender: "Female",
            lastVisit: "01/13/2024"
        },
        {
            name: "Cody Fisher",
            age: "38",
            gender: "Male",
            lastVisit: "01/20/2024"
        },
        {
            name: "Jarome Bell",
            age: "60",
            gender: "Male",
            lastVisit: "01/10/2024"
        },
    ])

    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col p-8 pt-0 gap-5">
                <div className="flex gap-8">
                    <IconCard icon={userIcon} title="Patients" result={dashboardStats.patients.toString()} className="flex justify-center pl-4 gap-3 w-[15%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                    <IconCard icon={appointmentIcon} title="Appointments" result={dashboardStats.appointments.toString()} className="flex justify-center pl-4 gap-3 w-[15%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                    <IconCard icon={invoicesIcon} title="Invoices" result={dashboardStats.invoices.toString()} className="flex justify-center pl-4 gap-3 w-[15%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                    <IconCard icon={dollerIcon} title="Total Revenue" result={BaseConstants.doller_symbol + dashboardStats.totalRevenue.toString()} className="flex justify-center pl-4 gap-3 w-[30%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                </div>
                <div className="flex gap-10">
                    <div className="relative overflow-x-auto w-[50%] border-2 rounded-lg">
                        <div className="w-full h-[50px] flex items-center pl-6 bg-[#174B95] text-white">Recent Patients</div>
                        <div className="max-h-[313px] overflow-auto">
                            <table className="w-full text-sm text-left rtl:text-right max-h-[320px] overflow-auto">
                                <thead className="text-[#333438] font-normal bg-gray-50 text-[15px]">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 font-normal">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py- font-normal">
                                            Age
                                        </th>
                                        <th scope="col" className="px-6 py-3 font-normal">
                                            Gender
                                        </th>
                                        <th scope="col" className="px-6 py-3 font-normal">
                                            Last Visit
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="text-[15px]">
                                    {patients && (showAll ? patients : patients.slice(0, 4)).map((patient) => (
                                        <tr className="bg-white border-b border-gray-200">
                                            <th scope="row" className="px-6 py-4 text-[#333438] font-normal whitespace-nowrap">{patient.name}</th>
                                            <td className="px-6 py-4">{patient.age}</td>
                                            <td className="px-6 py-4">{patient.gender}</td>
                                            <td className="px-6 py-4">{patient.lastVisit}</td>
                                        </tr>
                                    ))}
                                    {!showAll &&
                                        <tr className="bg-white border-b border-gray-200">
                                            <td scope="row" colSpan={4} className="px-6 py-4 text-blue-500 font-normal text-end whitespace-nowrap"><button onClick={() => setShowAll(!showAll)}>View All</button></td>
                                        </tr>
                                    }
                                    {showAll &&
                                        <tr className="bg-white border-b border-gray-200">
                                            <td scope="row" colSpan={4} className="px-6 py-4 text-blue-500 font-normal text-end whitespace-nowrap"><button onClick={() => setShowAll(!showAll)}>Show less</button></td>
                                        </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="relative" style={{ border: "1px solid" }}>
                        <AppointmentCalendar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;