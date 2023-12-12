import { Component } from '@angular/core'

@Component({
	selector: 'user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
	userUsername = ""
	userPassword = ""

	login() {
		console.log('Logging in user: ', this.userUsername)
	}
}