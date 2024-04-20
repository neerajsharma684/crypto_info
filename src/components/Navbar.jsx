import React from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined } from '@ant-design/icons';
import icon from '../images/crypto.png';

const Navbar = () => {
    return(
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={icon} size={150}/>
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Crypto Info</Link>
                </Typography.Title>
                <div>
                    <Menu theme='dark' defaultSelectedKeys={['home']}>
                        <Menu.Item key='home' icon={<HomeOutlined />}>
                            <Link to='/'>Home</Link>
                        </Menu.Item>
                        <Menu.Item key='cryptocurrency' icon={<FundOutlined />}>
                            <Link to='/cryptocurrencies'>Crypto Currencies</Link>
                        </Menu.Item>
                        <Menu.Item key='exchanges' icon={<MoneyCollectOutlined />}>
                            <Link to='/exchanges'>Exchanges</Link>
                        </Menu.Item>
                        <Menu.Item key='news' icon={<BulbOutlined />}>
                            <Link to='/news'>News</Link>
                        </Menu.Item>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default Navbar;