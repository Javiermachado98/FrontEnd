import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../AuthService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  private authService = inject(AuthService);
  private router = inject(Router);

  // Creamos las variables reactivas (Signals) para el formulario
  username = signal('');
  password = signal('');
  errorMessage = signal('');

  onLogin() {
    // Validación estricta que pide tu compañera/profesora
    if (this.username() === 'admin' && this.password() === '1234') {
      this.authService.login(this.username());
      this.router.navigate(['/books']); // Nos manda directos al catálogo
    } else {
      this.errorMessage.set('⚠️ Credenciales incorrectas. Intenta con admin / 1234');
    }
  }
  onLogout() {
    alert("completar");
  }
}