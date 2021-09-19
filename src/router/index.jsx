import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";
import "./css/index.css"

export const App = () => {
   return (
       <Fragment>
            <BrowserRouter>
                <Layout /> 
                <div className="container__master">
                    <div className="container__master-overflow">
                     <Route path='/' component={Home} />
                    </div>
                </div>
            </BrowserRouter>
       </Fragment>
    )
}
