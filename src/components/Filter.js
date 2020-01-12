import React,{Component } from 'react';
import Header from './Header';
import SearchList from './SearchList';
export default class Filter extends Component{
    constructor(props){
        super(props);
        this.state={
        }
        console.log(this.props.match.params.keyword);
    }

    render(){
        return(
            <>
            <Header />
            <SearchList keyword={this.props.match.params.keyword} />
            </>
        )
    }
}