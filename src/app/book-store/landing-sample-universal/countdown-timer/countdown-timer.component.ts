import { Component, Input, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CountdownTimerComponent implements OnInit, OnDestroy {

  @Input() expirationDate!: string;

  hours: number = 10;
  minutes: number = 1;
  seconds: number = 1;
  private subscription!: Subscription;
  private countdownStarted: boolean = false; // Evitar reiniciar el temporizador

  constructor() {}

  ngOnInit(): void {
    console.log("Component initialized");
  
  
  }


  startCountdown(): void {
    const targetDate = new Date(this.expirationDate).getTime();

    if (isNaN(targetDate)) {
      console.error('Invalid expiration date');
      return;
    }

    this.subscription = interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft > 0) {
        this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      } else {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.subscription.unsubscribe(); // Detenemos la cuenta regresiva
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Limpiar la suscripción al destruir el componente
    }
  }
}
