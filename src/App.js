import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageTransition } from '@steveeeie/react-page-transition';

import Navigation from './components/Navigation';
import Home from './components/Home';
import Menu from './components/Menu';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.css';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
              <Navigation />
              <Route
                render={({ location }) => {
                  return (
                    <PageTransition
                      preset="moveToLeftFromRight"
                      transitionKey={location.pathname}
                    >
                      <Switch location={location}>
                        <Route exact path="/" component={() => <Home />} />
                        <Route exact path="/menu" component={() => <Menu />} />
                        <Route exact path="/contact" component={() => <Contact />} />
                      </Switch>
                    </PageTransition>
                  );
                }}
              />
              <Footer />
            </BrowserRouter>
        );
    }
}

export default App;
