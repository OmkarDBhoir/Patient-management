export interface navs {
    name: string;
    icon: string;
}


export interface SidebarProps {
    name: string;
    role: string;
    active: number;
    setActive: React.Dispatch<React.SetStateAction<number>>;
    navList: navs[];
}
