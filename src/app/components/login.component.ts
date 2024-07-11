import { Component, Input } from '@angular/core';
import { User } from '../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';
export interface LoggedInUser {
  id: number,
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
  refreshToken: string;
}
@Component({
  selector: 'youtube-login',
  template: `
 <mat-card>
  <mat-card-content>
    <form #loginForm="ngForm" (ngSubmit)="onSubmit()">
      <h2>Log In</h2>
      <mat-error *ngIf="!loginValid">
        The username and password were not recognized
      </mat-error>
      <mat-form-field>
        <input matInput placeholder="Email" [(ngModel)]="username" name="username" required>
        <mat-error>
          Please provide a valid email address
        </mat-error>
      </mat-form-field>
      <mat-form-field>
        <input matInput type="password" placeholder="Password" [(ngModel)]="password" name="password" required>
        <mat-error>
          Please provide a valid password
        </mat-error>
      </mat-form-field>
      <button mat-raised-button color="primary" [disabled]="!loginForm.form.valid">Login</button>
    </form>
  </mat-card-content>
</mat-card>
  `,
  styles: [`mat-card {
  max-width: 400px;
  margin: 2em auto;
  text-align: center;
}

mat-form-field {
  display: block;
}`]
})

export class LoginComponent {
  public loginValid = true;
  public username = '';
  public password = '';
  loggedInUser: LoggedInUser = <LoggedInUser>{ email: '', firstName: '', gender: '', id: 0, image: '', lastName: '', refreshToken: '', token: '', username: '' };

  // private _destroySub$ = new Subject<void>();
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,private apiService :ApiService
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/game';
  }

  public ngOnInit(): void {
  }

  //  username: 'emilys',
  // password: 'emilyspass',
  public ngOnDestroy(): void {

  }

  public onSubmit(): void {
    this.loginValid = true;
    this.apiService.loginUser({
      username: this.username,
      password: this.password,
      expiresInMins: 30, // optional, defaults to 60
    }).subscribe(data => {
      console.log(data);
      this.loggedInUser = data;
      console.log(this.loggedInUser)

        localStorage.setItem("auth_token", this.loggedInUser.token)
        if (data)
          this._router.navigate(['dashboard']);
    });

  }
}
