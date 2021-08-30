import './css/App.css';
import React from "react"
import Home from './pages/home';


function App() {
  return (
    <React.Fragment>
      <div className="nav">
        <button class="nav" type="button">
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
        <div className="title">
          <h1>Carlos Ponce</h1>
        </div>
        <button className="nav" type="button">
          <div className="menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </button>
      </div>
      <div className="lineNav-1"></div>
      <div className="lineNav-2"></div>
      <div className="lineNav-3"></div>

      <div className="body_information">
         <Home comnponent={Home}/>
      </div>
    </React.Fragment>
  );
}

export default App;
