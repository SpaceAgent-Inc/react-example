//============================CreateList.jsx ============================/
//==============Create　Component for results listing imgs===============/
import React from 'react';

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

export default CreateList;