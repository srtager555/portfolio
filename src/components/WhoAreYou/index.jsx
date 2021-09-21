import React, {useState} from "react";
import "./css/index.css"

export function WhoAreYou (props){
    const [ahriStyle, setAhriStyle] = useState('')  
    React.useEffect(()=>{
        props.activeShow ? setTimeout(()=>{setAhriStyle('sec_1')}, 2000) : setAhriStyle('')
    })
    
    return(
        <div className={`show__container ${props.show}`}>
            <div onClick={props.fn}  className={`close-show ${props.bgShow}`}>
                <div className="line line-1"></div>
                <div className="line line-2"></div>
            </div>
            <div className={`background-transition ${props.bgShow}`}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`Ahri Ahri-kda ${props.activeAhri} ${ahriStyle}`}>
                <div className="glass"></div>
                <div className="Ahri-image"></div>
            </div>
            <div className={`Ahri Ahri-bosque ${props.activeAhri} ${ahriStyle}`}>
                <div className="glass"></div>
                <div className="Ahri-image"></div>
            </div>
            <div className={`Ahri Ahri-flor ${props.activeAhri} ${ahriStyle}`}>
                <div className="glass"></div>
                <div className="Ahri-image"></div>
            </div>
            <div className={`Ahri Ahri-coven ${props.activeAhri} ${ahriStyle}`}>
                <div className="glass"></div>
                <div className="Ahri-image"></div>
            </div>
            <div className="bg-text">
                <div className="bg-light"></div>
                <div className="bg-triangle__1"></div>
                <div className="bg-triangle__2"></div>
            </div>
            {

            }
            <div className="slide-buttom">
                <div></div>
            </div>
        </div>
    )
}