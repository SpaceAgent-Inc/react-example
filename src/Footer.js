//============================Footer.jsx ============================/
//=======Create The Footer on the bottom ============================/
import React from 'react';
//Icon
import icon_us from './img/icon-us.png';
import icon_ja from './img/icon-ja.png';
import icon_uk from './img/icon-uk.png';
import mark_black from './img/mark_black.png';

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

export default Footer;