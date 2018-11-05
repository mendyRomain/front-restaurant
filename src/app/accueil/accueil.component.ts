import { Component, OnInit , Input} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Router } from '@angular/router';
import { RestaurantService } from '../service/restaurant.service';
import { Response } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Connection } from '../connection';
import { Validation } from '../validation';
import { SessionService } from '../service/session.service';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';





export class Boisson {
  id: number;
  nomProduit: string;
  prix: number;
  epice: boolean;
  urlImage: string;
  alcool: boolean;
  degre: number;
  numClient: number;
  nomClient: string;
  prenomClient: string;
  emailClient: string; 
}
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  @Input() name;
  title = 'Pizza Connect';
  constructor(private modalService: NgbModal, private restaurantService :RestaurantService, private sessions :SessionService) {}

  open(emploi) {
    
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = emploi;
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'ngbd-modal-component',
  templateUrl: './modalAccueil.html'
})
export class NgbdModalContent  {
  @Input() name;
  mdp: string;
  validation: Validation;
  phrase: string; 
  boisson: Boisson;
  idUser: string;
  connection: Connection;
  constructor(public http: HttpClient,  public activeModal: NgbActiveModal,private router: Router, private restaurantService :RestaurantService, private sessions :SessionService) {}

  accesInterface():void{
   // this.router.navigateByUrl('backoffice');
   this.validation=new Validation;
   this.connection = new Connection();
    this.connection.id = this.idUser;
    this.connection.mdp=this.mdp;
    this.connection.nomInterface=this.name;
    console.log("==============="+this.name);
    console.log("==============="+this.connection.nomInterface);
    this.restaurantService.getAccess(this.connection).subscribe(validations => {
      this.validation= validations;
      console.log(this.validation);
      this.phrase=this.validation.phrase;
      if(this.validation.ok == true){
        if(this.name == "backOffice"){
          this.sessions.saveInSession("auth","backOffice");
          this.sessions.saveInSession("validation",this.validation);
          this.router.navigateByUrl('backoffice/employe');
          this.activeModal.dismiss('Cross click');

        }
        if(this.name == "serveur"){
          this.router.navigateByUrl('serveur');
          this.activeModal.dismiss('Cross click');
        }
        if(this.name == "cuisine"){
          this.router.navigateByUrl('backoffice');
          this.activeModal.dismiss('Cross click');
        }
        if(this.name == "client"){
          this.router.navigateByUrl('backoffice');
          this.activeModal.dismiss('Cross click');
        }
        if(this.name == "caisse"){
          this.router.navigateByUrl('backoffice');
          this.activeModal.dismiss('Cross click');
        }
        
      }
     // this.activeModal.dismiss('Cross click');
    }
    ,error => {console.log(error)}
    
    );
 
   
  }


 
}
