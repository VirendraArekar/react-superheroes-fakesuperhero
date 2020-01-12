import React, { Component } from 'react';
import Header from './Header.js';
import Carosoul from './Carosoul.js';
import Content from './Content.js';
import { BrowserRouter as Router,withRouter } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div className="container-fluid p-0 " >
                <Router>
              <Header />
              <Carosoul />
                    <Content />
                    </Router>
            </div>
        );
    }
}

export default Home;
