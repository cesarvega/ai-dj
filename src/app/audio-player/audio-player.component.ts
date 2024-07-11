import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  imports: [CommonModule],
  standalone: true
})
export class AudioPlayerComponent implements OnInit {
  private audio: HTMLAudioElement | undefined;
  public isPlaying = false;
  public showOrHideControls = true;
  public volume = 0.5;
  public volumeKnobStyle = 'rotate(0deg)';
  public lowKnobStyle = 'rotate(0deg)';
  public midKnobStyle = 'rotate(0deg)';
  public highKnobStyle = 'rotate(0deg)';
  private isAdjustingVolume = false;
  private isAdjustingLow = false;
  private isAdjustingMid = false;
  private isAdjustingHigh = false;
  private initialY = 0;
  private initialVolume = 0.5;
  private initialGain = 0;

  public isHidden = false;

  private audioContext: AudioContext | undefined;
  private gainNode: GainNode | undefined;
  private lowFilter: BiquadFilterNode | undefined;
  private midFilter: BiquadFilterNode | undefined;
  private highFilter: BiquadFilterNode | undefined;

  constructor() {}

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.audio = new window.Audio('../../assets/tracks/good vibes.mp3'); // Ensure the path is correct
      this.audioContext = new AudioContext();
      const track = this.audioContext.createMediaElementSource(this.audio);

      this.gainNode = this.audioContext.createGain();
      this.lowFilter = this.audioContext.createBiquadFilter();
      this.lowFilter.type = 'lowshelf';
      this.lowFilter.frequency.setValueAtTime(200, this.audioContext.currentTime);

      this.midFilter = this.audioContext.createBiquadFilter();
      this.midFilter.type = 'peaking';
      this.midFilter.frequency.setValueAtTime(1000, this.audioContext.currentTime);
      this.midFilter.Q.setValueAtTime(1, this.audioContext.currentTime);

      this.highFilter = this.audioContext.createBiquadFilter();
      this.highFilter.type = 'highshelf';
      this.highFilter.frequency.setValueAtTime(2000, this.audioContext.currentTime);

      track.connect(this.lowFilter).connect(this.midFilter).connect(this.highFilter).connect(this.gainNode).connect(this.audioContext.destination);
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

  startAdjustment(event: MouseEvent | TouchEvent, type: 'volume' | 'low' | 'mid' | 'high'): void {
    switch (type) {
      case 'volume':
        this.isAdjustingVolume = true;
        this.initialVolume = this.volume;
        break;
      case 'low':
        this.isAdjustingLow = true;
        this.initialGain = this.lowFilter?.gain.value ?? 0;
        break;
      case 'mid':
        this.isAdjustingMid = true;
        this.initialGain = this.midFilter?.gain.value ?? 0;
        break;
      case 'high':
        this.isAdjustingHigh = true;
        this.initialGain = this.highFilter?.gain.value ?? 0;
        break;
    }
    this.initialY = this.getY(event);
    event.preventDefault(); // Prevent default touch behavior
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent): void {
    if (this.isAdjustingVolume || this.isAdjustingLow || this.isAdjustingMid || this.isAdjustingHigh) {
      const currentY = this.getY(event);
      const deltaY = this.initialY - currentY;
      
      let newValue = this.initialGain + deltaY / 5;  // Adjust sensitivity if needed
      newValue = Math.min(40, Math.max(-40, newValue));  // Adjust gain range

      let newVolume = this.initialVolume + deltaY / 100;
      newVolume = Math.min(1, Math.max(0, newVolume)); 

      if (this.isAdjustingVolume) {
        this.volume = newVolume;
        this.volumeKnobStyle = `rotate(${newVolume * 270 - 135}deg)`;
        if (this.gainNode) {
          this.gainNode.gain.value = newVolume;
        }
      } else if (this.isAdjustingLow && this.lowFilter) {
        this.lowFilter.gain.value = newValue;
        this.lowKnobStyle = `rotate(${newValue * 4}deg)`;
      } else if (this.isAdjustingMid && this.midFilter) {
        this.midFilter.gain.value = newValue;
        this.midKnobStyle = `rotate(${newValue * 4}deg)`;
      } else if (this.isAdjustingHigh && this.highFilter) {
        this.highFilter.gain.value = newValue;
        this.highKnobStyle = `rotate(${newValue * 4}deg)`;
      }
      event.preventDefault(); // Prevent default touch behavior
    }
  }

  @HostListener('window:mouseup')
  @HostListener('window:touchend')
  onEnd(): void {
    this.isAdjustingVolume = false;
    this.isAdjustingLow = false;
    this.isAdjustingMid = false;
    this.isAdjustingHigh = false;
  }

  toggleVisibility(): void {
    this.isHidden = !this.isHidden;
  }

  toggleHideOrShowControls(): void {
    this.showOrHideControls = !this.showOrHideControls;
  }

  private getY(event: MouseEvent | TouchEvent): number {
    if (event instanceof MouseEvent) {
      return event.clientY;
    } else {
      return event.touches[0].clientY;
    }
  }
}