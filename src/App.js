import React, { Component } from "react";
import Header from "./component/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Resume from "./component/Resume";
import Skills from "./component/Skills";
import Portofolio from "./component/Portofolio";
import Blog from "./component/Blog";
import Contact from "./component/Contact";
import Awal from "./component/Awal";
export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { linkStatus: [] };
  }

  updateLinkStatus = (status) => {
    this.setState({ linkStatus: status });
  };
  render() {
    return (
      <Router>
        <div>
        <section id="body" class="">
          <div className="container" style={{ marginLeft : '0' }}>
             <Header linkStatus={this.state.linkStatus} />
         
             
        <Awal />
          <Switch>
          <Route path="/home">
                <Awal />     
            </Route>
            <Route path="/resume">
                <Resume />     
            </Route>
            <Route path="/skills">
                <Skills />     
            </Route>
            <Route path="/portofolio">
                <Portofolio />     
            </Route>
            <Route path="/blog">
                <Blog />     
            </Route>
            <Route path="/contact">
                <Contact />     
            </Route>
          </Switch>

          

         
        </div>
        </section>
        </div>
      </Router>
    );
  }
}
