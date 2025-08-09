

interface SidebaarButtonProps {
    name: string;
    icon: string;
    index: number;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
}

const SidebarButton: React.FC<SidebaarButtonProps> = ({ name, icon, index, active, setActive }) => {
    return (
        <>
            <button className={`flex items-center ${active === index ? 'sidebar-active' : ''} pl-6 gap-4 w-full h-full`} onClick={() => setActive(index)}>
                <img className='w-[16px] h-[18   px]' src={icon} alt='' /><span className='text-left'>{name}</span>
            </button>
        </>
    )
}

export default SidebarButton;