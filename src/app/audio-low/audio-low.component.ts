import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-audio-low',
  templateUrl: './audio-low.component.html',
  styleUrls: ['./audio-low.component.scss'],
  standalone: true
})
export class AudioLowComponent implements OnInit {
  private audio: HTMLAudioElement | undefined;
  public isPlaying = false;
  public gain = 0;  // Gain to control mids
  public knobStyle = 'rotate(0deg)';
  private isAdjusting = false;
  private initialY = 0;
  private initialGain = 0;

  public isHidden = false;

  private audioContext: AudioContext | undefined;
  private gainNode: GainNode | undefined;
  private midFilter: BiquadFilterNode | undefined;

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.audio = new window.Audio('../../assets/tracks/good vibes.mp3'); // Ensure the path is correct
      this.audioContext = new AudioContext();
      const track = this.audioContext.createMediaElementSource(this.audio);

      this.gainNode = this.audioContext.createGain();
      this.midFilter = this.audioContext.createBiquadFilter();
      this.midFilter.type = 'peaking';
      this.midFilter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
      this.midFilter.Q.setValueAtTime(1, this.audioContext.currentTime);  // Control frequencies around 1kHz

      track.connect(this.midFilter).connect(this.gainNode).connect(this.audioContext.destination);
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

  startAdjustment(event: MouseEvent | TouchEvent): void {
    this.isAdjusting = true;
    this.initialY = this.getY(event);
    this.initialGain = this.gain;
    event.preventDefault(); // Prevent default touch behavior
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent): void {
    if (this.isAdjusting) {
      const currentY = this.getY(event);
      const deltaY = this.initialY - currentY;
      let newGain = this.initialGain + deltaY / 5;  // Adjust sensitivity if needed
      newGain = Math.min(40, Math.max(-40, newGain));  // Adjust gain range
      this.gain = newGain;
      this.knobStyle = `rotate(${newGain * 2}deg)`;
      if (this.midFilter) {
        this.midFilter.gain.value = newGain;
      }
      event.preventDefault(); // Prevent default touch behavior
    }
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onEnd(): void {
    this.isAdjusting = false;
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