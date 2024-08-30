import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home-detailed-buttons',
  templateUrl: './home-detailed-buttons.component.html',
  styleUrls: ['./home-detailed-buttons.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class HomeDetailedButtonsComponent {
  isPlaying: boolean = false;
  isDropdownOpen: boolean = false;
  @ViewChild('audioPlayer') audioPlayer: ElementRef<HTMLAudioElement>;
  @ViewChild('timeline', { static: true }) timeline: ElementRef<HTMLDivElement>;
  @ViewChild('progress', { static: true }) progress: ElementRef<HTMLDivElement>;
  audioSrc = 'assets/sound/wav/intro.wav';

  buyNowButton() {
    window.location.href = 'https://buy.stripe.com/00g14KdCo6bh3Sg8ww';
  }

  onMouseOverBook() {
    document.querySelector('.book-image')?.classList.add('hover');
  }

  onMouseOutBook() {
    document.querySelector('.book-image')?.classList.remove('hover');
  }

  audioOptions = [
    { name: 'Intro', src: 'assets/sound/wav/intro.wav' },
    { name: 'Chapter 1', src: 'assets/sound/wav/outro.wav' },
    { name: 'Outro', src: 'assets/sound/wav/outro.wav' },
  ];

  selectedAudio = this.audioOptions[0];

  togglePlayPause() {
    this.isPlaying = !this.isPlaying;
    if (this.isPlaying) {
      this.audioPlayer.nativeElement.play();
    } else {
      this.audioPlayer.nativeElement.pause();
    }
  }

  updateProgress() {
    const duration = this.audioPlayer.nativeElement.duration;
    const currentTime = this.audioPlayer.nativeElement.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    this.progress.nativeElement.style.width = `${progressPercent}%`;
  }

  setDuration() {
    this.updateProgress();
  }

  seek(event: MouseEvent) {
    const timelineWidth = this.timeline.nativeElement.clientWidth;
    const clickX = event.offsetX;
    const duration = this.audioPlayer.nativeElement.duration;
    this.audioPlayer.nativeElement.currentTime = (clickX / timelineWidth) * duration;
  }

  setAudioSource(audio: any) {
    this.audioSrc = audio.src;
    this.isDropdownOpen = false; // Close the dropdown after selecting an audio source
    // Reproducir el nuevo audio automáticamente
    this.selectedAudio = audio
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
