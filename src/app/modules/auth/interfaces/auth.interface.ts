export interface IRegisterPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export interface LoginPayload {
  username: string;
  password: string;
}
export interface UserResponse {
  email: string;
  role: string;
  id: number;
  name: string;
  token: string;
}

export class RegisterDTO implements IRegisterPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;

  constructor(data?: IRegisterPayload) {
    if (data) {
      for (var property in data) {
        if (data.hasOwnProperty(property))
          (<any>this)[property] = (<any>data)[property];
      }
    }
  }

  init(data?: any) {
    if (data) {
      this.username = data['username'];
      this.email = data['email'];
      this.password = data['password'];
      this.confirmPassword = data['confirmPassword'];
    }
  }

  static fromJS(data: any): RegisterDTO {
    data = typeof data === 'object' ? data : {};
    let result = new RegisterDTO();
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
