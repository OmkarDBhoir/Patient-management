import { useState } from 'react';
import whitePlusIcon from '../../assets/white-plus.png';
import SimpleCard from '../Cards/SimpleCard';

interface AppontmentDtls {
    todaysCount: string;
    upcomingCount: string;
    awaitingCount: string;
}

const Appointment: React.FC = () => {
    const [appointmentDtls, setAppointmentDtls] = useState<AppontmentDtls | undefined>({
        todaysCount: "7",
        upcomingCount: "18",
        awaitingCount: "2"
    })
    return (
        <>
            <div className="flex flex-col pt-0 px-4 gap-5">
                <div className="flex flex-row justify-between w-full">
                    <SimpleCard title="Today's Appointments" result={appointmentDtls?.todaysCount || "NA"} className='w-[25%] h-[100px] border-2 p-2 gap-2' titleClassName="font-normal text-[#1E252F] text-[15px]" resultClassName="font-normal text-[#1E252F] text-[22.5px]" />
                    <SimpleCard title="Upcoming Appointments" result={appointmentDtls?.upcomingCount || "NA"} className='w-[25%] h-[100px] border-2 p-2 gap-2' titleClassName="font-normal text-[#1E252F] text-[15px]" resultClassName="font-normal text-[#1E252F] text-[22.5px]" />
                    <SimpleCard title="Awaiting Appointments" result={appointmentDtls?.awaitingCount || "NA"} className='w-[25%] h-[100px] border-2 p-2 gap-2' titleClassName="font-normal text-[#1E252F] text-[15px]" resultClassName="font-normal text-[#1E252F] text-[22.5px]" />
                    <button className="flex items-center justify-center bg-blue-800 w-[200px] h-[40px] gap-2 text-[#E1E6F0]"><img className='w-[16px] h-[16px]' src={whitePlusIcon} alt="" /> Add Patient</button>
                </div>
            </div>
        </>
    )
}

export default Appointment;