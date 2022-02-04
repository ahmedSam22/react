import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";



export default function Navbar() {
  return (

<ul className="nav justify-content-center">
  <li className="nav-item">
    <Link to="/">Home</Link>
  </li>
  <li className="nav-item">
   <Link to="/movies">Movies</Link>

  </li>
  <li className="nav-item">
    <Link to="/about">About</Link>
  </li>
 
</ul>

  );
}


function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
