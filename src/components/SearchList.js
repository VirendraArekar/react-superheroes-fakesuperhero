import React,{Component } from 'react';
import {connect} from 'react-redux';
import {fetchHeroSearch} from '../actions';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router-dom';
import Rating from 'react-rating';
import { DotLoader } from "react-spinners";

class SearchList extends Component{
    constructor(props){
        super(props);
        this.state={
            heroes: {},
            page: 1,
            limit: 11,
            start:0
        }
        this.props.fetchHeroSearch(this.props.keyword,1,0,11);
    }

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.search !== ''){
            this.countProps(nextProps.search);
        }
    }
  
     isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

    isObject = function(a) {
    return (!!a) && (a.constructor === Object);
    };

    countProps(obj) {
        let searchItems = [];
        var count = 0;
        for (var p in obj) {
        obj.hasOwnProperty(p) && count++;
        searchItems.push(obj[p]);
        }

        this.setState({heroes : searchItems});
        return count; 
    }   

   countPropsW(obj) {
        let searchItems = [];
        var count = 0;
        for (var p in obj) {
        obj.hasOwnProperty(p) && count++;
        searchItems.push(obj[p]);
        }

        this.setState({heroes : searchItems});
        return count; 
    }

     prev = (numberOfPages) => {
        this.setState({ heroes : [],page: this.state.page - 1, start: this.state.start - 11 });
        this.props.fetchHeroSearch(this.props.keyword,this.state.page - 1, this.state.start - 12, this.state.limit -12);
    }

    next = (numberOfPages) => {
        this.setState({ heroes : [],page: this.state.page + 1, start: (this.state.page - 1) * 12,limit:((this.state.page+1) * 12)-1 });
        this.props.fetchHeroSearch(this.props.keyword,this.state.page + 1, (this.state.page - 1) * 12, (this.state.page * 12)-1);
    
    }
    

    render(){
        const { heroes } = this.state;
        let numberOfPages = Math.ceil(this.props.count / 12);
        console.log('count' +this.props.count);
        var prev = this.state.page !== 1 ? true : false;
        var next = this.state.page !== numberOfPages ? true : false;
        var load = heroes.length > 0 ? false : true;
        var characterCard ;
        if (heroes.length > 0 ) {
            characterCard = heroes.map((item, index) => {
               return (
            <div className="col-md-2 col-sm-6 col-xs-12 p-4 m-0" key={index}>
                <div className="product-box" >
                           <Link to={`/hero/${item.id}`} style={{ textDecoration: 'none' }}>
                        
                         <img src={item.image.url } width="100%" height="300px" style={{ borderRadius: "8px" }} />
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
        return(
             <div className="col-md-12 col-sm-12 mt-5">
                <h4 className="text-center text-muted" style={{width:'100%',textAlign:'center',borderBottom:'1px solid lightgray',lineHeight:'0.1em',margin:'10px 0 20px'}}><span style={{background:'#ffffff',paddingLeft:0,paddingRight:0,paddingTop:10,paddingBottom:10}}>*** HEROES ***</span></h4>
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
                    <br></br>
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
        )
    }
}

const mapStateToProps = state => {
  return {
      search: state.find.search,
      count :state.find.count
  };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchHeroSearch},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchList);