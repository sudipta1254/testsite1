import React from 'react'
import icon1 from "./assets/icon1.png"
import { Link } from "react-router-dom"

const flex = {display:"flex",alignItems:"center",justifyContent:"space-between"};

const Header = () => {
   return (
      <header className='header blue lighten-4 green-text text-darken-2' style={flex}>
         <div className="app-logo-text">
            <img src={icon1} alt="app logo" />
            <p>Flights</p>
         </div>
         <div>
            <a href='#!' data-target="slide-nav" className="sidenav-trigger">
               <i className="material-icons green-text text-lighten-1">menu</i>
            </a>
         </div>
         <ul className="sidenav" id="slide-nav">
            <li><a className="subheader" href="#!">Main options</a></li>
            <li><Link className="" to="/">Realtime</Link></li>
            <li><Link className="" to="/info">Information</Link></li>
         </ul>
      </header>
   );
}
 
export default Header;