export class LoginPayload {
  username: string;
  password: string;

  constructor() {}

  init(data?: any) {
    if (data) {
      this.username = data['username'];
      this.password = data['password'];
    }
  }

  static fromJS(data: any): LoginPayload {
    data = typeof data === 'object' ? data : {};
    let result = new LoginPayload();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['username'] = this.username;
    data['password'] = this.password;
    return data;
  }
}
