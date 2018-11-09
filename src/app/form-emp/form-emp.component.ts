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
  @Input() dateNaissance:DateJson;
  @Input() dateEntre:DateJson;
  validation :Validation;
  constructor( private restaurantService :RestaurantService, private http :HttpClient) { }
  
  ngOnInit() {
  }

  testForm(){
    if(null == this.dateEntre){
      this.dateEntre= new DateJson(null, null, null);
      console.log("dans la la condition null");
    }else{
      console.log(this.dateEntre.year);
      this.dateEntre= new DateJson(this.dateEntre.year, this.dateEntre.month,this.dateEntre.day);
    }
    
    this.employeForm.dateEntre=this.dateEntre.updateDateJsontoDaTe();
    console.log(this.employeForm.dateEntre);
  }

  envoieForm(){
    if(null == this.dateNaissance){
      this.dateNaissance= new DateJson(null, null, null);
    }
    console.log(this.employeForm.dateEntre);
    this.validation= new Validation;
    this.employeForm.dateEntre=this.dateNaissance.updateDateJsontoDaTe();
    alert("validation= "+this.employeForm.dateEntre);
    this.restaurantService.addEmploye(this.employeForm).subscribe(validations => {
      this.validation=validations;
      alert("validation= "+this.employeForm.dateEntre);
    });
  }


  

}



