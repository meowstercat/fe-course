export class RegisterPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor() {}

  init(data?: any) {
    if (data) {
      this.username = data['username'];
      this.email = data['email'];
      this.password = data['password'];
      this.confirmPassword = data['confirmPassword'];
    }
  }

  static fromJS(data: any): RegisterPayload {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterPayload();
    result.init(data);
    return result;
  }

  toJSON(data?: any) {
    data = typeof data === 'object' ? data : {};
    data['username'] = this.username;
    data['email'] = this.email;
    data['password'] = this.password;
    data['confirmPassword'] = this.confirmPassword;
    return data;
  }
}
