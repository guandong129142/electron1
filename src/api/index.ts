import request from '@/utils/request';
import {
  Login,
  // , User
  Dashboard
} from '@/types/api';

export default {
  login(params: Login.params) {
    return request.post<object>('/login', params, { showLoading: false });
  },
  // 获取用户信息
  getUserInfo() {
    // return request.get<User.userItem>('/user/getUserInfo');
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          userId: 1000017,
          userName: 'test',
          userEmail: 'lucy@mars.com',
          deptId: '63bc31ae',
          deptName: '测试',
          state: 1,
          role: 1,
          roleList: '63bc3187300',
          // createId: number;
          userImg: 'https://www.baidu.com/img/flexible/logo/pc/result@2.png'
        });
      }, 2000);
    });
  },
  // 获取工作台汇总数据
  getReportData() {
    return request.get<Dashboard.ReportData>('/order/dashboard/getReportData');
  },
  // 获取折线图数据
  getLineData() {
    // return request.get<Dashboard.LineData>('/order/dashboard/getLineData');
    return new Promise<any>(resolve => {
      const label = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
      setTimeout(() => {
        resolve({
          label,
          // order: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120],
          order: Array.from({ length: label.length }, () => Math.floor(Math.random() * 200)),
          money: Array.from({ length: label.length }, () => Math.floor(Math.random() * 2000))
        });
      }, 1000);
    });
  }
};
