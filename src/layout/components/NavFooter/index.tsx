import styles from './index.module.less';
const NavFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <a href=''>zmoon主页</a>
        <span className='gutter'>|</span>
        <a href=''>React8+TS开发通用后台</a>
        <span className='gutter'>|</span>
        <a href=''>Vue3全栈后台</a>
        <span className='gutter'>|</span>
        <a href=''>Vue全家桶开发小米商城</a>
      </div>
      <div>Copyright ©2023 React18通用后台课程 All Rights Reserved.</div>
    </div>
  );
};

export default NavFooter;