//============================SideSearch.jsx ============================/
//=======Create　Component for SideSearch Block on the left side=========/
import React from 'react';

//Icon
import icon_plus from './img/icon-plus.png';
import icon_list from './img/icon-list.png';
import icon_tag from './img/icon-tag.png';
import icon_size from './img/icon-size.png';
import icon_coin from './img/icon-coin.png';
import icon_star from './img/icon-star.png';
import icon_car from './img/icon-car.png';
import icon_purchase from './img/icon-purchase.png';
import advertisement_2 from './img/advertisement_2.png';

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
                  <option value="price_asc">価格の安い順</option>
                  <option value="price_desc">価格の高い順</option>
                  <option value="created_asc">出品の古い順</option>
                  <option value="created_desc">出品の新しい順</option>
                  <option value="like_desc">いいね!の多い順</option>
                </select>
              </div>
            </div>
          </div>
          <div className="search-dropdown-content search-extend">
            <h3>詳細検索      </h3>
            <div className="form-group">
              <label>
                <i>
                  <img alt="" className="icon-plus" src={ icon_plus }/>
                </i>
                <span>キーワードを追加する      </span>
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
                      <option value="">レディース</option>
                      <option value="">メンズ</option>
                      <option value="">ベビー・キッズ</option>
                      <option value="">インテリア・住まい・小物</option>
                      <option value="">おもちゃ・ホビー・グッズ</option>
                      <option value="">コスメ・香水・美容</option>
                      <option value="">家電・スマホ・カメラ</option>
                      <option value="">スポーツ・レジャー</option>
                      <option value="">ハンドメイド</option>
                      <option value="">チケット</option>
                      <option value="">自動車・オートバイ</option>
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
                      <option value="price_asc">300～1000</option>
                      <option value="price_desc">1000～5000</option>
                      <option value="created_asc">5000～10000</option>
                      <option value="created_desc">10000～30000</option>
                      <option value="like_desc">30000～50000</option>　　
                      <option value="like_desc">50000～</option>
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
      </div>
    ); 
  } 
}

export default SideSearch;