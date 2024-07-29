import { useNavigate } from 'react-router-dom';
import { Menu } from 'antd';
import { DesktopOutlined, SettingOutlined, TeamOutlined } from '@ant-design/icons';
import styles from './index.module.less';
import { Link } from 'react-router-dom';


const SideMenu = () => {
  const navigate = useNavigate();
  const items = [
    {
      // label: '工作台',
      key: '1',
      icon: <DesktopOutlined />,
      // link: '/dashboard',
      label: (
        <Link to='/dashboard'>
          <span>工作台</span>
        </Link>
      )
    },
    {
      label: '系统管理',
      key: '2',
      icon: <SettingOutlined />,
      children: [
        {
          // label: '用户管理',
          key: '3',
          icon: <TeamOutlined />,
          // link: '/usermanager'
          label: (
            <Link to='/usermanager'>
              <span>用户管理</span>
            </Link>
          )
        }
      ]
    }
  ];
  const handleClickLogo = () => {
    navigate('/');
  };

  return (
    <div>
      <div className={styles.logo} onClick={handleClickLogo}>
        <img src='/img/logo.png' alt='' className={styles.img} />
        <span>木木货运</span>
      </div>
      <Menu mode='inline' theme='dark' items={items}>
        {/* {
          menuItems.map((item: any, index: number) => {
            if (item.children && item.children.length > 0) {
              return (

              )
            } else {
              return (
                <Menu.Item key="1">
                  <Link to={item.link}>
                    {item.icon}
                    <span>{item.label}</span>
                  </Link>
                </Menu.Item>
              )
            }
          })
        } */}
      </Menu>
    </div>
  );
};

export default SideMenu;