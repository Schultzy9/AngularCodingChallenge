import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { FormsModule } from '@angular/forms'
import { UserLoginComponent } from './user-login/user-login.component'

describe('AppComponent', () => {
	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				FormsModule
			],
			declarations: [
				AppComponent,
				UserLoginComponent
			],
		}).compileComponents()
	})

	it('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app).toBeTruthy()
	})

	it(`should have as title 'angular-coding-challenge'`, () => {
		const fixture = TestBed.createComponent(AppComponent)
		const app = fixture.componentInstance
		expect(app.title).toEqual('angular-coding-challenge')
	})
	
	it('should contain text "Home Page', () => {
		const fixture = TestBed.createComponent(AppComponent)
		fixture.detectChanges()
		const heading = fixture.nativeElement as HTMLElement
		expect(heading.querySelector('h1')?.textContent).toContain('Home Page')
	})
})
