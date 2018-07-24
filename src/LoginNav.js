//============================LoginNav.jsx ============================/
//=========It is the Login Bar on the top of the side=================/
import React from 'react';

class LoginNav extends React.Component{
  render(){
    return(
	  <div className="l-right">
        <ul className="pc-header-login-nav">
          <li> <a href=""className="sp-header-btn btn-red">ログイン</a> </li>
          <li> <a href=""className="sp-header-btn header-signup">新規会員登録</a> </li>
        </ul>
      </div>
	)
  }
}

export default LoginNav;
