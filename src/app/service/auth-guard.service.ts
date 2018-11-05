import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { RestaurantService } from "../service/restaurant.service";
import { SessionService } from "./session.service";
import { Validation } from "../validation";

@Injectable()
export class AuthGard implements CanActivate{

    constructor(private restaurantService: RestaurantService, private router: Router, private sessions :SessionService){}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean>|Promise<boolean>|boolean{
        let url = document.location.href
        let urlTab = url.split('');
        var i = 0;
        var connectScreen="";
        urlTab.forEach(element => {
           if (element == '/' && i<3) {
               i++;
           }else if (i==3) {
               connectScreen+=element;
           }
       });
        connectScreen=connectScreen.trim();
        let auth = this.sessions.getFromSession("auth");
        let validation= this.sessions.getFromSession("validation");
        console.log("++++++++++++++++++++++++++dans authGartd", validation);
        console.log("++++++++++++++++++++++++++dans authGartd", auth);
        console.log(connectScreen == auth || connectScreen=="accueil");
        console.log(auth);
        console.log(connectScreen);
        if(validation!= null){
            if(validation.ok  && (connectScreen == auth || connectScreen=="accueil") ){
                return true;
            }else{
                this.router.navigate(['/accueil']);
            }
        }else{
            this.router.navigate(['/accueil']);
        }
        
    }
}