import React from 'react'
import icon1 from "./assets/icon1.png"
import { Link, BrowserRouter as Router } from "react-router-dom"

const flex = {display:"flex",alignItems:"center",justifyContent:"space-between"};

const Header = () => {
   return (
      <Router>
         <header className='header blue lighten-4 green-text text-darken-2' style={flex}>
            <div className="app-logo-text">
               <img src={icon1} alt="app logo" />
               <p><a href="/">Flights</a></p>
            </div>
            <div>
               <a href='#!' data-target="slide-nav" className="sidenav-trigger">
                  <i className="material-icons green-text text-lighten-1">menu</i>
               </a>
            </div>
            <ul className="sidenav" id="slide-nav">
               <li><a className="subheader" href="#!">Main options</a></li>
               <li><a className="" href="/">Realtime</a></li>
               <li><a className="" href="/info">Information</a></li>
            </ul>
         </header>
      </Router>
   );
}

export default Header;
