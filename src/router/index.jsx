import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Layout } from "../layout";
import { Home } from "../pages/home";

export const App = () => {
   return (
       <Fragment>
            <BrowserRouter>
                <Layout /> 
                <Route path='/' component={Home} />
            </BrowserRouter>
       </Fragment>
    )
}
