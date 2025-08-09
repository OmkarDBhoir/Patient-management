import { TopNavbarProps } from "../../pojos/NavbarPojos";
import search from '../../assets/search.png'

const TopNavbar: React.FC<TopNavbarProps> = ({ title, profileIcon }) => {
    return (
        <>
            <div className="flex h-[99px] items-center justify-between p-4">
                <h1 style={{ fontSize: "24px", fontWeight: 'bold', color: '#161C25' }}>{title}</h1>
                <div className="flex gap-8">
                    <div className="searchbar border-2 rounded" style={{ position: 'relative' }}>
                        <img src={search} alt="" style={{ position: 'absolute', width: "15px", top: 10, left: 10 }} />
                        <input type="text" placeholder="search" className="pl-8 placeholder-[#394255]" style={{ height: "35px" }} />
                    </div>
                    <div className="profile">
                        <img src={profileIcon} alt="" className="w-[40px] h-[40px]" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavbar;