// components/AppointmentCalendar.tsx
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

const AppointmentCalendar: React.FC = () => {
    const [selectedDay, setSelectedDay] = useState<Date | undefined>(new Date());

    const appointments: { [date: string]: { time: string; name: string }[] } = {
        "2025-08-10": [{ time: "9:00 AM", name: "Jacob Jones" }],
    };

    const selectedDateKey = selectedDay ? format(selectedDay, "yyyy-MM-dd") : "";
    const todayAppointments = appointments[selectedDateKey] || [];

    return (
        <>
            <div className="bg-white rounded-xl shadow p-4 w-full">
                <h2 className="text-lg font-semibold mb-2">Appointment</h2>
                <DayPicker
                    mode="single"
                    selected={selectedDay}
                    onSelect={setSelectedDay}
                    showOutsideDays
                    fixedWeeks
                    className="custom-calendar"
                    styles={{
                        caption: { textAlign: "center", fontWeight: 400, marginBottom: "1rem" },
                        day: { borderRadius: "999px", height: "36px", width: "36px" },

                    }}
                />

                <div className="border-t pt-3 mt-3">
                    <h3 className="text-sm font-semibold mb-1">Today Appointment</h3>
                    {todayAppointments && todayAppointments.length > 0 ?
                        todayAppointments.map((appointment, index) => (
                            <p key={index} className="text-sm text-gray-600">{appointment.time} {appointment.name}</p>
                        )) :
                        <p className="text-sm text-gray-400">No appointments</p>}
                </div>
            </div>
        </>
    )
}


export default AppointmentCalendar;