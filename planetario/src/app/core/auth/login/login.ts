import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  username = signal('');
  password = signal('');

  errorMessage = signal('');

  onLogin() {
    if (this.username() === 'admin' && this.password() === '1234') {
      this.authService.login(this.username());
      this.router.navigate(['/planets']);
    } else {
      this.errorMessage.set('Credenciales incorrectas');
    }
  }
}