import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-landing-sample-universal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-sample-universal.component.html',
  styleUrl: './landing-sample-universal.component.scss'
})
export class LandingSampleUniversalComponent {

  hours: number = 1; // Establece las horas iniciales aquí
  minutes: number = 0;
  seconds: number = 0;

  
}