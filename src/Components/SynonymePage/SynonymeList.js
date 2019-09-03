import React, { Component } from 'react';
import {connect} from 'react-redux'
import Synonyme from './Synonyme';
import axios from 'axios';
class SynonymeList extends Component {
  componentDidMount(){ //Charger les synonymes de la base de données pour les afficher
    axios.get('/Typagedesattributs').then(res => this.props.initSynonymeList(res.data))
    .catch(error => {console.log(error)});
   } 
   
  render() {
    const {tabsyn}=this.props
    return ( 
    <div>
      {tabsyn.map((el,index)=><Synonyme item={el} key={index} _id={index} />)} {/**Afficher les mots et ses synonymes*/}
    </div> );
    }
}

const mapStateToProps=(state)=>
{
  return { tabsyn:state.SynonymeReducer } //Obtenir le stat du Synonyme reducer
}
const mapDispatchToProps = dispatch => 
{
  return {
    initSynonymeList: synonymes => { //dispatch LOED_SYNONYME_LIST action vers le store
    dispatch({
      type: "LOED_SYNONYME_LIST",  
      synonymes
      });
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SynonymeList);