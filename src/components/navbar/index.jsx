import React, { useEffect, useState } from "react";
import './css/index.css'

const date = new Date();
export const Navbar = () => {
    const days = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', ]
    const month = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic' ]

    const [dateTime, setDateTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds()
    });
    const [dateDay, setDateDay] = useState({
        day: date.getDay(),
        numberDay: date.getDate(),
        month: date.getMonth(),
    })

    useEffect(() => {
    const timer = setInterval(() => {
        const date = new Date();
        setDateTime({
            hours: date.getHours(),
            minutes: date.getMinutes(),
            seconds: date.getSeconds()
        });
        setDateDay({
            day: date.getDay(),
            numberDay: date.getDate(),
            month: date.getMonth()
        })
    }, 1000);
    return () => clearInterval(timer);
    }, []);


    return(
        <nav>
            <div className="line line-1"></div>
            <div className="line line-2"></div>

            <div className="container corner logo">
                <span>&&</span>
            </div>
            <div className="container time">
                <span className="time">
                    {dateTime.hours}; {dateTime.minutes}: {dateTime.seconds}
                </span>
                <span className="date">
                    {days[dateDay.day]} {dateDay.numberDay} {month[dateDay.month]}.
                </span>
            </div>
            <div className="container corner navbar">
                <div className="navBx">
                    <div className="nav line-1"></div>
                    <div className="nav line-2"></div>
                    <div className="nav line-3"></div>
                </div>
            </div>
        </nav>
    )
} 