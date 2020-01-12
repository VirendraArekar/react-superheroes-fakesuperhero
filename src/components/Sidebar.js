import React, { Component } from 'react';
import { connect } from 'react-redux';
import { LoadCharacters } from '../actions';
import { bindActionCreators } from 'redux';
import Select from 'react-select';
import Detail from './Detail';
import { useHistory,withRouter, Switch,Route } from "react-router-dom";
   
class Sidebar extends Component {
  constructor(props) {
    
      super(props);
      this.props.LoadCharacters();
      this.state = {
        selectedOption: null,
        options:[]
      }
    
    }
  
  UNSAFE_componentDidMount() {

    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        let optionArray = [];
        nextProps.characters.map((item, index) => {
          optionArray.push({ value: item.id, label: item.name })
      });
      this.setState({options:optionArray})
    }
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    this.props.history.push(`/hero/${selectedOption.value}`);
  };

  onChange = (e) => {
    this.props.history.push(`/${e.target.value}`);
  }

  render() {
    const { selectedOption } = this.state;
        return (
            <div className="col-md-2 col-sm-4 border-right text-left pt-5  mt-3" style={{fontSize:20}}>
              <label htmlFor="Caracters">Characters</label>
              <div className="pt-3 ml-3">
                  <Select
                    value={selectedOption}
                    onChange={this.handleChange}
                    options={this.state.options}
              />
              {/* <Switch>
                <Route path="/hero/:heroId" component={Detail} />
                </Switch> */}
              </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    characters: state.char.characters,
  };
};

function mapDispatchToProps(dispatch){
    return bindActionCreators({LoadCharacters},dispatch)
}
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Sidebar));
