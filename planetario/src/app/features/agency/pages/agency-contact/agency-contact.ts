import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms'; // 
import { Router } from '@angular/router'; // 1. Importar el Router

@Component({
  selector: 'app-agency-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './agency-contact.html',
  styleUrls: ['./agency-contact.css']
})

export class AgencyContact {
  private fb = inject(FormBuilder);
  private router = inject(Router); // 2. Inyectar el Router

  // Definición del formulario con validaciones espaciales
  public contactForm: FormGroup = this.fb.group({
    pilotName: ['', [Validators.required, Validators.minLength(3)]],
    frequency: ['', [Validators.required]], 
    transmission: ['', [Validators.required, Validators.maxLength(500)]]
  });

  sendSignal(): void {
    if (this.contactForm.valid) {
      console.log('Transmisión enviada a la base:', this.contactForm.value);
      // Aquí podrías resetear el formulario tras el envío
      this.contactForm.reset();
      this.router.navigate(['/planets']);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}