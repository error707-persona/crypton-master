import React, {useState, useEffect} from 'react'
import {Button, Menu, Typography, Avatar, Layout} from 'antd';
import { Link } from 'react-router-dom';
import {HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, WindowsFilled } from '@ant-design/icons';



const { Sider } = Layout;
const Navbar = () => {
    // const [activeMenu, setActiveMenu] = ueState(true);
    // const [screenSize, setScreenSize] = useSate(null);
    // useEffect(() =>{
    //     const handleResize = () => setScreenSize(window.innerWidth);

    //     window.addEventListener('resize', handleResize);

    //     handleResize();
    //     return () => window.removeEventListener('resize', handleResize)

        

    // }, []);
    // if (screenSize<768){
    //     setActiveMenu(false);
    // }
    // else{
    //     setActiveMenu(true);
    // }

    return (
        <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo-container">
                <Avatar/>
                <Typography.Title level={2} className='logo'>
                    <Link to="/">Cryton</Link>
                </Typography.Title>
                
                   
               
                {/* <Button className="menu-control-container">

                </Button> */}
            </div>
            {/* {activeMenu &&{}} */}
      <Menu theme="dark">
                <Menu.Item icon={<HomeOutlined/>}>
                    <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item icon={<FundOutlined/>}>
                    <Link to="/cryptocurrencies">Currencies</Link>
                </Menu.Item>
                <Menu.Item icon={<MoneyCollectOutlined/>}>
                    <Link to="/exchanges">Exchages</Link>
                </Menu.Item>
                <Menu.Item icon={<BulbOutlined/>}>
                    <Link to="/news">News</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu>
    </Sider>
    )
}

export default Navbar
