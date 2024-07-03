import React from 'react'
import { useParams } from 'react-router-dom';

const Information = () => {
   const { id } = useParams();
   id && console.log(id)

   return (
      <div className="Information center">
         <h1>Information - { id }</h1>
      </div>
   );
}
 
export default Information;