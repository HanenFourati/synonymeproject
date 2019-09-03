import React from 'react';
import SynonymeList from './SynonymeList.js'
import SideNavBar from '../HomePage/SideNavBar';
import HeaderPage from '../HomePage/HeaderPage';
import '../CSS/TypagePageCSS.css'
import '../CSS/HomePageCSS.css';
function SynonymePage() {
  return (
    <div>
      <div>
        <HeaderPage/>
        <div className="pagearrg">
          <div className="partone"><SideNavBar/></div>
          <div className="partwo">
            <div>
              <div>
                <h1>Typage des attributs</h1>
                <hr/>
                <input type="button" className="button" value="Sauvegarder les changements"></input>
                <div className="tab">
                  <button className="tablinks" >Tous les attributs</button>
                  <button className="tablinks">Attributs connus</button>
                  <button className="tablinks">Attributs inconnus</button>
                  <button className="activelink">Synonyme d'attributs</button>
                </div>
                <div id="1" className="tabcontent">
                  <p>Vide</p>
                </div>
                <div id="2" className="tabcontent">
                  <p>Vide</p>
                </div>
                <div id="3" className="tabcontent">
                  <p>Vide</p>
                </div>
                <div id="4" className="activetab">
                  <SynonymeList/>
                </div>
              </div>
             </div>
           </div>
         </div>
        </div>
      </div>
  );
}

export default SynonymePage;
