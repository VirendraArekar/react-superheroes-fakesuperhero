import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadCharacters } from '../actions';
import { bindActionCreators } from 'redux';
import { BASE_URL } from '../constants';
import axios from 'axios';
import Rating from 'react-rating';
import { DotLoader } from "react-spinners";
import {Switch,Route,Link,useRouteMatch,useParams} from "react-router-dom";
import '../assets/css/CharacterList.css';

class CharacterList extends Component {
    constructor(props) {
      super(props);
      
      this.state = {
          thumb: [],
          page: 1,
          limit: 12,
          start:1
      }
      this.props.LoadCharacters(1,1,12);
    }

    getImage = (id) => {
    axios.defaults.baseURL = `${BASE_URL}`;
    axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    return new Promise((resolve, reject) => {
        axios.get(`${BASE_URL}${id}`)
            .then(response => {
                return resolve({ image: response.data.image.url, strength: (response.data.powerstats.strength/200) * 10 });
            })
            .catch(error => {
                return reject('error');
            })
        })
    }

    async componentDidMount() {
       
    }

    async componentWillReceiveProps(nextProps) {  
        if (nextProps.characters !== '') {
        axios.defaults.baseURL = `${BASE_URL}`;
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        let finalChar = [];
        const char = nextProps.characters;
        console.log('char');
        console.log(char);
        console.log(char.length);
        if (char.length > 0) {
            console.log('success');
            var i = 0;
            for (i = 0; i < char.length; i++){
                await this.getImage(char[i].id).then((url) => {
                      finalChar.push({ id: char[i].id, name: char[i].name, image: url.image,strength:url.strength });
                 })
            }
        }
        this.setState({ thumb: finalChar });
        }
        
    }

     isArray = function(a) {
        return (!!a) && (a.constructor === Array);
    };

    isObject = function(a) {
    return (!!a) && (a.constructor === Object);
    };

    prev = (numberOfPages) => {

        this.setState({ thumb : [],page: this.state.page - 1, start: this.state.start - 11 });
        this.props.LoadCharacters(this.state.page - 1, this.state.start - 11, this.state.limit);
    }

    next = (numberOfPages) => {
        this.setState({ thumb : [],page: this.state.page + 1, start: this.state.start + 11 });
        this.props.LoadCharacters(this.state.page + 1, this.state.start + 11, this.state.limit);
    
    }

    pagination(){
        let numberOfPages = Math.ceil(this.props.count / 12);
        var prev = this.state.page !== 1 ? true : false;
        var next = this.state.page !== numberOfPages ? true : false;
        var cond = numberOfPages > 0 ? true : false;
        return (
            <div className="row">
                
            <div className="col-md-12">
                <div className="float-right">
                    { prev && cond ?
                      (<button type="submit" className="btn btn-dark btn-lg" onClick={() => this.props.LoadCharacters(this.state.page - 1, this.state.start - 12, this.state.limit)}><i className="fa fa-arrow-left"></i> Previous</button>) : null
                    } 
                    { next && cond ?
                       (<button type="submit" className="btn btn-dark btn-lg" onClick={() => this.props.LoadCharacters(this.state.page + 1,this.state.start+12,this.state.limit)}><i className="fa fa-arrow-right"></i> next</button>) : null
                    }
                </div>
            </div>
        </div>
       )
    }

    render() {
        const { thumb } = this.state;
        let numberOfPages = Math.ceil(this.props.count / 12);
         var prev = this.state.page !== 1 ? true : false;
        var next = this.state.page !== numberOfPages ? true : false;
        var characterCard;
        var load = thumb.length > 0 ? false : true;
        if (thumb.length > 0) {
        characterCard  = thumb.map((item, index) => {
        return (
                <div className="col-md-3 col-sm-4 col-xs-12 p-4 m-0" key={index}>
                    <div className="product-box" >
                        <Link to={`/hero/${item.id}`} style={{ textDecoration: 'none' }}>
                            <img src={item.image } width="100%" height="300px" style={{ borderRadius: "8px" }} />
                        <div className="text-center">
                            <p className="text-center mt-2 p-0 mb-0">{item.name}</p>
                            <p className="text-center">
                                <Rating
                                    initialRating={item.strength}
                                    readonly
                                    emptySymbol="fa fa-star-o fa-2x"
                                    fullSymbol="fa fa-star fa-2x"
                                    fractions={2}
                                />
                            </p>
                        </div>
                        </Link>
                    </div>
                </div>
             );
         });
        }
   
        return (
            <div className="col-md-10 col-sm-12 mt-3">
                <h4 className="text-center text-muted" style={{width:'100%',textAlign:'center',borderBottom:'1px solid lightgray',lineHeight:'0.1em',margin:'10px 0 20px'}}><span style={{background:'#ffffff',paddingLeft:0,paddingRight:0,paddingTop:10,paddingBottom:10}}>*** PRODUCTS ***</span></h4>
                <div className="row justify-content-center">
                    {
                        load ?
                            <div className="sweet-loading mt-5" style={{paddingTop:"10%"}}>
                                <DotLoader
                                css={"display: block;margin: 0 auto;border-color: red"}
                                size={150}
                                //size={"150px"} this also works
                                color={"#343a40"}
                                loading={true}
                                /><br/>
                                <h4>Loading....</h4>
                            </div>  : null
                            
                    }
                    {characterCard}
                    {characterCard ?
                        <div className="row">
                            <div className="col-md-12 mt-5">
                                <div className="text-right">
                                    {prev ?
                                        <button type="submit" className="btn btn-dark" onClick={() => this.prev(numberOfPages)} style={{ marginRight: 20 }}>Previous </button> : null
                                    }
                                    {next ?
                                        <button type="submit" className="btn btn-dark" onClick={() => this.next(numberOfPages)}>next</button> : null
                                    }
                                </div>
                            </div>
                        </div> : null }
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
      characters: state.char.characters,
      count:state.char.count
  };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({LoadCharacters},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(CharacterList);
