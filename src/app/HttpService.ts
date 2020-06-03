import {HttpClient} from '@angular/common/http';
import {User} from './dto/User';
import {Injectable} from '@angular/core';
import {UserReg} from './dto/UserReg';

@Injectable()
export class HttpService {
  constructor(private http: HttpClient) {
  }

  postDataUser(user: User) {
    const body = {
      login: user.login,
      password: user.password
    };
    return this.http.post('http://localhost:8888/api/login', body);
  }

  postDataUserReg(userReg: UserReg) {
    const body = {
      login: userReg.login,
      password: userReg.password,
      nickname: userReg.nickname
    };
    return this.http.post('http://localhost:8888/registration', body);
  }
}
