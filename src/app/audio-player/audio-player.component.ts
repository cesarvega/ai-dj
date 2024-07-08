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

  public isHidden = false;

  private audioContext: AudioContext | undefined;
  private gainNode: GainNode | undefined;

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.audio = new window.Audio('../../assets/tracks/good vibes.mp3'); // Ensure the path is correct
      this.audioContext = new AudioContext();
      const track = this.audioContext.createMediaElementSource(this.audio);
      this.gainNode = this.audioContext.createGain();
      track.connect(this.gainNode).connect(this.audioContext.destination);
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
        this.audioContext?.resume(); // Ensure AudioContext is resumed after user interaction
      }
      this.isPlaying = !this.isPlaying;
    }
  }

  startVolumeAdjustment(event: MouseEvent | TouchEvent): void {
    this.isAdjustingVolume = true;
    this.initialY = this.getY(event);
    this.initialVolume = this.volume;
    event.preventDefault(); // Prevent default touch behavior
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent): void {
    if (this.isAdjustingVolume) {
      const currentY = this.getY(event);
      const deltaY = this.initialY - currentY;
      let newVolume = this.initialVolume + deltaY / 100;
      newVolume = Math.min(1, Math.max(0, newVolume));
      this.volume = newVolume;
      this.volumeKnobStyle = `rotate(${newVolume * 270 - 135}deg)`;
      if (this.gainNode) {
        this.gainNode.gain.value = newVolume;
      }
      event.preventDefault(); // Prevent default touch behavior
    }
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onEnd(): void {
    this.isAdjustingVolume = false;
  }

  toggleVisibility(): void {
    this.isHidden = !this.isHidden;
  }

  private getY(event: MouseEvent | TouchEvent): number {
    if (event instanceof MouseEvent) {
      return event.clientY;
    } else {
      return event.touches[0].clientY;
    }
  }
}