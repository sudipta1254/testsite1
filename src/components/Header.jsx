import React from 'react'
import icon1 from "./images/icon1.png"

const Header = () => {
   return (
      <header className='header blue lighten-4 green-text text-darken-2' style={{display:"flex"}}>
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
            <li><a href="sass.html">Sass</a></li>
            <li><a href="badges.html">Components</a></li>
         </ul>
      </header>
   );
}
 
export default Header;