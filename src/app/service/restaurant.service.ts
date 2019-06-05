import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boisson } from '../accueil/accueil.component';
import { MessageService } from './message.service';
import { Connection } from '../addClass/connection';
import { Validation } from '../addClass/validation';
import { AddEmployeForm } from '../addClass/addEmployeForm';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  
  constructor(private http: HttpClient,  private messageService: MessageService) { }

  getAccess(connection: Connection): Observable<any>{
    console.log("+++++++++++++++++++"+connection.nomInterface);
     return this.http.put<Validation>("//localhost:8080/api/access", connection ).pipe(
      catchError(this.handleError('getAccess', []))
    );  
     
  }

  addEmploye(employeForm: AddEmployeForm): Observable<any>{
    return this.http.put<AddEmployeForm>("//localhost:8080/api/addEmploye", employeForm).pipe(
      catchError(this.handleError("addEmploye", []))
    );
  }

  getDroits(): Observable<any>{
    return this.http.get("//localhost:8080/api/getDroits").pipe(
      catchError(this.handleError("getDroits"))
    );
  }

  getEmployes(): Observable<any>{
    return this.http.get("//localhost:8080/api/getEmployes").pipe(
      catchError(this.handleError("getEmployes"))
    );
  }

  deleteEmploye(employeForm: AddEmployeForm): Observable<any>{
    return this.http.post<AddEmployeForm>("//localhost:8080/api/deleteEmploye", employeForm ).pipe(
      catchError(this.handleError("deleteEmploye",[]))
    );
  }
  
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
   
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
/** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('RestaurantService: ' + message);
  }  

}
