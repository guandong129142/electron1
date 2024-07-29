import { useState } from 'react';
import styles from './index.module.less';
import { Form, Button, Input, App } from 'antd';
// import api from "@/api";
// import { Login } from '@/types/api';
// import storage from "@/utils/storage";

export default function LoginFC() {
  const { message } = App.useApp();
  const [loading, setLoading] = useState(false);

  // values: Login.params
  const onFinish = async () => {
    try {
      setLoading(true);
      // const data = await api.login(values);
      setLoading(false);
      // storage.set("token", data.Authorization);
      message.success('登录成功');

      const params = new URLSearchParams(location.search);
      location.href = params.get('callback') || '/';
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    // <App>
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form name='basic' initialValues={{ remember: true }} autoComplete='off' onFinish={onFinish}>
          <Form.Item name='username' rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item name='password' rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button loading={loading} type='primary' htmlType='submit' block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
    // </App>
  );
}
