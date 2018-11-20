import { Component, OnInit, Input } from '@angular/core';
import { AddEmployeForm } from '../addClass/addEmployeForm';
import { RestaurantService } from '../service/restaurant.service'; 
import { Validation } from '../addClass/validation';
import { HttpClient } from '@angular/common/http';
import { DateJson } from '../addClass/dateJson';
import {MatSnackBar} from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-form-emp',
  templateUrl: './form-emp.component.html',
  styleUrls: ['./form-emp.component.css']
})
export class FormEmpComponent implements OnInit {

  userForm: FormGroup;
  @Input() dateNaissance:any;
  @Input() dateEntre:any;
  @Input() message:string;
  validation :Validation;
  droits:any[];
  
  

  constructor( private restaurantService :RestaurantService, private http :HttpClient, 
    public snackBar: MatSnackBar, private formBuilder: FormBuilder
  ) { }
  
  ngOnInit() {
    this.initForm();
    this.getDroits();
  }

  initForm(){
    this.userForm=this.formBuilder.group({
      idEmploye: ['', Validators.required],
		  nomEmploye: ['', Validators.required],
		  prenomEmploye: ['', Validators.required],
		  dateNaissance: ['', Validators.required],
		  dateEntre: ['', Validators.required],
    	numSecu: ['', Validators.required],
      mdp: ['', Validators.required],
      statutEmp: ''
    });
  }

  


  openSnackBar(phrase:string, type:string){
    this.snackBar.open(phrase, type, {
      duration:3000,
    })
  }

  onSubmitForm(){
    const formValue = this.userForm.value;
    let dateJsonManager= new DateJson();
    const employeForm = new AddEmployeForm(
      formValue['idEmploye'],
      formValue['nomEmploye'],
      formValue['prenomEmploye'],
      dateJsonManager.updateDateJsontoDaTe(formValue['dateNaissance']),
      dateJsonManager.updateDateJsontoDaTe(formValue['dateEntre']),
      formValue['numSecu'],
      formValue['mdp'],
      formValue['statutEmp']!="" ?formValue['statutEmp']: null
    );
    console.log(employeForm);
    this.restaurantService.addEmploye(employeForm).subscribe(validations => {
      this.validation = validations;

      if(this.validation.ok){
        this.openSnackBar(this.validation.phrase, "success");
      }else{
        this.openSnackBar(this.validation.phrase, "erreur");
      }

    });
    
  }

  getDroits(){
    this.restaurantService.getDroits().subscribe(droit => {
      this.droits = droit;
    });
    
  }

  

}



