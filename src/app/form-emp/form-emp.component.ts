import { Component, OnInit, Input } from '@angular/core';
import { AddEmployeForm } from '../addClass/addEmployeForm';


@Component({
  selector: 'app-form-emp',
  templateUrl: './form-emp.component.html',
  styleUrls: ['./form-emp.component.css']
})
export class FormEmpComponent implements OnInit {
  @Input() employeForm= new AddEmployeForm;
  constructor() { }
  
  ngOnInit() {
  }


  envoieForm(){
    console.log("id employe form = "+this.employeForm.dateEntre);
  }
}
