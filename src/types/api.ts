// 返回结果
export interface Result<T = any> {
  code: number
  data: T
  msg: string
}
// 登录
export namespace Login {
  export interface params {
    userName: string
    userPwd: string
  }
}

export namespace User {
  export interface userItem {
    // _id: string;
    userId: number;
    userName: string;
    userEmail: string;
    deptId: string;
    deptName: string;
    state: number;
    role: number;
    roleList: string;
    // createId: number;
    userImg: string;
  }
}

export namespace Dashboard {
  export interface ReportData {
    driverCount: number;
    totalMoney: number;
    orderCount: number;
    cityNum: number;
  }
  export interface LineData {
    label: string[];
    order: number[];
    money: number[];
  }
}