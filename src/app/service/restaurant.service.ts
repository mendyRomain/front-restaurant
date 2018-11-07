import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Boisson } from '../accueil/accueil.component';
import { MessageService } from './message.service';
import { Connection } from '../addClass/connection';
import { Validation } from '../addClass/validation';

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
  this.messageService.add('HeroService: ' + message);
}

}
