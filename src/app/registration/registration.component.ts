import {Component, OnInit} from '@angular/core';
import {UserReg} from '../dto/UserReg';
import {HttpService} from '../HttpService';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [HttpService]
})
export class RegistrationComponent implements OnInit {

  constructor(private httpService: HttpService, private router: Router) {
  }

  userReg: UserReg = new UserReg();

  ngOnInit(): void {
  }


  sendUserReg(userReg: UserReg) {
    this.httpService.postDataUserReg(userReg).subscribe(() => {
      this.router.navigate(['login']);
    }, error => {
      console.log('регистрируйся нормально');
    });
  }

}
