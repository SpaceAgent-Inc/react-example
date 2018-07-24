//============================Content.jsx ============================/
//====It is the Searching Results Contents on the right side==========/
import React from 'react';
//Jquery
import $ from 'jquery';
//Icon
import icon_rank from './img/icon-rank.png';
import icon_search_detail from './img/icon-search-detail.png';
//CreatList
import CreateList from './CreateList';

class Content extends React.Component{
 constructor() {
    super();
    this.state = ({
      entry: [],
    });
 }

// Get json from API 
  componentDidMount() {
    $.ajax({
        url: 'http://localhost:3003/imgs',
        type: 'GET',
        dataType: 'json',
        success: function(res) {
          this.setState({
            entry: res
          });
        }.bind(this),
        error: function(xhr, status, err) {
         console.log(this.props.targetURL, status, err.toString());
        }.bind(this)
   });
}
	
  render(){
    return(
      <div className="l-content">
         <div className="hidden-large search-nav clearfix">
           <div>
            <img className="rank" src={icon_rank} alt=""/>
            <div className="search-nav-sort">価格の高い順 </div>
          </div>
         <div>
            <img className="search_detail" src={icon_search_detail} alt=""/>
            <div>詳細検索</div>
         </div>
      </div>
      <section className="items-box-container clearfix">
        <h2 className="search-result-head">検索結果 1-48 件 </h2>
        <div class="items-box-content clearfix">
	       {this.state.entry.map(function(cont) 
             { return <CreateList src={cont}/> })} 
        </div>
      </section>
    </div>
  )} 
}
	
export default Content;