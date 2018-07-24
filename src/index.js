//=======================================================================/
// メルカリ　Search Results List  Ver.1.0  
// XiangYu
//============================Index jsx==========================/

//React Dom
import React from 'react';
import ReactDOM from 'react-dom';

//CSS Style Sheet
import './Index.css';

//Jsx Components
import Header from './Header';
import NavBar from './NavBar';
import MainBody from './MainBody';
import Download from './Download';
import Footer from './Footer';
import SellBtn from './SellBtn';
			
// Index.jsx
class Index extends React.Component {
  render(){
    return(
      <div>
        <Header />
        <NavBar />
        <MainBody />
        <Download/>
        <Footer/>
        <SellBtn/>
      </div>
    )
  }
}

//Create the whole page
ReactDOM.render(<Index />, document.getElementById("root"));
