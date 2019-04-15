import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  x = [
    {
      name: 'მიშკა',
      surname: 'მაზანიშვილი',
      personalNumber: '12345678910'
    },
    {
      name: 'მიშკა2',
      surname: 'მაზანიშვილი2',
      personalNumber: '12345678919'
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
