import { Component, OnDestroy,  ElementRef, ViewChild, Inject, OnInit, PLATFORM_ID  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router'; // Importa ActivatedRoute
import { Subscription } from 'rxjs';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { environment } from '@environments/environment';
import { SupabaseService } from '@app/services/supabase.service';




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

  showChapters = false;

  isPlaying: boolean = false;
  showFeatures: boolean = false;
  showBenefits: boolean = false;
  
  private audio: HTMLAudioElement | undefined;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  @ViewChild('bookPreview') bookPreview!:ElementRef<HTMLAudioElement>;
  samplePhat: string | undefined;
    // Variable para controlar el idioma
  selectedLanguage: 'en' | 'es' = 'en'; // Por defecto inglés
  constructor(private http: HttpClient, 
    private route: ActivatedRoute,
     private supabaseService: SupabaseService,   
      @Inject(PLATFORM_ID) private platformId: Object // Inyectamos PLATFORM_ID

    ) { }
  
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

  toggleChapters() {
    this.showChapters = !this.showChapters;
  }
  
  toggleLanguage(): void {
    this.selectedLanguage = this.selectedLanguage === 'en' ? 'es' : 'en';
  }
  
  // getSample(productId: string): void {
  //   const bookSubscribe = this.http.get(`assets/db/sampleProduct${productId}.json`).subscribe({
  //     next: res => {
  //       this.productSample = res;
  //     },
  //     error: err => console.error(err),
  //     complete: () => console.log('Observable emitted the complete notification')
  //   });
    

  //   if (this.productSample) {
  //     this.samplePhat = this.productSample?.samplePhat;
  //     this.audio = new Audio(this.samplePhat);
  //     this.audio.load();
  //   }
  //   this.subscriptions.push(bookSubscribe);
   //}

  getSample(productId: string): void {
    const headers = new HttpHeaders({
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwd2N0a2VxY3pkZWNpcWl0cmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzOTgwNTksImV4cCI6MjAyOTk3NDA1OX0.g5XjjEX9H5NMyetDxmENnIIs3ylN0rwhdxFWe4IiG6k',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlwd2N0a2VxY3pkZWNpcWl0cmpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzOTgwNTksImV4cCI6MjAyOTk3NDA1OX0.g5XjjEX9H5NMyetDxmENnIIs3ylN0rwhdxFWe4IiG6k'
    });
  
    const url = `https://ypwctkeqczdeciqitrjf.supabase.co/rest/v1/products_test?select=*&id=eq.${productId}`;
  
    const bookSubscribe = this.http.get(url, { headers }).subscribe({
      next: (res:any) => {

        this.productSample = JSON.parse(res[0].product_json)

        if (this.productSample) {
              this.samplePhat = this.productSample?.samplePhat;
              this.audio = new Audio(this.samplePhat);
              this.audio.load();
            }
            this.subscriptions.push(bookSubscribe);

      },
      error: err => console.error(err),
      complete: () => console.log('Observable emitted the complete notification')
    });
  }

  buyNowButton(): void {
    window.location.href = this.productSample?.cta.link;
  }
  ngOnDestroy(): void {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
  

  
  playAudio(): void {
    const audioElement = this.audioPlayer.nativeElement;

    if (audioElement.paused) {
      audioElement.play();
      this.isPlaying = true;
    } else {
      audioElement.pause();
      this.isPlaying = false;
    }
  }
  playPreview(): void {
    const audioElement = this.bookPreview.nativeElement;

    if (audioElement.paused) {
      audioElement.play();
      this.isPlaying = true;
    } else {
      audioElement.pause();
      this.isPlaying = false;
    }
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

