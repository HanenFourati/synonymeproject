import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Link,withRouter } from 'react-router-dom';
import { FaPencilAlt,FaTimes,FaPlusCircle,FaFolder,FaSortDown } from "react-icons/fa";
import '../CSS/SynonymeCSS.css'
class Synonyme extends React.Component {
  constructor(props)  
    {
      super(props)
      this.dropdown = this.dropdown.bind(this)
    }
  Suppressionsyn = (_id) => //Supprimer un synonyme 
   {
      axios.delete(`/Typagedesattributs/Supprimer/${_id}`)
      .then(() =>{ this.props.Suppression(_id);
      this.props.history.push("/Typagedesattributs");})
        .catch(err => alert(err));
    };
  dropdown() //Contrôler le button dropdown
    {
      var dropdown = document.getElementsByClassName("dropdown-btnsyn");
      var i;
      for (i = 0; i < dropdown.length; i++)
        {
          dropdown[i].addEventListener("click", 
          function() {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") 
            {
            dropdownContent.style.display = "none";
            } 
            else
            {
            dropdownContent.style.display = "block";
            }
          });
         }
    }
  Ajoutersyn(_id,label,nlabel) //Ajouter un synonyme pour un mot
    { 
      axios.put(`/Typagedesattributs/AjouterSynonyme/${_id}`,
       {
        label: [label, nlabel.nlabel],
       })
      .then(() => {
        this.props.Ajouter(_id,nlabel.nlabel)
        this.props.history.push("/Typagedesattributs");
       })
      .catch(err => alert(err));
    }
  Editionsyn(_id,nlabel) //Editer un synonyme d'un mot
    { 
      axios.put(`/Typagedesattributs/EditerSynonyme/${_id}`, 
      {
        label: nlabel.nlabel
      })
      .then(() => {
        this.props.Edition(_id,nlabel.nlabel)
        this.props.history.push("/Typagedesattributs");
        })
      .catch(err => alert(err));
    }
  render() {
    const {item} =this.props
    return (
      <div>
        <div className="SynonymeBox">
         <div>
            <button className="dropdown-btnsyn" onClick={this.dropdown} > <FaFolder/> {item.code} <FaSortDown/></button>
            <div className="dropdown-containersyn"> {item.label}</div>
          </div>
          <div> 
            <Link to={`/Typagedesattributs/AjouterSynonyme/${item._id}`}> 
              <button  onClick={()=>this.Ajoutersyn(item._id,item.label,{nlabel:  prompt('Ajouter un synonyme : '),})}><FaPlusCircle/> </button>
            </Link>
            <Link to={`/Typagedesattributs/Supprimer/${item._id}`}>  
              <button onClick={() => this.Suppressionsyn(item._id)}><FaTimes/> </button>
            </Link>
            <Link to={`/Typagedesattributs/EditerSynonyme/${item._id}`}>
              <button onClick={()=>this.Editionsyn(item._id,{nlabel:  prompt('Editer un synonyme ', item.label), })}> <FaPencilAlt/> </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps=(dispatch)=>
{
  return {
    Suppression:_id=> //dispatch SUPPRESSION action vers le store
      {
        dispatch({
          type:'SUPPRESSION', 
           _id 
        })
      },
    Ajouter: (_id,nlabel) => //dispatch AJOUTER action vers le store
      {
        dispatch({
          type:'AJOUTER',
            _id,
            label: nlabel.nlabel
        })
      },
    Edition: (_id,nlabel) => //dispatch EDITION action vers le store
      {
        dispatch({
          type:'EDITION',
          _id,
          label: nlabel.nlabel
        })
      }

  }
}

 
export default connect(null,mapDispatchToProps)(withRouter(Synonyme)) ;
