import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './reducers';
import { BrowserRouter as Router,Route, Switch} from "react-router-dom";
import Detail from './components/Detail';
import Filter from './components/Filter';
import { composeWithDevTools } from 'redux-devtools-extension';

import './App.css';
import Home from './components/Home.js';
import Favorite from './components/Favorite';

const store = createStore(Reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)));

function App() {
  return (
    
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch >
            <Route path="/hero/:heroId" component={Detail} />
            <Route path="/search/:keyword" component={Filter} />
            <Route exact path="/" component={Home} />
            {/* <Route exact path="/"  component={Favorite} /> */}
          </Switch>
        </div>
      </Router>
    </Provider>
  );   
}

export default App;
