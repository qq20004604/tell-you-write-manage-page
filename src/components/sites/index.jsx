/**
 * Created by 王冬 on 2019/8/9.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import React from 'react';
import './style.less';

const State = () => {
    return <div className="global-state">
        <div className="MY-ABC">
            <div className="MY-ABC-bg icon-cog"></div>
            <div className="MY-ABC-text">
                ABC
            </div>
            <div className="MY-ABC-count">
                1
            </div>
        </div>
        <div className="MY-DEF">
            <div className="MY-ABC-bg icon-coffee"></div>
            <div className="MY-ABC-text">
                DEF
            </div>
            <div className="MY-ABC-count">
                2
            </div>
        </div>
        <div className="statistics">
            <div className="statistics-item">
                <div className="description">
                    ALL
                </div>
                <div className="count">
                    6
                </div>
            </div>
            <div className="statistics-item">
                <div className="description">
                    ONE
                </div>
                <div className="count">
                    2
                </div>
            </div>
            <div className="statistics-item">
                <div className="description">
                    TWO
                </div>
                <div className="count">
                    3
                </div>
            </div>
        </div>
    </div>
}

const Tabs = props => {
    const {tabsData} = props;
    const {currentTab, selectTab, currentSort, selectSort} = tabsData;
    const TabsDiv = ['All', 'AA', 'BB'].map(tab => {
        if (tab.toLowerCase() === currentTab) {
            return <div className="article-tab active"
                        key={tab}>{tab}</div>
        } else {
            return <div className="article-tab"
                        onClick={() => selectTab(tab.toLowerCase())}
                        key={tab}>{tab}</div>
        }
    })

    return <div className="article-tabs">
        {TabsDiv}
        <div className="tab-input-box">
            <input type="text" className='tab-input'/>
            <div className='tab-input-icon icon-base'></div>
        </div>

        <div className={`arrangement-list icon-th-list${currentSort === 'list' ? ' active' : ''}`}
             onClick={() => {
                 return currentSort === 'list' ? null : selectSort('list')
             }}>
        </div>
        <div className={`arrangement-card icon-th-card${currentSort === 'card' ? ' active' : ''}`}
             onClick={() => {
                 return currentSort === 'card' ? null : selectSort('card')
             }}></div>
    </div>
}

class Sites extends React.Component {
    render () {
        const {tabsData} = this.props;

        return <div className="article">
            <State/>
            <Tabs tabsData={tabsData}/>

            <div className="site-list">
                <div className="site-list-container">
                    <div className="site"></div>
                    <div className="site"></div>
                </div>
            </div>
        </div>
    }
}

export default Sites
