import { useEffect } from 'react';
// theme
import { Layout, Watermark } from "antd";
import NavHeader from './components/NavHeader'
import SideMenu from './components/SideMenu'
import NavFooter from './components/NavFooter';
// import Dashboard from '@/views/Dashboard';
// import UserManager from '@/views/UserManager';
import api from '@/api';
// import storage from '@/utils/storage';
import { useBearStore } from '@/store';
import { Outlet, useLocation } from 'react-router-dom';

const { Sider, Header, Content, Footer } = Layout

export default function LayoutFC() {

  // const {
  //   token: {
  //     colorBgContainer
  //   }
  // } = theme.useToken()

  const { pathname } = useLocation();

  console.log('pathname:', pathname)

  const updateUserInfo = useBearStore((state: any) => state.updateUserInfo);

  useEffect(() => {
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await api.getUserInfo();
    updateUserInfo(data);
    // storage.set('userInfo', data);
  };

  return (
    <Watermark content='React'>
    <Layout>
    <Sider
      breakpoint='lg'
      collapsedWidth='0'
      // broken => { console.log(broken); }
      onBreakpoint={() => {}}
      // (collapsed, type) => { console.log(collapsed, type); }
      onCollapse={() => {}}
    >
      <SideMenu />
    </Sider>
    <Layout>
      <Header>
        <NavHeader />
      </Header>
      <Content>
        <div
          style={{
            padding: 24,
            minHeight: `calc(100vh - 108px - 64px)`,
            background: '#fff',
            boxSizing: 'border-box'
            // background: colorBgContainer,
            // borderRadius: borderRadiusLG
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
          <NavFooter />
      </Footer>
    </Layout>
  </Layout>
  </Watermark>
  );
}
