//============================NavBar.jsx ===================================/
//=========It is the Navigation Mark on the top of the side=================/
import React from 'react';
//Icon
import icon_right from './img/icon-right.png';

class NavBar extends React.Component{
  render(){
    return(
      <nav className="bread-crumbs">
        <ul>
          <li>
            <a href="">
              <span>メルカリ</span>
            </a>
            <img alt="" className="icon_right" src={ icon_right }/>
          </li>
          <li className="bread-crumbs-overflow">
            <span>ps4</span>
          </li>
        </ul>
      </nav>
    )
  }
}

export default NavBar;