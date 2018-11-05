import { Component, OnInit , NgModule,ChangeDetectorRef, OnDestroy} from '@angular/core';
import { SessionService } from '../service/session.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';
import * as $ from 'jquery';
import {MediaMatcher} from '@angular/cdk/layout';
import { switchMap } from 'rxjs/operators'
import { NgSwitch } from '@angular/common';



@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent implements OnInit {
  
  currentJustify = 'justified';
  title = 'Pizza Connect';
  backOffice: any;
  viewBackOffice: boolean; 
  public role: string; 

  constructor(private sessions: SessionService, private router: Router,private route : ActivatedRoute)
  {}
  
  ngOnInit() {
    this.role = this.route.snapshot.paramMap.get('role');
  }

  deconnecter(){
    this.sessions.saveInSession('backOffice', 'nok'); 
   console.log( this.sessions.getFromSession('backOffice'));
    this.router.navigateByUrl('accueil');
  }

  setRole(roles: string){
    this.role=roles;
  }


}
