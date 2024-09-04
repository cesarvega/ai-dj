import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { Subscription } from 'rxjs';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-landing-sample-universal',
  standalone: true,
  imports: [CommonModule, CountdownTimerComponent],
  templateUrl: './landing-sample-universal.component.html',
  styleUrl: './landing-sample-universal.component.scss'
})
export class LandingSampleUniversalComponent implements OnInit, OnDestroy {

  hours: number = 1;
  minutes: number = 0;
  seconds: number = 0;
  productSample: any;
  subscriptions: Subscription[] = [];

  
  isPlaying: boolean = false;
  showFeatures: boolean = false;
  showBenefits: boolean = false;
  
  private audio: HTMLAudioElement | undefined;
  samplePhat: string | undefined;
    // Variable para controlar el idioma
  selectedLanguage: 'en' | 'es' = 'en'; // Por defecto inglés
  constructor(private http: HttpClient, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    console.log('LandingSampleUniversalComponent');
    

    this.route.paramMap.subscribe(params => {
      const productId = params.get('id'); // Obtiene el 'id' de la ruta
      if (productId) {
        this.getSample(productId); // Llama a getSample con el ID de la ruta
      }
      
    });
    
    this.startTimer();
  }
  
  toggleLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 'en' ? 'es' : 'en';
  }
  
  getSample(productId: string): void {
    const bookSubscribe = this.http.get(`assets/db/sampleProduct${productId}.json`).subscribe({
      next: res => {
        this.productSample = res;
      },
      error: err => console.error(err),
      complete: () => console.log('Observable emitted the complete notification')
    });
    

    if (this.productSample) {
      this.samplePhat = this.productSample?.samplePhat;
      this.audio = new Audio(this.samplePhat);
      this.audio.load();
    }
    this.subscriptions.push(bookSubscribe);
  }
  buyNowButton(): void {
    window.location.href = environment.paymentUrl;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  

  togglePlay() {
    if (this.isPlaying && this.audio) {
      this.audio.pause();
    } else if (this.audio) {
      this.audio.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  
  toggleFeatures() {
    this.showFeatures = !this.showFeatures;
  }
  
  toggleBenefits() {
    this.showBenefits = !this.showBenefits;
  }
  
  startTimer(): void {
    // Implementa tu lógica de temporizador aquí
  }
}

