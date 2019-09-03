import React from 'react';
import { FaSortDown, FaHome, FaFile,FaSpinner,FaPencilAlt } from "react-icons/fa";
import {Link} from 'react-router-dom';
import '../CSS/SideNavBarCSS.css'

class SideNavBar extends React.Component {
  constructor(props)  
  {
    super(props)
    this.dropdown = this.dropdown.bind(this)
  }
  dropdown() //Contrôler le button dropdown
  {
    var dropdown = document.getElementsByClassName("dropdown-btn");
    var i;
    for (i = 0; i < dropdown.length; i++)
      {
        dropdown[i].addEventListener("click", function() {
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
  render() {
    return (
      <div className="sidenav">
        <Link  to="/"><FaHome/> Accueil</Link >
        <Link  to="/"><FaFile/>Gestion des fichiers</Link >
        <button className="dropdown-btn" onClick={this.dropdown} > 
           <FaFile/> Toutes les fonctionnalités d'enrichissement <FaSortDown/>
        </button>
        <div className="dropdown-container"> <Link to="/">Lien 1</Link > </div>
        <button className="dropdown-btn" onClick={this.dropdown} > <FaFile/>Paramétrages 
           <FaSortDown/>
        </button>
        <div className="dropdown-container">
          <Link  to="/"> <FaFile/> Paramétrage des attributs</Link >
          <Link  to="/"><FaSpinner/>Charger les liste de valeurs</Link >
          <Link  to="/Typagedesattributs"><FaPencilAlt/>Typage des attributs</Link >
          <Link  to="/"><FaFile/>Rafraichir la base des lists</Link >
        </div>
     </div>
    );
  }
}

export default SideNavBar;