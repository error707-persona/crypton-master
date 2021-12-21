import logo from './logo.svg';
import React, {Component} from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import {Layout, Typography, Space} from 'antd';
import './App.css';
import {Button, Menu, Avatar} from 'antd';
import {api} from './components/api'
import { Navbar, Exchanges, HomePage, CryptoDetails, Cryptocurrencies, News, Login } from './components';
const { Header, Content, Footer, Sider } = Layout;
function App() {
//   var axios = require("axios").default;
// var options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/stats',
//   headers: {
//     'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//     'x-rapidapi-key': 'f17a429a90msh542db698e4d2b60p1c2e9djsn9726c9727048'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
  var a = true;
  // if (a) return <Login/>;
  console.log(process.env)
  return (
    
    <Layout>
    <Navbar/>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24 }}>
        
             <Routes>
             <Route exact path="/" element={<HomePage/>}/>
               <Route exact path="/exchanges" element={<Exchanges/>}/>
               <Route exact path="/cryptocurrencies"  element={<Cryptocurrencies/>}/>
               <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
               <Route exact path="/news" element={<News/>}/>
               {/* <Route exact path="/login" element={<Login/>}/> */}
             </Routes>
            <api/>
           {/* </div> */}
        </div>
      </Content>
      <div className="footer">
      
 <Typography.Title level={5} style={{color: 'white', textAlign:'center'}}>
   Crypton<br/>
   All Rights Reserved
 </Typography.Title>
 <Space>
   <Link to="/">Home</Link>
   <Link to="/cryptocurrencies">Currencies</Link>
   <Link to="/exchanges">Exchanges</Link>
   <Link to="/news">News</Link>
 </Space>
      </div>
    </Layout>
  </Layout>
  );
}

export default App;
