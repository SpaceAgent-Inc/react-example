//=======================================================================/
// メルカリ　Search Results List  Ver.1.0  
// XiangYu
//============================Import Something==========================/

//React Dom
import React from 'react';
import ReactDOM from 'react-dom';

//CSS Style Sheet
import './index.css';

//Imgs And Icons
import mark from './img/mark.png';
import icon_search from './img/icon-search.png';
import icon_right from './img/icon-right.png';
import icon_plus from './img/icon-plus.png';
import icon_list from './img/icon-list.png';
import icon_tag from './img/icon-tag.png';
import icon_size from './img/icon-size.png';
import icon_coin from './img/icon-coin.png';
import icon_star from './img/icon-star.png';
import icon_car from './img/icon-car.png';
import icon_purchase from './img/icon-purchase.png';
import advertisement_2 from './img/advertisement_2.png';
import exhibit from './img/exhibit.png';
import footer_download from './img/footer_download.png';
import footer_download_mark from './img/footer_download_mark.png';
import app_store from './img/app_store.png';
import google_play from './img/google_play.png';
import footer_download_2 from './img/footer_download_2.png';
import icon_us from './img/icon-us.png';
import icon_ja from './img/icon-ja.png';
import icon_uk from './img/icon-uk.png';
import mark_black from './img/mark_black.png';
import icon_rank from './img/icon-rank.png';
import icon_search_detail from './img/icon-search-detail.png';
//Jquery
import $ from 'jquery';

//============================Search Nav.jsx ============================/
//===It is the Navigation bar for searching on the top of the side======/

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

//============================LoginNav.jsx ============================/
//=========It is the Login Bar on the top of the side=================/

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

//============================NavBar.jsx ===================================/
//=========It is the Navigation Mark on the top of the side=================/

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

//============================SideMenu.jsx ============================/
//=========It is the Search Side Menu on the left side=================/

class SideMenu extends React.Component {
render() {
  return (
  <nav className="l-left">
  <ul className="pc-header-nav">
    <li>
      <h2>
        <a href="" className="pc-header-nav-root">カテゴリー</a>
      </h2>
      <ul className="pc-header-nav-parent-wrap">
        <li className="pc-header-nav-parent">
          <h3>
            <a href="">レディース</a>
          </h3>
          <ul className="pc-header-nav-child-wrap">
            <li className="pc-header-nav-child">
              <a href="">トップス</a>
              <ul className="pc-header-nav-grand-child-wrap">
                <li className="pc-header-nav-grand-child">
                  <a href="">Tシャツ/カットソー(半袖)</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">Tシャツ/カットソー(七分)</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">シャツ/ブラウス(半袖)</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">シャツ/ブラウス(七分)</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">スカート</a>
              <ul className="pc-header-nav-grand-child-wrap">
                <li className="pc-header-nav-grand-child">
                  <a href="">ミニスカート</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ひざ丈スカート</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ロングスカート</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">キュロット</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">ワンピース</a>
              <ul className="pc-header-nav-grand-child-wrap">
                <li className="pc-header-nav-grand-child">
                  <a href="">ミニワンピース</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ひざ丈ワンピース</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ロングワンピース</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">靴</a>
              <ul className="pc-header-nav-grand-child-wrap">
                <li className="pc-header-nav-grand-child">
                  <a href="">ハイヒール/パンプス</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ブーツ</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">サンダル</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">スニーカー</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ミュール</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="pc-header-nav-parent">
          <h3>
            <a href="">メンズ</a>
          </h3>
          <ul className="pc-header-nav-child-wrap" >
            <li className="pc-header-nav-child">
              <a href="">トップス</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">Tシャツ/カットソー(半袖)</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">Tシャツ/カットソー(七分)</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">シャツ</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ポロシャツ</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">ジャケット/アウター</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">テーラードジャケット</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ノーカラージャケット</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">靴</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">スニーカー</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">サンダル</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">バッグ</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">ショルダーバッグ</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">トートバッグ</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ボストンバッグ</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">リュック/バックパック</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">その他</a>
              <ul className="pc-header-nav-grand-child-wrap" ></ul>
            </li>
          </ul>
        </li>
        <li className="pc-header-nav-parent">
          <h3>
            <a href="">インテリア・住まい・小物</a>
          </h3>
          <ul className="pc-header-nav-child-wrap" >
            <li className="pc-header-nav-child">
              <a href="">キッチン/食器</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">食器</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">調理器具</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">ベッド/マットレス</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">セミシングルベッド</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">簡易ベッド/折りたたみベッド</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">収納付き</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">ライト/照明</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">蛍光灯/電球</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">天井照明</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">フロアスタンド</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">寝具</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">布団/毛布</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">枕</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">シーツ/カバー</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="pc-header-nav-parent">
          <h3>
            <a href="">その他</a>
          </h3>
          <ul className="pc-header-nav-child-wrap" >
            <li className="pc-header-nav-child">
              <a href="">まとめ売り</a>
              <ul className="pc-header-nav-grand-child-wrap" ></ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">食品</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">菓子</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">米</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">飲料/酒</a>
              <ul className="pc-header-nav-grand-child-wrap" >
                <li className="pc-header-nav-grand-child">
                  <a href="">コーヒー</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">ソフトドリンク</a>
                </li>
                <li className="pc-header-nav-grand-child">
                  <a href="">その他</a>
                </li>
              </ul>
            </li>
            <li className="pc-header-nav-child">
              <a href="">その他</a>
              <ul className="pc-header-nav-grand-child-wrap" ></ul>
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      <h2>
        <a href="" className="pc-header-nav-root">ブランド</a>
        <ul className="pc-header-nav-parent-wrap">
          <li className="pc-header-nav-parent">
            <h3>
              <a href="">シャネル</a>
            </h3>
          </li>
          <li className="pc-header-nav-parent">
            <h3>
              <a href="">ナイキ</a>
            </h3>
          </li>
          <li className="pc-header-nav-parent">
            <h3>
              <a href="">ルイ ヴィトン</a>
            </h3>
          </li>
        </ul>
      </h2>
    </li>
  </ul>
</nav>
    );
  }
}

//============================Content.jsx ============================/
//====It is the Searching Results Contents on the right side==========/

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
             { return <CreateList src={cont}/>})} 
        </div>
    </section>
</div>
 )} 
}

//============================CreateList.jsx ============================/
//==============Create　Component for results listing imgs===============/
class CreateList extends React.Component {
render() {
return(
<section className="items-box">
    <a href="">
        <figure className="items-box-photo">
            <img className="is-higher-width lazyloaded" alt="" src={this.props.src}/>
        </figure>
        <div className="items-box-body">
            <h3 className="items-box-name font-2">ps4</h3>
            <div className="items-box-num clearfix">
                <div className="items-box-price font-5">￥ 27,000</div>
                <div className="items-box-likes font-2">
                    <i className="icon-like-border"></i>
                    <span>1</span>
                </div>
                <p className="item-box-tax">(税込)</p>
            </div>
        </div>
    </a>
</section>
    );
  }
}

//============================SideSearch.jsx ============================/
//=======Create　Component for SideSearch Block on the left side=========/
class SideSearch extends React.Component{
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

render(){
return(
<div className="l-side">
    <form action="" className="search-extend-container search-extend-form">
        <div className="search-sort">
            <div className="form-group">
                <div className="select-wrap">
                    <select name="sort_order" className="select-default">
                        <option value="">並び替え</option>
                        <option value="price_asc">価格の安い順 </option>
                        <option value="price_desc">価格の高い順 </option>
                        <option value="created_asc">出品の古い順 </option>
                        <option value="created_desc">出品の新しい順 </option>
                        <option value="like_desc">いいね!の多い順 </option>
                    </select>
                </div>
            </div>
        </div>
        <div className="search-dropdown-content search-extend">
            <h3>詳細検索</h3>
            <div className="form-group">
                <label>
                    <i>
                        <img alt="" className="icon-plus" src={ icon_plus }/>
                    </i>
                    <span>キーワードを追加する</span>
                </label>
                <input className="input-default" name="keyword" placeholder="例）値下げ" type="text"/>
            </div>
            <div className="form-group">
                <label>
                    <i>
                        <img alt="" className="icon-list" src={ icon_list }/>
                    </i>
                    <span>カテゴリーを選択する</span>
                </label>
                <div className="search-sort">
                    <div className="form-group">
                        <div className="select-wrap">
                            <select name="sort_order" className="select-default">
                                <option value="">すべて</option>
                                <option value="">レディース </option>
                                <option value="">メンズ </option>
                                <option value="">ベビー・キッズ </option>
                                <option value="">インテリア・住まい・小物 </option>
                                <option value="">おもちゃ・ホビー・グッズ </option>
                                <option value="">コスメ・香水・美容 </option>
                                <option value="">家電・スマホ・カメラ </option>
                                <option value="">スポーツ・レジャー </option>
                                <option value="">ハンドメイド </option>
                                <option value="">チケット </option>
                                <option value="">自動車・オートバイ </option>
                                <option value="" data-root-id="10">その他</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group">
                <label>
                    <i>
                        <img alt="" className="icon-tag" src={ icon_tag }/>
                    </i>
                    <span>ブランド名から探す</span>
                </label>
                <input className="input-default" name="keyword" placeholder="例）値下げ" type="text"/>
            </div>
            <div className="form-group">
                <label>
                    <i>
                        <img alt="" className="icon-size" src={ icon_size }/>
                    </i>
                    <span>サイズを指定する</span>
                </label>
                <div className="search-sort">
                    <div className="form-group">
                        <div className="select-wrap">
                            <select name="sort_order" className="select-default">
                                <option value="">すべて</option>
                                <option value="price_asc">洋服のサイズ</option>
                                <option value="price_desc">メンズ靴のサイズ</option>
                                <option value="created_asc">レディース靴のサイズ</option>
                                <option value="created_desc">スカートのサイズ</option>
                                <option value="like_desc">キッズ服のサイズ</option>　　
                                <option value="created_asc">ベビー・キッズ靴のサイズ</option>
                                <option value="created_desc">ベビー服のサイズ</option>
                                <option value="like_desc">テレビのサイズ</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group clearfix">
                <label>
                    <i>
                        <img alt="" className="icon-coin" src={ icon_coin }/>
                    </i>
                    <span>価格</span>
                </label>
                <div className="search-sort">
                    <div className="form-group">
                        <div className="select-wrap">
                            <select name="sort_order" className="select-default">
                                <option value="">選択してください</option>
                                <option value="price_asc">300～1000 </option>
                                <option value="price_desc">1000～5000 </option>
                                <option value="created_asc">5000～10000 </option>
                                <option value="created_desc">10000～30000 </option>
                                <option value="like_desc">30000～50000 </option>　　
                                <option value="like_desc">50000～ </option>
                            </select>
                            <input className="input-default_little l-left" name="keyword" placeholder="￥Min" type="text"/>
                            <input className="input-default_little l-right" name="keyword" placeholder="￥Max" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="form-group clearfix">
                <label>
                    <i>
                        <img alt="" className="icon-coin" src={ icon_star }/>
                    </i>
                    <span>商品の状態</span>
                </label>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="all" onchange=""/>
                        <label for="all"></label>
                        <p>すべて</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="new" onchange=""/>
                        <label for="new"></label>
                        <p>新品、未使用</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="almost_new" onchange=""/>
                        <label for="almost_new"></label>
                        <p>未使用に近い</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="clean" onchange=""/>
                        <label for="clean"></label>
                        <p>目立った傷や汚れなし</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="some_dema" onchange=""/>
                        <label for="some_dema"></label>
                        <p>やや傷や汚れあり</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="dema" onchange=""/>
                        <label for="dema"></label>
                        <p>傷や汚れあり</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="bad_statu" onchange=""/>
                        <label for="bad_statu"></label>
                        <p>全体的に状態が悪い</p>
                    </span>
                </div>
            </div>
            <div className="form-group clearfix">
                <label>
                    <i>
                        <img alt="" className="icon-coin" src={ icon_car }/>
                    </i>
                    <span>配送料の負担</span>
                </label>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="all_2" onchange=""/>
                        <label for="all_2" ></label>
                        <p>すべて</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="pay" onchange=""/>
                        <label for="pay"></label>
                        <p>着払い(購入者負担)</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="no_pay" onchange=""/>
                        <label for="no_pay"></label>
                        <p>送料込み(出品者負担)</p>
                    </span>
                </div>
            </div>
            <div className="form-group clearfix">
                <label>
                    <i>
                        <img alt="" className="icon-coin" src={ icon_purchase }/>
                    </i>
                    <span>販売状況</span>
                </label>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="all_3" onchange=""/>
                        <label for="all_3"></label>
                        <p>すべて</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="on_sell" onchange=""/>
                        <label for="on_sell"></label>
                        <p>販売中</p>
                    </span>
                </div>
                <div className="checkbox-default">
                    <span>
                        <input type="checkbox" id="sell_out" onchange=""/>
                        <label for="sell_out"></label>
                        <p>売り切れ</p>
                    </span>
                </div>
            </div>
            <div className="search-extend-btn clearfix">
                <div className="btn-default btn-gray">クリア</div>
                <button type="submit" className="btn-default btn-red">完了</button>
            </div>
        </div>
    </form>
    <div className="l-visible-large">
        <a href="" className="side-banner">
            <img alt="" src={ advertisement_2 }/>
        </a>
    </div>
   </div>); 
  } 
}

//============================SellBtn.jsx ============================/
//=======Create　The Sell Btn on the right bottom side================/
class SellBtn extends React.Component {
  render(){
   return(
    <div>
      <a className="footer-sell-btn" href="">
       <img alt="" src={exhibit}/>
      </a>
   </div>
  )}
}

//============================Footer.jsx ============================/
//=======Create The Footer on the bottom ============================/
class Footer extends React.Component {
 render(){
  return(
　<footer className="global-footer">
    <nav>
        <ul>
            <li className="footer-cell">
                <h2 className="footer-head">メルカリについて</h2>
                <ul>
                    <li>
                        <a href="">会社概要（運営会社）</a>
                    </li>
                    <li>
                        <a href="">プライバシーポリシー</a>
                    </li>
                    <li>
                        <a href="">メルカリ利用規約</a>
                    </li>
                    <li>
                        <a href="">メルカリ利用規約・有償ポイントに関する特約</a>
                    </li>
                    <li>
                        <a href="">あんしんスマホサポート制度に関する利用特約</a>
                    </li>
                    <li>
                        <a href="">コンプライアンスポリシー</a>
                    </li>
                    <li>
                        <a href="">個人データの安全管理に係る基本方針</a>
                    </li>
                    <li>
                        <a href="">特定商取引に関する表記</a>
                    </li>
                    <li>
                        <a href="">資金決済法に基づく表示</a>
                    </li>
                    <li>
                        <a href="">法令順守と犯罪抑止のために</a>
                    </li>
                    <li>
                        <a href="">採用情報</a>
                    </li>
                </ul>
            </li>
            <li className="footer-cell">
                <h2 className="footer-head">メルカリを見る</h2>
                <ul>
                    <li>
                        <a href="">カテゴリー一覧</a>
                    </li>
                    <li>
                        <a href="">ブランド一覧</a>
                    </li>
                    <li>
                        <a href="">出品地域一覧</a>
                    </li>
                    <li>
                        <a href="" target="_blank">公式ブログ</a>
                    </li>
                    <li>
                        <a href="" target="_blank">公式Twitter</a>
                    </li>
                    <li>
                        <a href="" target="_blank">公式Facebook</a>
                    </li>
                </ul>
            </li>
            <li className="footer-cell">
                <h2 className="footer-head">ヘルプ＆ガイド</h2>
                <ul>
                    <li>
                        <a href="">メルカリガイド</a>
                    </li>
                    <li>
                        <a href="">メルカリロゴ利用ガイドライン</a>
                    </li>
                    <li>
                        <a href="">お知らせ</a>
                    </li>
                    <li>
                        <a href="">らくらくメルカリ便とは</a>
                    </li>
                    <li>
                        <a href="">ゆうゆうメルカリ便とは</a>
                    </li>
                    <li>
                        <a href="">大型らくらくメルカリ便とは</a>
                    </li>
                    <li>
                        <a href="">車体取引ガイド</a>
                    </li>
                    <li>
                        <a href="">返品・返金ポリシー</a>
                    </li>
                    <li>
                        <a href="" target="_blank">メルカリあんしん・あんぜん宣言！</a>
                    </li>
                    <li>
                        <a href="">偽ブランド品撲滅への取り組み</a>
                    </li>
                    <li>
                        <a href="">メルカリボックス</a>
                    </li>
                </ul>
            </li>
            <li className="footer-cell">
                <h2 className="footer-head">国</h2>
                <ul className="footer-nav-lang">
                    <li>
                        <a href="">
                            <img className="country" src={icon_us} alt="" />United States
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <img className="country" src={icon_uk} alt=""/>United Kingdom
                        </a>
                    </li>
                    <li>
                        <a href="" className="active">
                            <img className="country active" src={icon_ja} alt=""/>日本
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
    <a href="" className="footer-logo">
      <img src={mark_black} alt=""/>
    </a>
    <p className="footer-copyright">
      <small>© 2018 Mercari</small>
    </p>
　</footer>
　　)
　}
}

//============================FooterDownload.jsx ============================/
//==Create The FooterDownload　Advertisements Parts on the bottom ===========/
class FooterDownload extends React.Component {
render(){
return(
 <aside className="app-banner">
  <div className="app-banner-sp">
    <a href="" target="_blank">
      <img src={footer_download} alt="" width="100%"/>
    </a>
  </div>
  <div className="app-banner-pc">
    <div className="app-banner-pc-inner">
      <h2>スマホでかんたんフリマアプリ</h2>
      <p>今すぐ無料ダウンロード！</p>
      <div className="app-banner-icon clearfix">
        <figure>
          <img src={footer_download_mark} alt="" width="68"/>
        </figure>
        <ul className="clearfix">
          <li>
            <a href="" target="_blank">
              <img src={app_store} alt="" width="133" height="40"/>
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <img src={google_play} alt="" width="133" height="40"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <figure>
      <img src={footer_download_2} alt=""/>
    </figure>
  </div>
 </aside>
   ) 
  } 
}


//=========================================Merge Components Here=========================================//
// Header.jsx
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

//Main body
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
			
// Index.jsx
class Index extends React.Component {
render(){
return(
<div>
  <Header />
  <NavBar />
  <MainBody />
  <FooterDownload/>
  <Footer/>
  <SellBtn/>
</div>
　)
 }
}
//Create the whole page
ReactDOM.render(<Index />, document.getElementById("root"));
