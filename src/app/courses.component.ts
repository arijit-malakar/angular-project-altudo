import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
    selector: 'app-courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.scss']
})

export class CoursesComponent{
    courses= [1,2]
    courses2 = {
      title: "Angular training",
      student: 5000,
      rating:4.2,
      price:50,
      date: new Date()
    }
    attrdir : any = "Angular course";
    val= 10;

    constructor(_service: MainService){           //Dependency Injection
        console.log(_service.getCourse())
    }
    items: any[] = [
        { name: 'One', val:1 },
        { name: 'Two', val:2},
        { name: 'Three', val:3}
    ]
    forms: any = [
        {
          element: 'text',
          items: [
            {
              field: 'text',
              ngmodel: '',
            },
            {
              field: 'email',
              ngmodel: '',
            },
          ],
        },
        {
          element: 'password',
          items: [
            {
              field: 'password',
              ngmodel: '',
            }
          ],
        },
        {
            element: 'textarea',
            items: [
              {
                field: 'textbox',
                ngmodel: '',
              }
            ],
          }
    ];

    pipeEx="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    
    searchtext="";
    value="Angular";
}