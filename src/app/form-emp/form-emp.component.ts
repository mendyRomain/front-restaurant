import { Component, OnInit, Input } from '@angular/core';
import { AddEmployeForm } from '../addClass/addEmployeForm';
import { RestaurantService } from '../service/restaurant.service'; 
import { Validation } from '../addClass/validation';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-form-emp',
  templateUrl: './form-emp.component.html',
  styleUrls: ['./form-emp.component.css']
})
export class FormEmpComponent implements OnInit {
  @Input() employeForm= new AddEmployeForm;
  validation :Validation;
  constructor( private restaurantService :RestaurantService, private http :HttpClient) { }
  
  ngOnInit() {
  }


  envoieForm(){
    console.log(this.employeForm.dateEntre);
    this.validation= new Validation;
    this.employeForm.dateNaissance;
    this.restaurantService.addEmploye(this.employeForm).subscribe(validations => {
      this.validation=validations;
      alert("validation= "+this.validation.phrase);
    });
  }
}
