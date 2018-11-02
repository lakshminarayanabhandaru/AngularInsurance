import { LogoutComponent } from './logout/logout.component';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,
  Router, CanDeactivate, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ContentComponent } from './content/content.component';

@Injectable({
  providedIn:   'root'
})
export class UniversalGuard implements CanActivate, CanDeactivate<LogoutComponent> {

  constructor(private route: Router){

  }

  canDeactivate(component: LogoutComponent, currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    let confirm = window.confirm('Are you sure?');
    const url = currentState.url;
    console.log(currentState);
    if (confirm) {
      //this.route.navigate(['login']);
    }
    return confirm;
  }



  canActivate(
    next:   ActivatedRouteSnapshot,
    state:   RouterStateSnapshot):   Observable<boolean> | Promise<boolean> | boolean {
      console.log(sessionStorage.getItem('logged'));
      let allow = false;
      if (sessionStorage.getItem('logged') === 'true') {
        allow = true;
      } else{
        this.route.navigate(['login','Logged user can only access this page']);
      }
    return allow;
  }
}
