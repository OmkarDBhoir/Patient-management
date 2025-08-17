import userIcon from '../../assets/user.png';
import appointmentIcon from '../../assets/appintment-icon.png';
import invoicesIcon from '../../assets/invoice-icon.png';
import dollerIcon from '../../assets/doller-icon.png';
import { useState } from "react";
import { patientsDtls, Stats } from "../../pojos/Dashboard.pojos";
import { BaseConstants } from "../../Utils/BaseConstants";
import AppointmentCalendar from "../Calendar/Calendar";
import IconCard from "../Cards/IconCard";
import { RefreshIconBlue } from '../../assets/Icons';

interface DashbaordProps {
    setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
    recentPatients: patientsDtls[];
}

const Dashboard: React.FC<DashbaordProps> = ({ recentPatients, setRefresh }) => {
    const [dashboardStats, setDashboardStats] = useState<Stats | undefined>({
        patients: 1.250,
        appointments: 120,
        invoices: 50,
        totalRevenue: 85000
    })

    const [showAll, setShowAll] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col p-8 pt-0 gap-5">
                <div className="flex gap-8">
                    <IconCard icon={userIcon} title="Patients" result={dashboardStats?.patients.toString() || "NA"} className="flex justify-center pl-4 gap-3 w-[15%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                    <IconCard icon={appointmentIcon} title="Appointments" result={dashboardStats?.appointments.toString() || "NA"} className="flex justify-center pl-4 gap-3 w-[15%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                    <IconCard icon={invoicesIcon} title="Invoices" result={dashboardStats?.invoices.toString() || "NA"} className="flex justify-center pl-4 gap-3 w-[15%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                    <IconCard icon={dollerIcon} title="Total Revenue" result={BaseConstants.doller_symbol + dashboardStats?.totalRevenue.toString() || "NA"} className="flex justify-center pl-4 gap-3 w-[30%] h-[170px] border-2 rounded-lg" iconClassName="w-[45px] h-[45px]" titleClassName="font-semibold text-[#1E252F] text-[15px]" resultClassName="font-semibold text-[#1E252F] text-[22.5px]" />
                </div>
                <div className="flex gap-10">
                    <div className="relative overflow-x-auto w-[50%] border-2 rounded-lg">
                        <div className="w-full h-[64px] flex items-center justify-between p-5 pl-6 bg-[#174B95] text-white">Recent Patients
                            <button className="flex items-center justify-center bg-white w-[35px] h-[35px] gap-2 text-[#E1E6F0] rounded-full" onClick={() => setRefresh(true)}><RefreshIconBlue /></button>
                        </div>
                        <div className="max-h-[427px] overflow-auto">
                            <table className="w-full text-sm text-left rtl:text-right max-h-[400px] overflow-auto">
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
                                    {recentPatients && (showAll ? recentPatients : recentPatients.slice(0, 6)).map((recentPatients) => (
                                        <tr className="bg-white border-b border-gray-200">
                                            <th scope="row" className="px-6 py-4 text-[#333438] font-normal whitespace-nowrap">{recentPatients.name}</th>
                                            <td className="px-6 py-4">{recentPatients.age}</td>
                                            <td className="px-6 py-4">{recentPatients.gender}</td>
                                            <td className="px-6 py-4">{recentPatients.lastVisit}</td>
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
                    <div className="relative border-2 rounded-lg">
                        <AppointmentCalendar />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;