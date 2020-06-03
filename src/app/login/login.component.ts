import {Component, OnInit} from '@angular/core';
import {User} from '../dto/User';
import {HttpService} from '../HttpService';
import {Router} from '@angular/router';
import {AuthGuard} from '../auth.guard';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [HttpService]
})

export class LoginComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router, private auth: AuthGuard) {
  }

  static buttleActive: boolean = false;

  user: User = new User();

  ngOnInit(): void {
  }

  sendUser(user: User) {
    this.httpService.postDataUser(user).subscribe(() => {
      this.router.navigate(['buttle']);
      LoginComponent.buttleActive = true;
    }, error => {
      console.log('авторизуйся нормально');
    });
  }


}
