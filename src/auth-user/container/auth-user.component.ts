import { Component } from '@angular/core';

@Component({
    selector: 'ardi-auth-user',
    templateUrl: './auth-user.component.html',
    styleUrls: ['./auth-user.component.css']
})
export class AuthUserComponent {
    
    public loading = false;
    public user = '';
    public password = '';
    public errorType = 'warning';
    public errorMsg = null

    public doLogin() {
        console.log('User: ', this.user);
        console.log('Password: ', this.password);
    }

    public goNewUser(event) {
        console.log(event);
    }
}
