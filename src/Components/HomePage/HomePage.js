import React, { Component }  from 'react';
import SideNavBar from './SideNavBar';
import HeaderPage from './HeaderPage';
import '../CSS/HomePageCSS.css';
class Homepage extends Component  {
  render() { 
    return (
      <div>
        <div>
          <HeaderPage/>
          <div className="pagearrg">
            <div className="partone"><SideNavBar/></div>
            <div className="partwo"></div>
          </div>
        </div>
      </div>
    ); 
  }
}

export default Homepage;
