/**
 * Created by 王冬 on 2019/8/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import React from 'react';
import './style.less';

class Aside extends React.Component {
    render () {
        const {asideData} = this.props;

        // 历史记录的数量，最小为1（为0时，该位置为占位符）
        let dearLength = asideData.asideDear.length < 1 ? 1 : asideData.asideDear.length

        // 最大只允许显示【10】行
        const MAXDEARCOUNT = 10;
        if (dearLength > MAXDEARCOUNT) {
            dearLength = MAXDEARCOUNT
        }

        // 历史记录的高度 =  dear的高度34px（24px字体+5*2px上下部分行间距）
        //                  + 历史记录单行高度22px（12px字体高度+5*2上下行间距）
        //                  + 最下方留白5px
        const dearHeight = 34 + 22 * dearLength + 5;
        const navStyle = {
            bottom: `${dearHeight}px`
        }
        const dearStyle = {
            height: `${dearHeight}px`
        }

        return <div className="aside">
            <div className='aside-nav'
                 style={navStyle}>
                <div className='aside-nav-box'>
                    {
                        asideData.asideBtns.map((item, i) => {
                            const isActive = item.nav === asideData.CURRENT_NAV;

                            return <div className={`aside-nav-btn${isActive ? ' active' : ''}`}
                                        onClick={() => asideData.selectNav(item)}
                                        key={i}>
                                <div className={`aside-nav-btn-icon icon-base`}></div>
                                <div className="aside-nav-btn-text">
                                    {
                                        item.text
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
            <div className='aside-dear'
                 style={dearStyle}>
                <div className="aside-dear-title">
                    My Dear
                </div>
                {
                    asideData.asideDear.length > 0 ? asideData.asideDear.map((item, index) => {
                        // 这里用 a 标签，上面的跳转用的是 div 然后js控制。
                        // 是两种不一样的实现方法，效果基本是一致的
                        return <a className='aside-dear-item'
                                  href={item.url}
                                  key={index}>· {item.text}</a>
                    }) : <div className='aside-dear-item'>· ---</div>
                }
            </div>
        </div>
    }
}

export default Aside
