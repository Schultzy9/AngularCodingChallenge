import { Component } from '@angular/core'
import { Router } from '@angular/router'

interface User {
	username: string,
	password: string
}

@Component({
	selector: 'user-login',
	templateUrl: './user-login.component.html',
	styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
	userUsername = ""
	userPassword = ""
	failedLogin = false
	
	validUsers: User[] = [
		{
			username: "CoolUser",
			password: "Password123"
		},
		{
			username: "AnotherCoolUser",
			password: "Password987"
		}
	]

	constructor(private router: Router) {}

	login() {
		console.log('Attempting to log in user: ', this.userUsername)
		const isValidUser = this.validUsers.find( user => user.username == this.userUsername && user.password == this.userPassword)
		if (isValidUser != undefined) {
			this.failedLogin = false
			this.router.navigate([''])
			console.log("Successful login")
		} else {
			this.failedLogin = true
			console.log("Wrong password")
		}
	}
}