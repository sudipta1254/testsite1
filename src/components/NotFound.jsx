import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
   return (
      <div className="NotFound">
         <h1>404 - Not found</h1>
         <Link to="/">Back to the homepage...</Link>
      </div>
   );
}
 
export default NotFound;