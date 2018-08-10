import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from '../Home/Home'
import CategoriesContainer from '../Categories/CategoriesContainer'

import './main.scss'

class Main  extends Component { 

  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(<BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route
          exact
          path="/categories"
          render={(props) => <CategoriesContainer />}
        />
      </Switch>
    </BrowserRouter>)
  }
}

/*Main.propTypes = {
  match: PropTypes.shape().isRequired
}*/

Main.defaultProps = {
  match: {}
}

export default Main
