import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private route: Router
  ) {}

  onSubmit() {
    const loginUser = this.loginForm.value;
    this.authService.login(loginUser).subscribe((res: any) => {
      if (res.success) {
        this.userService.setCurrentUser(res.payload.user);
        this.route.navigate(['/movies']);
        this.authService.setToken(res.payload.token);
      }
    });
  }
}
