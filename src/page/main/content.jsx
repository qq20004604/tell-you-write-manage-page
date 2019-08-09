/**
 * Created by 王冬 on 2019/8/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import React from 'react';
import './content.less';
import Aside from 'component/aside';
import Sites from 'component/sites';

class Content extends React.Component {
    state = {
        currentTab: 'all',
        currentSort: 'list'
    }

    render () {
        const {asideData} = this.props;
        const tabsData = {
            currentTab: this.state.currentTab,
            selectTab: this.selectTab,
            currentSort: this.state.currentSort,
            selectSort: this.selectSort
        }

        return <div id='content'>
            <div className="content">
                <Aside asideData={asideData}/>
                <div className="article-box">
                    <Sites tabsData={tabsData}/>
                </div>
            </div>
        </div>
    }

    selectTab = tab => {
        this.setState({
            currentTab: tab
        })
    }
    selectSort = sort => {
        this.setState({
            currentSort: sort
        })
    }
}

export default Content
