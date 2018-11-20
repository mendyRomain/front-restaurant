import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employe',
  templateUrl: './employe.component.html',
  styleUrls: ['./employe.component.css']
})
export class EmployeComponent implements OnInit {
  currentJustify = 'justified';
  alert={
    type:"success",
    message:"test"
  };
  constructor() { }

  ngOnInit() {
  }



}
