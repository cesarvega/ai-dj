// Importar Angular Core y otras dependencias necesarias
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AudioOption, SelectedAudio } from '../../../app/interfaces/interfaces'; // Importar las interfaces
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home-detailed',
  templateUrl: './home-detailed.component.html',
  styleUrls: ['./home-detailed.component.scss'],
  imports: [CommonModule, FormsModule,  MatButtonModule],
  standalone: true,
})
export class HomeDetailedComponent implements OnInit, AfterViewInit {
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
  audioSrc = 'assets/sound/wav/intro.wav';
  studyMaterialUrl: string = '';
  audioOptions: AudioOption[] = [
    { name: 'Chapter Intro', src: 'assets/sound/wav/intro.wav' },
    { name: 'Chapter 1: Basic Real Estate Concepts (20 questions)', src: 'assets/sound/wav/real-state-book/01-Audio.wav' },
    { name: 'Chapter 2: Property Ownership and Transfer (20 questions)', src: 'assets/sound/wav/real-state-book/02-Audio.wav' },
    { name: 'Chapter 3: Agency Relationships (20 questions)', src: 'assets/sound/wav/real-state-book/03-Audio.wav' },
    { name: 'Chapter 4: Real Estate Financing (20 questions)', src: 'assets/sound/wav/real-state-book/04-Audio.wav' },
    { name: 'Chapter 5: Real Estate Appraisal (20 questions)', src: 'assets/sound/wav/real-state-book/05-Audio.wav' },
    { name: 'Chapter 6: Real Estate Contracts (20 questions)', src: 'assets/sound/wav/real-state-book/06-Audio.wav' },
    { name: 'Short Answer/Case Study Questions (50 questions)', src: 'assets/sound/wav/real-state-book/07-Audio.wav' },
    { name: 'TRUE AND FALSE (150 Questions)', src: 'assets/sound/wav/real-state-book/08-Audio.wav' },
  ];

  ngOnInit() {
    this.studyMaterialUrl = 'assets/files/StudyMaterial.zip';
    this.loadProgress();

    this.saveProgressInterval = setInterval(() => {
      this.saveProgress();
    }, 30000);
  }

  ngOnDestroy() {
    // Save progress when component is destroyed
    this.saveProgress();
    // Clear the interval
    if (this.saveProgressInterval) {
      clearInterval(this.saveProgressInterval);
    }
  }

  ngAfterViewInit(): void {
    this.audioPlayer.nativeElement.playbackRate = this.playbackRate;
  }

  selectedAudio: SelectedAudio = this.audioOptions[0];

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
    this.loadProgress();
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

  saveProgress() {
    if (this.selectedAudio && this.currentTime > 0) {
      const key = this.selectedAudio.name;
      localStorage.setItem(key, this.currentTime.toString());
    }
  }

  loadProgress() {
    if (this.selectedAudio) {
      const key = this.selectedAudio.name;
      const savedTime = localStorage.getItem(key);
      if (savedTime) {
        this.audioPlayer.nativeElement.currentTime = parseFloat(savedTime);
        this.updateProgress();
      }
    }
  }

}
