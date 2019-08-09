import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';
import Header from './header.jsx';
import Content from './content.jsx';
import Footter from './footter.jsx';

const CURRENT_NAV = 'aaa'

class Root extends React.Component {
    state = {
        CURRENT_NAV: CURRENT_NAV,

        // 注意，css和js中，图片路径写法不同
        avatarIcon: require('@/img/default-avatar.png'),

        // 侧边栏的按钮和历史记录，认为都是动态获取的（从页面或者通过接口获取）
        // 如果非动态获取，那么这个值应该从 src/config/asidebtns.json 里去获取
        asideBtns: [
            {
                nav: 'aaa',
                text: 'AAA',
                url: '#aaa'
            },
            {
                nav: 'bbb',
                text: 'BBB',
                url: '#bbb'
            },
            {
                nav: 'ccc',
                text: 'CCC',
                url: '#ccc'
            },
            {
                nav: 'ddd',
                text: 'DDD',
                url: '#ddd'
            },
            {
                nav: 'eee',
                text: 'EEE',
                url: '#eee'
            },
            {
                nav: 'fff',
                text: 'FFF',
                url: '#fff'
            },
            {
                nav: 'ggg',
                text: 'GGG',
                url: '#ggg'
            },
            {
                nav: 'hhh',
                text: 'HHH',
                url: '#hhh'
            },
            {
                nav: 'iii',
                text: 'III',
                url: '#iii'
            },
            {
                nav: 'jjj',
                text: 'JJJ',
                url: '#jjj'
            },
            {
                nav: 'kkk',
                text: 'KKK',
                url: '#kkk'
            },
            {
                nav: 'lll',
                text: 'LLL',
                url: '#lll'
            }
        ],
        asideDear: [
            {
                // 跳转url
                url: '#01',
                // 历史文字显示
                text: 'gfdsbfdsbdfsb'
            },
            {
                url: '#02',
                text: 'hrtnhr12'
            },
            {
                url: '#03',
                text: 'mythn13rfe'
            },
            {
                // 跳转url
                url: '#01',
                // 历史文字显示
                text: 'gfdsbfdsbdfsbgfdsbfdsbdfsbgfdsbfdsbdfsbgfdsbfdsbdfsb'
            },
            {
                url: '#02',
                text: 'hrtnhr12'
            },
            {
                url: '#03',
                text: 'mythn13rfe'
            },
            {
                // 跳转url
                url: '#01',
                // 历史文字显示
                text: 'gfdsbfdsbdfsb'
            },
            {
                url: '#02',
                text: 'hrtnhr12'
            },
            {
                url: '#03',
                text: 'mythn13rfe'
            },
            {
                // 跳转url
                url: '#01',
                // 历史文字显示
                text: 'gfdsbfdsbdfsb'
            },
            {
                url: '#02',
                text: 'hrtnhr12'
            },
            {
                url: '#03',
                text: 'mythn13rfe'
            }
        ]
    }

    render () {
        const asideData = {
            CURRENT_NAV: this.state.CURRENT_NAV,
            asideBtns: this.state.asideBtns,
            asideDear: this.state.asideDear,
            selectNav: this.selectNav
        }

        return <div id='app'>
            <Header avatarIcon={this.state.avatarIcon}/>

            <Content asideData={asideData}/>

            <Footter/>
        </div>;
    }

    selectNav = (asideBtn) => {
        // 两种跳转方式，路由跳转（单页），或者url跳转（多页）
        this.setState({
            CURRENT_NAV: asideBtn.nav
        })
        window.location.href = asideBtn.url
    }
}

ReactDOM.render(<Root/>, document.getElementById('root'));
