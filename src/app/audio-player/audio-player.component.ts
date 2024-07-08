import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  standalone: true
})
export class AudioPlayerComponent implements OnInit {
  private audio: HTMLAudioElement | undefined;
  public isPlaying = false;
  public volume = 1;
  public volumeKnobStyle = 'rotate(0deg)';
  private isAdjustingVolume = false;
  private initialY = 0;
  private initialVolume = 1;

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.audio = new window.Audio('assets/tracks/PuertoricanPulse.mp3'); // Ensure the path is correct
      this.audio.volume = this.volume;
      this.audio.addEventListener('ended', () => {
        this.isPlaying = false;
      });
    }
  }

  togglePlay(): void {
    if (this.audio) {
      if (this.isPlaying) {
        this.audio.pause();
      } else {
        this.audio.play();
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  startVolumeAdjustment(event: MouseEvent): void {
    this.isAdjustingVolume = true;
    this.initialY = event.clientY;
    this.initialVolume = this.volume;
  }

  @HostListener('window:mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    if (this.isAdjustingVolume) {
      const deltaY = this.initialY - event.clientY;
      let newVolume = this.initialVolume + deltaY / 100;
      newVolume = Math.min(1, Math.max(0, newVolume));
      this.volume = newVolume;
      this.volumeKnobStyle = `rotate(${newVolume * 270 - 135}deg)`;
      if (this.audio) {
        this.audio.volume = newVolume;
      }
    }
  }

  @HostListener('window:mouseup')
  onMouseUp(): void {
    this.isAdjustingVolume = false;
  }
}