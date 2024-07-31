import { CommonModule } from '@angular/common';
import { Component, OnInit, HostListener } from '@angular/core';
import { AudioService } from '../services/audio.service';
import { TrackSelectorComponent } from './track-selector/track-selector.component';

@Component({
  selector: 'app-audio-player',
  templateUrl: './audio-player.component.html',
  styleUrls: ['./audio-player.component.scss'],
  imports: [CommonModule, TrackSelectorComponent],
  standalone: true
})
export class AudioPlayerComponent implements OnInit {
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
  lastTap: number = 0;
  public isHidden = false;
 
  constructor(private audioService: AudioService) { }

  ngOnInit(): void {
    this.audioService.initializeAudioContext();
  }

  togglePlay(): void {
    if (this.isPlaying) {
      this.audioService.pause();
    } else {
      this.audioService.play();
    }
    this.isPlaying = !this.isPlaying;
  }

  startAdjustment(event: MouseEvent | TouchEvent, control: string): void {
    this.initialY = this.getY(event);
    if (control === 'volume') {
      this.isAdjustingVolume = true;
      this.initialVolume = this.volume;
    } else if (control === 'low') {
      this.isAdjustingLow = true;
      this.initialGain = this.audioService.getLowFilterGain();
    } else if (control === 'mid') {
      this.isAdjustingMid = true;
      this.initialGain = this.audioService.getMidFilterGain();
    } else if (control === 'high') {
      this.isAdjustingHigh = true;
      this.initialGain = this.audioService.getHighFilterGain();
    }
    event.preventDefault();
  }

  @HostListener('window:mousemove', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  onMove(event: MouseEvent | TouchEvent): void {
    const currentY = this.getY(event);
    const deltaY = this.initialY - currentY;
    const newVolume = Math.min(Math.max(this.initialVolume + deltaY / 300, 0), 1);
    const newValue = Math.min(Math.max(this.initialGain + deltaY / 3, -100), 100);

    if (this.isAdjustingVolume) {
      this.volume = newVolume;
      this.volumeKnobStyle = `rotate(${newVolume * 270 - 135}deg)`;
      this.audioService.setGain(newVolume);
    } else if (this.isAdjustingLow) {
      this.audioService.setLowFilter(newValue);
      this.lowKnobStyle = `rotate(${newValue * 4}deg)`;
    } else if (this.isAdjustingMid) {
      this.audioService.setMidFilter(newValue);
      this.midKnobStyle = `rotate(${newValue * 4}deg)`;
    } else if (this.isAdjustingHigh) {
      this.audioService.setHighFilter(newValue);
      this.highKnobStyle = `rotate(${newValue * 4}deg)`;
    }
    // event.preventDefault();
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

  onDoubleTap(event: MouseEvent): void {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this.lastTap;
    if (tapLength < 500 && tapLength > 0) {
      this.resetKnob('volume');
    }
    this.lastTap = currentTime;
  }

  resetKnob(control: string): void {
    if (control === 'volume') {
      this.volume = 0.5;
      this.volumeKnobStyle = 'rotate(0deg)';
      this.audioService.setGain(0.5);
    } else if (control === 'low') {
      this.lowKnobStyle = 'rotate(0deg)';
      this.audioService.setLowFilter(0);
    } else if (control === 'mid') {
      this.midKnobStyle = 'rotate(0deg)';
      this.audioService.setMidFilter(0);
    } else if (control === 'high') {
      this.highKnobStyle = 'rotate(0deg)';
      this.audioService.setHighFilter(0);
    }
  }
}