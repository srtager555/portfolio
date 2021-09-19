import React, { useEffect, useState, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./css/index.css";
import "./css/menu.css"

const date = new Date();

const Logo = () => (
  <NavLink
    exact
    strict
    to="/"
    style={{
      fontSize: "38px",
      fontWeight: "300",
      textDecoration: "none",
      color: "#202124",
    }}
  >
    &&
  </NavLink>
);

export const Navbar = () => {
  const days = ["Dom", "Lun", "Mar", "Mier", "Jue", "Vie", "Sab"];
  const month = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];
  const [toggleMenu, setToggleMenu] = useState({active: '',})
  const HanddleToggleClassMenu = () => {
    if(toggleMenu.active === '') {
      setToggleMenu({active: 'active'})
    } else {
      setToggleMenu({active: ''})
    }
  }

  const [dateTime, setDateTime] = useState({
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  });
  const [dateDay, setDateDay] = useState({
    day: date.getDay(),
    numberDay: date.getDate(),
    month: date.getMonth(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const date = new Date();
      setDateTime({
        hours: date.getHours(),
        minutes: date.getMinutes(),
        seconds: date.getSeconds(),
      });
      setDateDay({
        day: date.getDay(),
        numberDay: date.getDate(),
        month: date.getMonth(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <Fragment>
      <nav>
        <div className="line line-1"></div>
        <div className="line line-2"></div>

        <div className="container corner logo">
          <Logo />
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
          <button onClick={HanddleToggleClassMenu} className={`navBx ${toggleMenu.active}`}>
            <div className="nav line-1"></div>
            <div className="nav line-2"></div>
            <div className="nav line-3"></div>
          </button>
        </div>
      </nav>
      <nav className={`menu-toggle ${toggleMenu.active}`}>
        <div className="menu">
          <NavLink className="link link-1 link-bx" exact to="/" activeClassName='active'>
            Home
          </NavLink>
          <NavLink className="link link-2 link-bx" exact to="/projects" activeClassName='active'>
            Projects
          </NavLink>
        </div>
        <div className="copyright">
          <div className="container container-1">
            <div className="link link-bx">
              <Logo />
            </div>
            <div className="link link-bigBx">
              <span>Copyright &copy; Carlos && Ponce</span>
            </div>
          </div>
          <div className="container container-2">
            <div className="link link-bx">
              <span>
                 <Logo />
              </span>
            </div>
            <div className="link link-bigBx">
              <span>
                The character Ahri is from the Riot Games &copy; company.
              </span>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
