import React, { Component } from 'react';
import JsonData from '../data/characters.json';

class Favorite extends Component {
    constructor(props) {
        super(props);
    }
    UNSAFE_componentDidMount() {
        console.log(JsonData);
    }
    render() {
        console.log(JsonData.splice(10, 10));
        return (
            <div>

            </div>
        );
    }
}

export default Favorite;
