import styles from './index.module.less';
import { Breadcrumb, Switch, Dropdown } from 'antd';
import { MenuFoldOutlined } from '@ant-design/icons';
import storage from '@/utils/storage';
import { useBearStore } from '@/store';

// interface a {
//   key: string;
// }

const NavHeader = () => {
  const { userInfo } = useBearStore();

  const breadList = [{ title: '首页' }, { title: '工作台' }];
  // MenuProps
  const items: any[] = [
    {
      key: '1',
      label: '邮箱：Lucy@mars.com'
    },
    {
      key: '2',
      label: '退出'
    }
  ];

  const onClick: any = (event: any) => {
    if (event.key === 'logout') {
      storage.remove('token');
      location.href = `/login?callback=${encodeURIComponent(location.href)}`;
    }
  };

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{ marginLeft: 10 }} />
      </div>
      <div className='right'>
        <Switch checkedChildren='暗黑' unCheckedChildren='默认' style={{ marginRight: 10 }} />
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.nickName}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavHeader;
