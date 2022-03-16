import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginPayload} from 'src/app/shared/models/LoginPayload';
import {RegisterPayload} from 'src/app/shared/models/RegisterPayload';
import {AuthService} from '../../services/auth/auth.service';
import {TokenStorageService} from '../../services/auth/token-storage.service';

@Component({
  selector: 'login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss'],
})
export class LoginRegisterComponent implements OnInit {
  registerPayload: RegisterPayload = new RegisterPayload();
  loginPayload: LoginPayload = new LoginPayload();
  public formLogin: FormGroup;
  data: any;

  isShowPasswodSingIn = false;
  isShowPasswodSignUp = false;
  isShowConfirmPassword = false;

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit(): void {
    // if (this.tokenStorage.getToken()) {
    //   this.isLoggedIn = true;
    //   this.roles = this.tokenStorage.getUser().roles;
    // }
    this.createForm();
  }

  currentClass(isShow: boolean) {
    return isShow ? 'fa fa-eye' : 'fa fa-eye-slash';
  }

  currentType(isShow: boolean) {
    return isShow ? 'text' : 'password';
  }

  onBtnSingIn(element: HTMLInputElement) {
    element.classList.remove('sign-up-mode');
  }

  onBtnSingUp(element: HTMLInputElement) {
    element.classList.remove('sign-up-mode');
    console.log(element.classList.add('sign-up-mode'));
  }

  // onSubmit(): void {
  //   this.authService.login(this.form).subscribe(
  //     (data) => {
  //       this.tokenStorage.saveToken(data.accessToken);
  //       this.tokenStorage.saveUser(data);

  //       this.isLoginFailed = false;
  //       this.isLoggedIn = true;
  //       this.roles = this.tokenStorage.getUser().roles;
  //       this.reloadPage();
  //     },
  //     (err) => {
  //       this.errorMessage = err.error.message;
  //       this.isLoginFailed = true;
  //     }
  //   );
  // }

  reloadPage(): void {
    window.location.reload();
  }

  public register() {
    const resp = this.authService
      .register(this.registerPayload)
      .toPromise()
      .then((data) => console.log(data));
  }

  public login() {
    // console.log(this.formLogin.invalid);
    const res = this.authService
      .login(this.loginPayload)
      .toPromise()
      .then((data) => console.log(data));
  }

  // validate form
  createForm() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
