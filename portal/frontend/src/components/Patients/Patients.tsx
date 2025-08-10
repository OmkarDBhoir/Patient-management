import { useState } from 'react';
import whitePlusIcon from '../../assets/white-plus.png';
import { patientsDtls } from '../../pojos/Dashboard.pojos';

const Patients: React.FC = () => {
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
    return (
        <>
            <div className="flex flex-col pt-0 px-4 gap-5">
                <div className="flex flex-row-reverse">
                    <button className="flex items-center justify-center bg-blue-800 w-[200px] h-[40px] gap-2 text-[#E1E6F0]"><img className='w-[16px] h-[16px]' src={whitePlusIcon} alt="" /> Add Patient</button>
                </div>
                <div className='relative overflow-x-auto border-2 rounded-lg'>
                    <table className="w-full text-sm text-left rtl:text-right max-h-[320px] overflow-auto">
                        <thead className="text-[#333438] font-normal bg-gray-50 text-[15px]">
                            <tr className="bg-white border-b border-gray-200">
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
                            {patients && patients.map((patient) => (
                                <tr className="bg-white border-b border-gray-200">
                                    <th scope="row" className="px-6 py-4 text-[#333438] font-normal whitespace-nowrap">{patient.name}</th>
                                    <td className="px-6 py-4">{patient.age}</td>
                                    <td className="px-6 py-4">{patient.gender}</td>
                                    <td className="px-6 py-4">{patient.lastVisit}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Patients;