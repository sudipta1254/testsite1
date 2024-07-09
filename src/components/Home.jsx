import React from 'react';

const Home = ({ option }) => {
   return (
      <div className="Home center">
         <h4>Welcome to Flight Tracker</h4>
         <h4>{option}</h4>
      </div>
   );
};

export default Home;
