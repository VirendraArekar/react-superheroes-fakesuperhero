import React, { Component } from 'react';
import Sidebar from './Sidebar.js';
import CharacterList from './CharacterList';

class Content extends Component {
    render() {
        return (
            <div className="row pb-5">
                <Sidebar />
                <CharacterList />
            </div>
        );
    }
}

export default Content;
