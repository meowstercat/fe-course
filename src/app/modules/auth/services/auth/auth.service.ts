import {
  HttpClient,
  HttpClientModule,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RegisterPayload } from 'src/app/shared/models/RegisterPayload';
import { LoginPayload, RegisterDTO } from '../../interfaces/auth.interface';

const AUTH_API = 'http://localhost:8080/api/auth';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public login(loginPayload: LoginPayload): Observable<any> {
    return this.http.post(
      AUTH_API + '/login',
      {
        username: loginPayload.username,
        password: loginPayload.password,
      },
      httpOptions
    );
  }

  public register(registerPayload: RegisterPayload) {
    return this.http.post(AUTH_API + '/register', registerPayload, {
      responseType: 'text' as 'json',
    });
  }
}
