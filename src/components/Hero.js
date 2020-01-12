import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHeroDetails,fetchHeroImage,fetchHeroPower,fetchHeroAppearance ,fetchHeroWork,fetchHeroConnection,fetchHeroBiography} from '../actions';
import { bindActionCreators } from 'redux';
import Rating from 'react-rating';
import '../assets/css/hero.css';

class Hero extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hero: {},
            heightInch: '',
            heightCm: '',
            weightLb: '',
            weightKg : ''
        }
        this.props.fetchHeroDetails(this.props.id);
        this.props.fetchHeroImage(this.props.id);
        this.props.fetchHeroPower(this.props.id);
        this.props.fetchHeroAppearance(this.props.id);
        this.props.fetchHeroWork(this.props.id);
        this.props.fetchHeroConnection(this.props.id);
        this.props.fetchHeroBiography(this.props.id);
    }

    UNSAFE_componentWillMount() {
       
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.detail) {
            // console.log(nextProps.detail.image);
        }

        if (nextProps.appearance.height !== '') {
            // console.log(nextProps);
            this.countProps(nextProps.appearance.height);
        }

         if (nextProps.appearance.weight !== '') {
            // console.log(nextProps);
            this.countPropsW(nextProps.appearance.weight);
        }
    }
    isArray = function(a) {
    return (!!a) && (a.constructor === Array);
};

    isObject = function(a) {
    return (!!a) && (a.constructor === Object);
    };
    

    countProps(obj) {
        var count = 0;
        for (var p in obj) {
            obj.hasOwnProperty(p) && count++;
            if (count === 1) {
                this.setState({heightInch : obj[p]})
            }
            if (count === 2) {
                this.setState({heightCm : obj[p]})
            }
         }
    }

    countPropsW(obj) {
        var count = 0;
        for (var p in obj) {
            obj.hasOwnProperty(p) && count++;
            if (count === 1) {
                this.setState({weightLb : obj[p]})
            }
            if (count === 2) {
                this.setState({weightKg : obj[p]})
            }
         }
    }

    countPropsW(obj) {
        var count = 0;
        for (var p in obj) {
            obj.hasOwnProperty(p) && count++;
            if (count === 1) {
                this.setState({weightLb : obj[p]})
            }
            if (count === 2) {
                this.setState({weightKg : obj[p]})
            }
         }
    }


    render() {
        const { detail, power, appearance,biography,connection,work } = this.props;
        console.log(this.props.work);   
        // this.countProps(appearance.height);
        // this.countProps(this.state.heightCm);
        // console.log(this.isObject(this.state.height));
        return (
            <div className="row mt-5">
                <div className="col-md-4 col-xs-8">
                    <img src={this.props.img} className="hero_image" />
                </div>
                <div className="col-md-8 col-xs-12 text-left pl-5">
                    <p className="hero-strength">PERSONAL INFORMATION</p>
                    <div className="row">
                        <div className="col-md-3">
                           <label className="prop-sub-heder">Name</label><br/>
                           <label className="prop-sub-heder">Gender</label><br/>
                            <label className="prop-sub-heder">Race</label><br />
                            <label className="prop-sub-heder">Height</label><br />
                            <label className="prop-sub-heder">Weight</label><br />
                            <label className="prop-sub-heder">Eye Color</label><br />
                            <label className="prop-sub-heder">Hair Color</label><br/>
                        </div>
                        <div className="col-md-9">
                            <label className="prop-sub-heder">{appearance.name}</label><br/>
                            <label className="prop-sub-heder">{appearance.gender}</label><br/>
                            <label className="prop-sub-heder">{appearance.race}</label><br />
                            <label className="prop-sub-heder">Inches - {this.state.heightInch}  , Centimeter- {this.state.heightCm}</label><br />
                            <label className="prop-sub-heder">In Pound - {this.state.weightLb}  , In Kilogram - {this.state.weightKg}</label><br />
                            <label className="prop-sub-heder">{appearance["eye-color"]}</label><br />
                            <label className="prop-sub-heder">{appearance["hair-color"]}</label><br/>
                        </div>
                    </div>
                    <p className="hero-strength">POWER STATISTICS</p>
                    <div className="row">
                        <div className="col-md-3">
                           <label className="prop-sub-heder">Intelligence</label><br/>
                           <label className="prop-sub-heder">Strength</label><br/>
                            <label className="prop-sub-heder">Speed</label><br />
                            <label className="prop-sub-heder">Durability</label><br />
                            <label className="prop-sub-heder">Power</label><br />
                            <label className="prop-sub-heder">Combat</label><br/>
                        </div>
                        <div className="col-md-9">
                            <Rating
                                initialRating={(power.intelligence / 200) * 10 }
                                readonly
                            /><br/>
                            <Rating
                                initialRating={(power.strength / 200) * 10 }
                                readonly
                            /><br />
                             <Rating
                                initialRating={(power.speed / 200) * 10 }
                                readonly
                            /><br />
                             <Rating
                                initialRating={(power.durability / 200) * 10 }
                                readonly
                            /><br />
                             <Rating
                                initialRating={(power.power / 200) * 10 }
                                readonly
                            /><br />
                             <Rating
                                initialRating={(power.combat / 200) * 10 }
                                readonly
                            /><br/>
                        </div>
                    </div>
                    <p className="hero-strength">Biography</p>
                    <div className="row">
                        <div className="col-md-3">
                           <label className="prop-sub-heder">Full Name</label><br/>
                           <label className="prop-sub-heder">Alter Egos</label><br/>
                            <label className="prop-sub-heder">Aliasws</label><br />
                            <label className="prop-sub-heder">Place of Birth</label><br />
                            <label className="prop-sub-heder">First Appearance</label><br />
                            <label className="prop-sub-heder">Eye Publisher</label><br />
                            <label className="prop-sub-heder">Alignment Color</label><br/>
                        </div>
                        <div className="col-md-9">
                            {/* <label className="prop-sub-heder">{biography["full-name"]}</label><br/>
                            <label className="prop-sub-heder">{biography["alter-egos"]}</label><br/>
                            <label className="prop-sub-heder">{appearance.race}</label><br />
                            <label className="prop-sub-heder">{biography["place-of-birth"]}</label><br />
                            <label className="prop-sub-heder">{biography["first-appearance"]}</label><br />
                            <label className="prop-sub-heder">{biography.publisher}</label><br />
                            <label className="prop-sub-heder">{biography.alignment}</label><br/> */}
                        </div>
                    </div>
                     <p className="hero-strength">CONNECTIONS</p>
                    <div className="row">
                        <div className="col-md-3">
                           <label className="prop-sub-heder">Group Affaliation</label><br/>
                           <label className="prop-sub-heder">Relative</label><br/>
                            
                        </div>
                        <div className="col-md-9">
                            <label className="prop-sub-heder">{connection.relatives}</label><br/>
                            <label className="prop-sub-heder">{connection.relatives}</label><br/>
                        </div>
                    </div>

                    <p className="hero-strength">WORK</p>
                    <div className="row">
                        <div className="col-md-3">
                           <label className="prop-sub-heder">Occupation Affaliation</label><br/>
                           <label className="prop-sub-heder">Base</label><br/>
                            
                        </div>
                        <div className="col-md-9">
                            {/* <label className="prop-sub-heder">{work.base}</label><br/>
                            <label className="prop-sub-heder">{work.base}</label><br/> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
  return {
      detail: state.hero.detail,
      img: state.img.image,
      power: state.strength.power,
      appearance: state.appear.appearance,
      biography: state.bio.biography,
      connection: state.con.connection,
      work:state.work.work
  };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchHeroDetails,fetchHeroImage,fetchHeroPower,fetchHeroWork,fetchHeroAppearance,fetchHeroConnection,fetchHeroBiography},dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps)(Hero);
