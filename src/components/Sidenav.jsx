import React from 'react';
import icon1 from "./images/icon1.png"
import { Navbar, NavItem, Icon } from 'react-materialize'; // Import react-materialize components

const Sidenav = () => {
   return (
      <Navbar
         brand={<img src={icon1} alt="app logo" />} // Replace with your app logo
         className="blue lighten-4 green-text text-darken-2"
         alignLinks="right"
         menuIcon={<Icon>menu</Icon>}
      >
         <NavItem href="sass.html">Sass</NavItem>
         <NavItem href="badges.html">Components</NavItem>
         <NavItem href="collapsible.html">Javascript</NavItem>
         <NavItem href="mobile.html">Mobile</NavItem>
      </Navbar>
   );
};

export default Sidenav;
