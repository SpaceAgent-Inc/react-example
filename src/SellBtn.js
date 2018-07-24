//============================SellBtn.jsx ============================/
//=======Create　The Sell Btn on the right bottom side================/
import React from 'react';
//Icon
import exhibit from './img/exhibit.png';

class SellBtn extends React.Component {
  render(){
    return(
      <div>
        <a className="footer-sell-btn" href="">
          <img alt="" src={exhibit}/>
        </a>
      </div>
    )
  }
}

export default SellBtn;