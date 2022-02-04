import logo from './logo.svg';
import React, { useState } from "react";

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/home/home';
import Movies from './components/movies/movies';
import SingleMovie from './components/single-movie/single-movie';
import Favourite from './components/favorite/favorite'
import { LanguageContext } from "./context/languageContext";


function App() {
  const [contextLanguage, setContextLanguage] = useState('en-US')
  return (
    
    <div className="App">
          <LanguageContext.Provider value={{ contextLanguage, setContextLanguage }}>

<Router>
    <ul className="nav offset-md-3 justify-content-between ">
  <li className="nav-item">
   <Link to="/movies">Movies</Link>
  </li>
  <li className="nav-item">
    <Link to="/favorites">favorites</Link>
  </li>
 
</ul>


        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movies">
            <Movies />
          </Route>
       
        </Switch>
        <Route exact path="/OneMovie/:id">
            <SingleMovie />
          </Route>
          <Route exact path="/favorites">
            <Favourite />
          </Route>
    </Router>
    </LanguageContext.Provider>
    </div>
  );
}

export default App;
