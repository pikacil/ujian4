import React, { Component } from 'react';
import {
  Link
} from "react-router-dom";
class Header extends Component {

   constructor(props) {
   super(props);
   
   }
   
   
   
   
    render() {
       console.log("Render"+ this.props.linkStatus[2])
        return (
          <div class="main-menu" id="main-menu">
          <ul class="main-menu-list">
          <li> <Link  to="/home">Home</Link></li>
            <li> <Link  to="/resume">Resume</Link></li>
            <li> <Link  to="/skills">Skills</Link></li>
            <li> <Link  to="/portofolio">Portofolio</Link></li>
            <li> <Link  to="/blog">Blog</Link></li>
            <li> <Link  to="/contact">Contact</Link></li>
          </ul>
        </div>


        );
    }
}

export default Header;