import React, { useEffect } from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import M from "materialize-css";
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  useEffect(() => { M.AutoInit() }, []);  /* Auto initialize materialize css */

  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;