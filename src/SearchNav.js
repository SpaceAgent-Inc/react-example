//============================Search Nav.jsx ============================/
//===It is the Navigation bar for searching on the top of the side======/
//React Dom
import React from 'react';
//Icon
import mark from './img/mark.png';
import icon_search from './img/icon-search.png';


class SearchNav extends React.Component {
 //Form Elements  
 constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.onChangeName = this.onChangeName.bind(this);
  }

  onChangeName(e) {
    console.log(e.target.value);
    this.setState({ name: e.target.value });
  }
	
  render() {
    return (	 
	  <div className="clearfix">
	    <h1 className="l-left">
	      <a href="">
	        <img alt="" className="mark" src={ mark }/>
	      </a>
	    </h1>
	    <form className="pc-header-form l-right" action="">
          <input type="search" className="input-default" placeholder="キーワードから探す" value={this.state.name} onChange={this.onChangeName} />
	        <a href="">
	          <img alt="" className="icon-search" src={ icon_search }/>
	        </a>
        </form>
	  </div>
	);
  }
}

export default SearchNav;
