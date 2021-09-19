import React, {Fragment} from "react" 
import "./homeCSS/style.css"

export const Home = () => {
    return(
        <Fragment>
            <div className="home-bg"></div>
            <div className="container__home">
                <div className="container__route container__route-title">
                    <span>
                        I'm a Front-End developer
                    </span>    
                </div>
                <button className="container__route container__route-show">
                    <span>
                        Who are you?
                    </span>    
                </button>
                <div className="container__route container__route-name">
                    <span>
                        Carlos Ponce
                    </span>    
                </div>
            </div>
        </Fragment>
    )
}