import React from 'react'
import { useParams } from 'react-router-dom';


const Realtime = () => {
   const { id } = useParams();
   id && console.log(id)

   return (
      <div className="Realtime center">
         <h1>Realtime - { id }</h1>
      </div>
   );
}
 
export default Realtime;