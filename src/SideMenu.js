//============================SideMenu.jsx ============================/
//=========It is the Search Side Menu on the left side=================/
import React from 'react';

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

export default SideMenu;