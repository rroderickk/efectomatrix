import React from "react"
import "./Navbar1.scss"; //!styles    <====@

const Header1 =()=> { return ( <>

<div className="Nabvar-div-container">NabarContainer

<div className="Nabvar-topnav" id="myTopnav">
  <a href="#home" className="Nabvar-active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <div className="Nabvar-dropdown">
    <button className="Nabvar-dropbtn">Dropdown 
      <i className="Nabvar-fa Navbar-fa-caret-down"></i>
    </button>
    <div className="Nabvar-dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
  <a href="#about">About</a>
  {/* <a href="javascript:void(0);" style="font-size:15px;" className="Nabvar-icon" onclick="myFunction()">&#9776;</a> */}
</div>
</div>
</> ) }; export { Header1 };