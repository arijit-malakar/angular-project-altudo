import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private _service:MainService) {
    console.log(this._service.setAddress().city)
   }

   setLoginDetails(){
    console.log(this._service.setAddress().city);
    return{
      name:"Tushar",
      age:'23',
      phone:123456789,
      city:this._service.setAddress().city
    }
   }
}
