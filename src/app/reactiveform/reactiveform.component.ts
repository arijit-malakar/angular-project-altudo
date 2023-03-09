import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent {

  userForm = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      country: new FormControl('')
    }),
  });

  constructor(private fb: FormBuilder){}
  userFormFB = this.fb.group({
    name:['', [Validators.required]],
  })

  get fbData() {
    return this.userForm.controls;
  }

  submitForm() {
    console.log('userForm', this.userForm.value);
  }

  loadData(){
    this.userForm.patchValue({
      name: "abc",
      age: "20",
      email: "xyz@gmail.com",
      mobile: "0123456789",
    })
  }
}
