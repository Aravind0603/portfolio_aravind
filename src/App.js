import React from 'react';
import Header from './components/Header/Header';
import Projectcontainer from './components/Projectcontainer/Projectcontainer';
import Skillcontainer from './components/Skillcontainer/Skillcontainer';
import Topcontainer from './components/Topcontainer/Topcontainer';
import "./App.css";
import Contact from './components/Contact/Contact';

const App = () => {
  return (
    <div>
    <Header/>
    <Topcontainer/>
    <Skillcontainer/>
    <Projectcontainer/>
    <Contact/>
    </div>
  )
}

export default App