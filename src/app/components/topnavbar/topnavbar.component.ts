import { Component } from '@angular/core';
import {smoothlyMenu} from "../../app.helpers";
import { Router } from '@angular/router';

@Component({
    selector: 'topnavbar',
    templateUrl: 'topnavbar.component.html'
})
export class Topnavbar {
    ngOnInit() {

    }

    constructor(private router: Router){

    }
    toggleNavigation(): void {
        jQuery("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }
    logout() {
        localStorage.clear();
      
            this.router.navigate(["login"]);
            //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value))
      
        // location.href='http://to_login_page';
    }
}