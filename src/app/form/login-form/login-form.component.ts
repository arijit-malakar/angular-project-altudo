import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { Login } from './login';
import { AuthguardService } from '../../authguard.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  constructor(private auth: AuthguardService, private router: Router, private route: ActivatedRoute){}

  logintdf = {
    email: '',
    password: '',
  };

  @ViewChild('loginform') formData:any

  @Output() isloggedin = new EventEmitter<any>();

 returnUrl: any;
  login = new Login('test@email.com', 'Test@123')

  btnSubmit(userForm: any) {
    console.log('userForm', userForm);
    console.log('userFormfdf', this.logintdf);
    this.auth
      .login(this.logintdf.email, this.logintdf.password)
      .subscribe((res) => {
        if (res.status == 200) {
          this.isloggedin.emit(true);
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          console.log('returnUrl', this.returnUrl);
          this.router.navigate([this.returnUrl]);
        }
      });
  }

}
