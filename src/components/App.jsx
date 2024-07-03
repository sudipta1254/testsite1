import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
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
