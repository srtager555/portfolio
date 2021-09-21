import React, { Fragment, useState } from "react"
import ReactDOM from 'react-dom' 
import "./homeCSS/style.css"
import { WhoAreYou } from "../../components/WhoAreYou"


export const Home = () => {
    const [activeShow, setActiveShow] = useState(false)
    const [activeAhri, setActiveAhri] = useState('')
    const [showText, setShowText] = useState('Who are you?')
    const [show, setShow] = useState('')
    const [bgShow, setBgShow] = useState('')

    const haddleShowMe = () => {
        if(activeShow) {
            setActiveShow(false)     
            setShowText('Who are you?')
            setTimeout(()=>{
                setBgShow('')
            }, 1500)
            setTimeout(()=> {
                setShow('')
            }, 2000)
            setTimeout(()=>{
                setActiveAhri('')
            }, 200)
        } else {
            setActiveShow(true)
            setShowText(':)')
            setShow('active')
            setTimeout(()=>{
                setBgShow('active')
            }, 100)
            setTimeout(()=>{
                setActiveAhri('active')
            }, 1000)
        }
    }
    return(
        <Fragment>
            <div className="home-bg"></div>
            <div className="container__home">
                <div className="container__route container__route-title">
                    <span>
                        I'm a Front-End developer
                    </span>    
                </div>
                <button onClick={haddleShowMe} className="container__route container__route-show">
                    <span>
                        {showText}
                    </span>    
                </button>
                <div className="container__route container__route-name">
                    <span>
                        Carlos Ponce
                    </span>    
                </div>
            </div>
            {ReactDOM.createPortal(
                <WhoAreYou 
                    activeShow={activeShow}
                    activeAhri={activeAhri}
                    showText={showText}
                    show={show}
                    bgShow={bgShow}
                    fn={haddleShowMe}
                />, 
                document.querySelector('#module-root'))}
        </Fragment>
    )
}