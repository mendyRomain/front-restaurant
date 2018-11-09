import { Component, OnInit, Input } from '@angular/core';
import { AddEmployeForm } from '../addClass/addEmployeForm';
import { RestaurantService } from '../service/restaurant.service'; 
import { Validation } from '../addClass/validation';
import { HttpClient } from '@angular/common/http';
import { DateJson } from '../addClass/dateJson';


@Component({
  selector: 'app-form-emp',
  templateUrl: './form-emp.component.html',
  styleUrls: ['./form-emp.component.css']
})
export class FormEmpComponent implements OnInit {
  @Input() employeForm= new AddEmployeForm;
  @Input() dateNaissance:any;
  @Input() dateEntre:any;
  validation :Validation;
  constructor( private restaurantService :RestaurantService, private http :HttpClient) { }
  
  ngOnInit() {
  }

  testForm(){
    
    
    
  }

  envoieForm(){
    let dateJsonManager= new DateJson();
    this.employeForm.dateEntre=dateJsonManager.updateDateJsontoDaTe(this.dateEntre);
    this.employeForm.dateNaissance= dateJsonManager.updateDateJsontoDaTe(this.dateNaissance);
    alert("dateEntre= "+this.employeForm.dateEntre+"</br> dateNaissance= "+this.employeForm.dateNaissance);
    this.restaurantService.addEmploye(this.employeForm).subscribe(validations => {
      this.validation=validations;
      alert("validation= "+this.validation.phrase);
    });
  }


  

}



