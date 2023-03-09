import { Component } from '@angular/core';
import { MainService } from './main.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {

   pipeSummary : string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

    searchtext="";
    value="Angular"

   courses2: any = [1, 2];
   courses = {
    title: "Angular training",
    student: 5000,
    rating:4.2,
    price:50,
    date: new Date()
  }

  items: any[] = [
    { name: 'One', val: 1 },
    { name: 'Two', val: 2 },
    { name: 'Three', val: 3 },
  ];

  selectedValue: string = 'One';

  val : number = 1;

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

  attrdir : any = "Angular course"

  constructor(_service: MainService) {
    console.log('courses courses', _service.getCourses());
  }
}
