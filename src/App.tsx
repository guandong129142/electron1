import React from 'react';
// BrowserRouter, 
import { HashRouter } from 'react-router-dom';
// import { ConfigProvider, App as AntdApp } from 'antd';
import Router from './router/index';
// import AntdGlobal from './utils/AntdGlobal';
import './App.css';

function App() {
  return (
      <HashRouter>
        <Router />
      </HashRouter>
    // <ConfigProvider
      // theme={{
      //   token: {
      //     colorBgContainer: '#ed6c00'
      //   }
      // }}
    // >
      // <AntdApp>
      //   <AntdGlobal />
        // <BrowserRouter>
        //   <Router />
        // </BrowserRouter>
    //   </AntdApp>
    // </ConfigProvider>
  );
}

export default App;
