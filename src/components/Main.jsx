import React from 'react';
import OptionsRealtime from './OptionsRealtime';
import OptionsInformation from "./OptionsInformation"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from './NotFound';
import Realtime from "./Realtime";
import Information from "./Information";

const Main = () => {
   return (
      <div className="Main">
         <div className='container'>
            <Router>
               <Switch>
                  <Route exact path="/">
                     <OptionsRealtime />
                     <Realtime />
                  </Route>
                  <Route exact path="/info">
                     <OptionsInformation />
                     <Information />
                  </Route>
                  <Route exact path="/:id">
                     <OptionsRealtime />
                     <Realtime />
                  </Route>
                  <Route exact path="/info/:id">
                     <OptionsInformation />
                     <Information />
                  </Route>
                  <Route path="*">
                     <NotFound />
                  </Route>
               </Switch>
            </Router>
         </div>
      </div>
   );
}

export default Main;