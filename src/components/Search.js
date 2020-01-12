import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            keyword : ''
        }
    }

    handleChange = (e) => {
        
        this.setState({ keyword: e.target.value });
    }

    doSearch = () => {
        console.log('hello');
        console.log(this.state.keyword);
        if (this.state.keyword !== '')
        {
            this.props.history.push(`/search/${this.state.keyword}`);
        }
    }

    render() {
        return (
            <div className="form-inline my-2 my-lg-0">
                <input value={this.state.value} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" size="65" onChange={this.handleChange}/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.doSearch}>Search</button>
            </div>
        );
    }
}

export default withRouter(Search);
