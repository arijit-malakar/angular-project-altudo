import { Component } from '@angular/core';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.scss']
})
export class TemplatedrivenformComponent {
  userformtdf = {
    "name":"",
    "age":"",
    "email":"",
    "mobile":""
  }
  submitForm(userForm:any){
    console.log("userForm", userForm)
    console.log("userformtdf", this.userformtdf)
  }
}
