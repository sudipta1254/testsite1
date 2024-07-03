import React from 'react'
import icon1 from "./assets/icon1.png"

const Footer = () => {
   return (
      <footer className='page-footer blue lighten-4 green-text text-darken-2'>
         <div className='footer-main container'>
            <div className="row">
               <div className="col l6 s12 footer-heading">
                  <div className="footer-heading-top">
                     <img src={icon1} alt="app icon" />
                     <h5 className="">Flights - Live flight tracking</h5>
                  </div>
                  <p className="details">Track live flights in your device.</p>
               </div>
               <div className="col l4 offset-l2 s12">
                  <h5 className="">Links</h5>
                  <ul className="">
                     <li><a className="green-text text-darken-2" rel="noreferrer" target="_blank" href="//sudipta1254.github.io/linkline">Sudipto</a></li>
                     <li><a className="green-text text-darken-2" rel="noreferrer" target="_blank" href="//airlabs.co">Airlabs.co</a></li>
                     <li><a className="green-text text-darken-2" rel="noreferrer" target="_blank" href="//github.com/sudipta1254/flights">Project on GitHub</a></li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="footer-copyright">
            <div className="container green-text text-darken-2 center">
               © { new Date().getFullYear() } Copyright
            </div>
         </div>
      </footer>
   );
}

export default Footer;
