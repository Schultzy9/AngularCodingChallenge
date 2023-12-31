import { ComponentFixture, TestBed } from '@angular/core/testing'

import { UserLoginComponent } from './user-login.component'
import { FormsModule } from '@angular/forms'
import { By } from '@angular/platform-browser'
import { Router } from '@angular/router'

describe('UserLoginComponent', () => {
	let component: UserLoginComponent
	let fixture: ComponentFixture<UserLoginComponent>
	let router: Router

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ FormsModule ],
			declarations: [ UserLoginComponent ]
		})
		.compileComponents()

		fixture = TestBed.createComponent(UserLoginComponent)
		component = fixture.componentInstance
		router = TestBed.inject(Router);

		fixture.detectChanges()
	})

	it('should create', () => {
		expect(component).toBeTruthy()
	})

	it('should disable the submit button when the username is empty', () => {
		const username = fixture.debugElement.query(By.css('#username'))
    	const password = fixture.debugElement.query(By.css('#password'))

		username.nativeElement.value = ''
    	username.nativeElement.dispatchEvent(new Event('input'))

		password.nativeElement.value = 'Password1234'
    	password.nativeElement.dispatchEvent(new Event('input'))

		fixture.detectChanges()
	
		const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button')
		expect(submitButton.disabled).toBeTruthy()
	})

	it('should disable the submit button when the password is empty', () => {
		const username = fixture.debugElement.query(By.css('#username'))
    	const password = fixture.debugElement.query(By.css('#password'))

		username.nativeElement.value = 'CoolUsername'
    	username.nativeElement.dispatchEvent(new Event('input'))

		password.nativeElement.value = ''
    	password.nativeElement.dispatchEvent(new Event('input'))

		fixture.detectChanges()
	
		const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button')
		expect(submitButton.disabled).toBeTruthy()
	})

	it('should disable the submit button when the password does not meet the requirements', () => {
		const username = fixture.debugElement.query(By.css('#username'))
    	const password = fixture.debugElement.query(By.css('#password'))

		username.nativeElement.value = 'CoolUsername'
    	username.nativeElement.dispatchEvent(new Event('input'))

		password.nativeElement.value = 'password'
    	password.nativeElement.dispatchEvent(new Event('input'))

		fixture.detectChanges()
	
		const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button')
		expect(submitButton.disabled).toBeTruthy()
	})

	it('should enable the submit button whith a valid username and password', () => {
		const username = fixture.debugElement.query(By.css('#username'))
    	const password = fixture.debugElement.query(By.css('#password'))

		username.nativeElement.value = 'CoolUsername'
    	username.nativeElement.dispatchEvent(new Event('input'))

		password.nativeElement.value = 'Password1234'
    	password.nativeElement.dispatchEvent(new Event('input'))

		fixture.detectChanges()
	
		const submitButton: HTMLButtonElement = fixture.nativeElement.querySelector('button')
		expect(submitButton.disabled).toBeFalsy()
	})

	it('should send user to the home page on successful login', () => {
		spyOn(router, 'navigate')
		component.userUsername = 'CoolUser'
		component.userPassword = 'Password123'
	
		component.login()
	
		expect(component.failedLogin).toBeFalsy()
		expect(router.navigate).toHaveBeenCalledWith([''])
	})

	it('should not navigate on unsuccessful login', () => {
		spyOn(router, 'navigate')
		component.userUsername = 'BadUser'
		component.userPassword = 'BadPassword'

		component.login()
		fixture.detectChanges()

		const errorMessage = fixture.nativeElement.querySelector('.error-message')
    	expect(errorMessage).toBeTruthy()
		expect(errorMessage.textContent).toContain('Incorrect username or password.')

		expect(component.failedLogin).toBeTruthy()
		expect(router.navigate).not.toHaveBeenCalled()
	})

})
