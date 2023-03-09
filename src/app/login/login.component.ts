import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../main.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
// export class LoginComponent {
export class LoginComponent{
  toggle:boolean = true;
  @Input() counter:any;
  constructor(_service:MainService, private loginService:LoginService){
   console.log("login courses", _service.getCourses()) ;
   console.log("SetCity", loginService.setLoginDetails().city) ;
  }
  textToggle(){
    this.toggle = this.toggle ? false : true;
  }
}
