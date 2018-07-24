//============================FooterDownload.jsx ============================/
//==Create The FooterDownload　Advertisements Parts on the bottom ===========/
import React from 'react';
//Icon
import footer_download from './img/footer_download.png';
import footer_download_mark from './img/footer_download_mark.png';
import app_store from './img/app_store.png';
import google_play from './img/google_play.png';
import footer_download_2 from './img/footer_download_2.png';

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

export default FooterDownload;