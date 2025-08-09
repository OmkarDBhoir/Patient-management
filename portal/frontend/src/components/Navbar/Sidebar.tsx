import logo from '../../assets/logo.png';
import doctor_profile from '../../assets/doctor_profile.png'
import divider from '../../assets/divider.png'
import sidebar_background from '../../assets/sidebar-background.png'
import SidebarButton from '../Buttons/SidebarButton';
import { SidebarProps } from '../../pojos/NavbarPojos';

const Sidebar: React.FC<SidebarProps> = ({ name, role, active, setActive, navList }) => {
    return (
        <>
            <div className="flex flex-col items-between" style={{ width: "285px", background: `url(${sidebar_background})` }}>
                <div className='h-full flex flex-col'>
                    <div className="header flex items-center pl-8 h-[99px] gap-3">
                        <img className='w-10 h-10' src={logo} alt="" />
                        <div className='flex flex-col'>
                            <span style={{ fontSize: "18px", color: "#21325B" }}>Patient</span>
                            <span style={{ fontSize: "15px", color: "#51617E" }}>Management</span>
                        </div>
                    </div>
                    <div className="w-full">
                        <ul className="flex flex-col cursor-pointer">
                            {navList && navList.map((nav, index) => (
                                <li className={`flex items-center justify-center w-[267px] h-[50px] pl-3 pr-3`}>
                                    <SidebarButton name={nav.name} icon={nav.icon} active={active} setActive={setActive} index={index} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='profile w-full h-[99px]'>
                    <img src={divider} alt="" />
                    <div className='flex p-4 pl-6 gap-3'>
                        <img src={doctor_profile} alt="" className='w-[56px] h-[56px]' />
                        <div className='flex flex-col'>
                            <span className='profile-name' style={{ fontSize: "16px" }}>{name}</span>
                            <span className='profile-role' style={{ fontSize: "12px" }}>{role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;