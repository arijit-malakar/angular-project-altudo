import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  @ViewChild('loginform') formData:any
  onSubmit(){
    console.log(this.formData.value)
  }
}
