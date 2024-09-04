import { Component, Input, OnInit, OnDestroy, isStandalone } from '@angular/core';
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

  @Input() expirationDate!: string; // Input to receive expiration date as a string

  hours: number = 10;
  minutes: number = 1;
  seconds: number = 1;
  private subscription!: Subscription;

  constructor(){
    this.startCountDown()
  } 
  ngOnInit(): void {
    
  }

  startCountdown(): void {
    const targetDate = new Date(this.expirationDate).getTime();
    console.log("este es el targetDate"); // Verifica si la fecha está llegando correctamente
   // console.log(targetDate); // Verifica si la fecha está llegando correctamente

    this.subscription = interval(1000).subscribe(() => {
      const now = new Date().getTime();
      const timeLeft = targetDate - now;

      if (timeLeft > 0) {
        this.hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        this.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        this.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
     //  console.log(this.hours )
      } else {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
        this.subscription.unsubscribe(); // Stop the countdown when time is up
      
      }
    });
  }

  startCountDown(){
    this.startCountdown();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe(); // Clean up the subscription
    }
  }
}