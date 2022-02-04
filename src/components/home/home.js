import React from "react";
import './home.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Home() {
  return (

<div>
    
  <span className="welcome">
    أهلاً 
  </span>
  <hr></hr>
  <span className="subwelcome">
    اتفضّل.
  </span>

  <Link to="/movies">من هنا </Link>
  

</div>
  );
}


