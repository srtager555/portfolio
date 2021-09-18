import React from "react"
import { NavLink } from 'react-router-dom' 
import "./homeCSS/style.css"

export const Home = () => {
    return(
        <div className="container" style={{
            marginTop: '100px',
        }}>
            {/* <div className="home-bg"></div> */}
            <NavLink to="/">Home</NavLink>
            <NavLink to="/asd">AAA</NavLink>
        </div>
    )
}