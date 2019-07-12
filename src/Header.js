
//=========================================Merge Components Here=========================================//
// Header.jsx
import React from 'react';
//Jsx Component
import SearchNav from './SearchNav';
import SideMenu from './SideMenu';
import LoginNav from './LoginNav';

class Header extends React.Component{
 render(){
   return (
     <header className="pc-header visible-pc">
	   <div className="pc-header-inner">
        <SearchNav/>
	    <div className="pc-header-nav-box clearfix">
	     <SideMenu/>
	     <LoginNav/>
	    </div>
	   </div>
	 </header>
    )
  }
}

export default Header;