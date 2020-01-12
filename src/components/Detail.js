import React, { Component } from 'react'
import Header from './Header';
import Hero from './Hero';

export default class Detail extends Component {
    render() {
        let heroId = this.props.match.params.heroId;
        return (
            <div className="container-fluid p-0" >
              <Header />
              <Hero id={heroId}/>
            </div>
        )
    }
}
