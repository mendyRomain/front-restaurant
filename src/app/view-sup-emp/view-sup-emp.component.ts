import { Component, OnInit, ViewChild } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-view-sup-emp',
  templateUrl: './view-sup-emp.component.html',
  styleUrls: ['./view-sup-emp.component.css']
})
export class ViewSupEmpComponent implements OnInit {
  employes: any[];
  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private restaurantService: RestaurantService) {
    this.dataSource = new MatTableDataSource(this.employes);
  }

  ngOnInit() {
    this.getEmploye();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getEmploye(){
    console.log("dans get EMploye");
    this.restaurantService.getEmployes().subscribe(employe =>{
      this.employes=employe;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  

}
