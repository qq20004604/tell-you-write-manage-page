/**
 * Created by 王冬 on 2019/8/6.
 * QQ: 20004604
 * weChat: qq20004604
 * 功能说明：
 *
 */
import React from 'react';
import './header.less';

class Header extends React.Component {
    render () {
        const {avatarIcon} = this.props;
        return <div id='header'>
            <div className={'header-box'}>
                <div className={'header-title'}>
                    <img className={'header-title-logo'}
                        src={require('@/img/logo.png')}
                         alt=""/>
                </div>
                <div className={'header-avatar'}>
                    <img src={avatarIcon} alt=""/>
                </div>
            </div>
        </div>
    }
}

export default Header
