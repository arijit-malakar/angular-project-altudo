import { Injectable } from '@angular/core';

@Injectable()

export class MainService {

  constructor() {}
  
    getCourses(){
      return ['c', 'c++', 'java']
    }

    setAddress(){
      return{
      "city": "Damn",
      "state": "Damn",
      "country": "India"
      }
    }
}
