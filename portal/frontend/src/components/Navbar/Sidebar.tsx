

const Sidebar: React.FC = () => {
    return (
        <>
            <div className="flex border-r-4" style={{ width: "25%" }}>
                <div className="w-full">
                    <ul className="flex flex-col border-2 p-4 gap-8 border-2">
                        <li>Dashboard</li>
                        <li>Patients</li>
                        <li>Appointments</li>
                        <li>Billing</li>
                        <li>Reports</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar;