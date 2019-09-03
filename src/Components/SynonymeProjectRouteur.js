import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom';
import SynonymePage from './SynonymePage/SynonymePage.js'
import HomePage from './HomePage/HomePage.js'

const CallSynonymePage = () => (
  <SynonymePage />
  )
const CallHome = () => (
  <HomePage />
  )
 
class SOSDariRouter extends Component {
  render() {
    return (
      <div>
        <Switch>
         
          <Route  exact path="/Typagedesattributs" component={CallSynonymePage} />
          <Route   exact  path="/" component={CallHome} />
          <Route path="/Typagedesattributs/Supprimer/:id" render={(props)=> <SynonymePage  id={props.match.params.id} />} />
          <Route path="/Typagedesattributs/EditerSynonyme/:id" render={(props)=> <SynonymePage  id={props.match.params.id} />} />
          <Route path="/Typagedesattributs/AjouterSynonyme/:id" render={(props)=> <SynonymePage  id={props.match.params.id} />} />
       
        </Switch>
       </div>
    );
  }
}

export default SOSDariRouter;