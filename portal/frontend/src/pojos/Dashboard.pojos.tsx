

export interface CardType {
    icon: string;
    title: string;
    result: string;
    className?: string;
    iconClassName?: string;
    titleClassName?: string;
    resultClassName?: string;
    style?: React.CSSProperties | undefined
}

export interface Stats {
    patients: number;
    appointments: number;
    invoices: number;
    totalRevenue: number;
}


export interface patientsDtls {
    name: string;
    age: string;
    gender: string;
    lastVisit: string;
}