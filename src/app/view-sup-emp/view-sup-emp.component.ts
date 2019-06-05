import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { AddEmployeForm } from '../addClass/addEmployeForm';
import { SelectionModel } from '@angular/cdk/collections';
import { Validation } from '../addClass/validation';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

const ElementData: AddEmployeForm =null;

@Component({
  selector: 'app-view-sup-emp',
  templateUrl: './view-sup-emp.component.html',
  styleUrls: ['./view-sup-emp.component.css']
})
export class ViewSupEmpComponent implements OnInit {
  employes: any[];
  displayedColumns: string[] = ['select','id', 'nomEmploye', 'prenomEmploye', 'numSecu', "action"];
  validation : Validation;
  dataSource: MatTableDataSource<AddEmployeForm>;
  selection = new SelectionModel<AddEmployeForm>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private restaurantService: RestaurantService) {  
  }

  ngOnInit() {
    this.getEmploye();
    
  }

  getEmploye(){
    let emp;
    this.restaurantService.getEmployes().subscribe(employe =>{
      this.employes=employe;
      emp =employe;
      console.log(this.employes);
      this.dataSource= new MatTableDataSource(this.employes);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
    return emp;
  }

  deleteEmp(row: AddEmployeForm){
    console.log("la ligna a supprimé =", row);
    this.restaurantService.deleteEmploye(row).subscribe(validation => {
      this.validation = validation;
      console.log("Dans delete employe = ", this.validation.phrase);
      this.employes=this.getEmploye();
      this.dataSource = new MatTableDataSource(this.employes);
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

}


