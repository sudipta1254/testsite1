import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import OptionsRealtime from './options/OptionsRealtime';
import OptionsInformation from './options/OptionsInformation';
import NotFound from './NotFound';
import Realtime from "./Realtime"
import Information from './Information';
import Chart from "./helper/Chart"
import GenAI from './helper/GenAI';

const Main = () => {
   const [inpRealtime, setInpRealtime] = useState(null)
   const [inpInformation, setInpInformation] = useState(null)

   return (
      <div className="Main">
         <div className='container'>
            <Routes>
               <Route exact path="/"
               element={
                  <>
                     <OptionsRealtime inpRealtime={inpRealtime} setInpRealtime={setInpRealtime} />
                     <Home option="realtime" />
                  </>
               }
               />
               <Route exact path="/info"
               element={
                  <>
                     <OptionsInformation inpInformation={inpInformation} setInpInformation={setInpInformation} />
                     <Home option="information" />
                  </>
               }
               />
               <Route exact path="/genai"
               element={
                  <>
                     <GenAI />
                  </>
               }
               />
               <Route exact path="/chart/:id"
               element={
                  <Chart />
               }
               />
               <Route exact path="/:id"
               element={
                  <>
                     <OptionsRealtime inpRealtime={inpRealtime} setInpRealtime={setInpRealtime} />
                     <Realtime />
                  </>
               }
               />
               <Route exact path="/info/:id"
               element={
                  <>
                     <OptionsInformation inpInformation={inpInformation} setInpInformation={setInpInformation} />
                     <Information />
                  </>
               }
               />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </div>
      </div>
   );
};

export default Main;
