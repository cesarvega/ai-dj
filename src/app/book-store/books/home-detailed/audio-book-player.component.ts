// Importar Angular Core y otras dependencias necesarias
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { AudioOption, SelectedAudio } from '../../../app/interfaces/interfaces'; // Importar las interfaces
import { MatButtonModule } from '@angular/material/button';
import { AudioOption, SelectedAudio } from '@app/interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
// read route parameter
import { ActivatedRoute } from '@angular/router';
import { AiStore } from '@app/store/ai.store';


@Component({
  selector: 'app-audio-book-player',
  templateUrl: './audio-book-player.component.html',
  styleUrls: ['./audio-book-player.component.scss'],
  imports: [CommonModule, FormsModule,  MatButtonModule],
  standalone: true,
})
export class AudioBookPlayerComponent implements OnInit, AfterViewInit {
  readonly aiStore = inject(AiStore);
  isPlaying = false;
  playbackRate = 1.0;
  isLoading = false;
  isDropdownOpen = false;
  studyMaterial = true;
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;
  currentTime: number = 0;
  remainingTime: number = 0;
  audioDuration: number = 0;
  saveProgressInterval: any;
  @ViewChild('timeline', { static: true }) timeline!: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress!: ElementRef<HTMLDivElement>;
  audioSrc = '';
  studyMaterialUrl: string = '';
  audioOptions: AudioOption[] = [
    { name: '', src: '' }
  ];
  selectedAudio: SelectedAudio = { name: '', src: '' };
  data:any
  predominantColor: string | undefined; // Color que puedes setear

  constructor(private http: HttpClient,
    private route: ActivatedRoute
  ) { 
    
    
   }

  ngOnInit() {
    // Get the route parameter
    this.route.params.subscribe(params => {
      console.log('param : ' + params);
    });
    this.studyMaterialUrl = 'assets/files/StudyMaterial.zip';
   
    this.http.get(`assets/db/book${this.aiStore.selectedBookDetail()?.bookId}.json`).subscribe({
      next: data => {
        this.data = data;
        this.audioOptions = this.data.bookChaptersAndAudioPaths;
        this.selectedAudio= this.data.bookChaptersAndAudioPaths[0];
        this.audioSrc =  this.data.bookChaptersAndAudioPaths[0].src;
        this.predominantColor = this.data.bookColor;
      },
      error: err => console.error(err.error.message),
      complete: () => console.log('Observable emitted the complete notification')  
    })
  }

  ngOnDestroy() {
    // Save progress when component is destroyed
    // Clear the interval
    if (this.saveProgressInterval) {
      clearInterval(this.saveProgressInterval);
    }
  }

  ngAfterViewInit(): void {
    this.audioPlayer.nativeElement.playbackRate = this.playbackRate;
  }  

  buyNowButton(): void {
    window.location.href = 'https://buy.stripe.com/00g14KdCo6bh3Sg8ww';
  }
  
  onMouseOverBook(): void {
    const bookImage = document.querySelector('.book-image') as HTMLElement | null;
    if (bookImage) {
      bookImage.classList.add('hover');
    }
  }

  onMouseOutBook(): void {
    const bookImage = document.querySelector('.book-image') as HTMLElement | null;
    if (bookImage) {
      bookImage.classList.remove('hover');
    }
  }

  togglePlayPause(): void {
    this.isPlaying = !this.isPlaying;
    if (this.audioPlayer.nativeElement.paused) {
      this.audioPlayer.nativeElement.play();
    } else {
      this.audioPlayer.nativeElement.pause();
    }
  }

  updateProgress(): void {
    const duration = this.audioPlayer.nativeElement.duration;
    const currentTime = this.audioPlayer.nativeElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    this.progress.nativeElement.style.width = `${progressPercent}%`;
    this.currentTime = currentTime;
    this.audioDuration = duration;
    this.remainingTime = duration - currentTime;
  }

  setDuration(): void {
    this.updateProgress();
  }

  seek(event: MouseEvent): void {
    const timelineWidth = this.timeline.nativeElement.clientWidth;
    const clickX = event.offsetX;
    const duration = this.audioPlayer.nativeElement.duration;
    this.audioPlayer.nativeElement.currentTime = (clickX / timelineWidth) * duration;
  }

  setAudioSource(audio: AudioOption): void {
    this.isLoading = true;
    this.audioSrc = audio.src;
    this.isDropdownOpen = false; // Cerrar el dropdown después de seleccionar una fuente de audio
    this.selectedAudio = audio;
    this.isPlaying = false;

    const audioElement = this.audioPlayer.nativeElement;
    audioElement.src = audio.src;
    audioElement.load();
    audioElement.oncanplaythrough = () => {
      this.isLoading = false;
      this.togglePlayPause();
    };
    audioElement.onerror = () => {
      this.isLoading = false;
      console.error('Error loading audio');
    };
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  updateSpeed(): void {
    this.audioPlayer.nativeElement.playbackRate = this.playbackRate;
  }

  increaseSpeed(): void {
    if (this.playbackRate < 2.0) {
      this.playbackRate += 0.1;
      this.updateSpeed();
    }
  }

  decreaseSpeed(): void {
    if (this.playbackRate > 0.5) {
      this.playbackRate -= 0.1;
      this.updateSpeed();
    }
  }

  formatTime(time: number): string {
    const minutes: number = Math.floor(time / 60);
    const seconds: number = Math.floor(time - minutes * 60);
    return `${this.padZero(minutes)}:${this.padZero(seconds)}`;
  }

  padZero(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }

}
