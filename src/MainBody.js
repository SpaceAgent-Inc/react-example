//============================MainBody.jsx ============================/
import React from 'react';
import Content from './Content';
import SideSearch from './SideSearch';

class MainBody extends React.Component{
  render(){
    return(
      <main className="search-container l-container clearfix">
        <Content />
        <SideSearch />
      </main>		 
　　)
　}
}

export default MainBody;