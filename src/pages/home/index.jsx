import React from "react" 
import "./homeCSS/style.css"

export const Home = () => {
    return(
        <div style={{
            marginTop: '100px',
        }}>
            <div className="home-bg"></div>
            <div className="container container-title">
                <span>
                    I'm a Front-End developer
                </span>    
            </div>
            <button className="container container-show">
                <span>
                    Who are you?
                </span>    
            </button>
            <div className="container container-name">
                <span>
                    Carlos Ponce
                </span>    
            </div>
        </div>
    )
}