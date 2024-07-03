import React from 'react';
import Main from './Main';
import Footer from './Footer';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;