import React from 'react';
import { Routes, Route } from 'react-router-dom';
import OptionsRealtime from './OptionsRealtime';
import OptionsInformation from './OptionsInformation';
import NotFound from './NotFound';
import Realtime from './Realtime';
import Information from './Information';

const Main = () => {
  return (
    <div className="Main">
      <div className='container'>
         <Routes>
            <Route exact path="/"
            element={
               <>
                  <OptionsRealtime />
                  <Realtime />
               </>
            }
            />
            <Route exact path="/info"
            element={
               <>
                  <OptionsInformation />
                  <Information />
               </>
            }
            />
            <Route exact path="/:id"
            element={
               <>
                  <OptionsRealtime />
                  <Realtime />
               </>
            }
            />
            <Route exact path="/info/:id"
            element={
               <>
                  <OptionsInformation />
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
