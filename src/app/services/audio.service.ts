import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AudioService {
  private audioElement: HTMLAudioElement | undefined;
  private audioContext: AudioContext | undefined;
  private gainNode: GainNode | undefined;
  private lowFilter: BiquadFilterNode | undefined;
  private midFilter: BiquadFilterNode | undefined;
  private highFilter: BiquadFilterNode | undefined;
  private isAudioContextInitialized = false;
  private currentSrc: string = '';

  constructor() {
    if (typeof window !== 'undefined' && typeof Audio !== 'undefined') {
      this.audioElement = new Audio();
      this.audioElement.addEventListener('loadeddata', () => {
        this.play();
      });
      this.audioElement.addEventListener('play', () => {
        if (this.audioContext && this.audioContext.state === 'suspended') {
          this.audioContext.resume();
        }
      });
    }
  }

  setAudioSource(src: string) {
    if (this.audioElement && this.currentSrc !== src) {
      this.currentSrc = src;
      this.audioElement.src = src;
    }
  }

  play() {
    if (this.audioElement) {
      this.audioElement.play().catch(error => {
        console.error('Error playing audio:', error);
      });
    }
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  getAudioElement() {
    return this.audioElement;
  }

  initializeAudioContext() {
    if (!this.isAudioContextInitialized && typeof window !== 'undefined' && this.audioElement) {
      this.audioContext = new AudioContext();
      const track = this.audioContext.createMediaElementSource(this.audioElement);

      this.gainNode = this.audioContext.createGain();
      this.lowFilter = this.audioContext.createBiquadFilter();
      this.lowFilter.type = 'lowshelf';
      this.lowFilter.frequency.setValueAtTime(100, this.audioContext.currentTime);

      this.midFilter = this.audioContext.createBiquadFilter();
      this.midFilter.type = 'peaking';
      this.midFilter.frequency.setValueAtTime(1000, this.audioContext.currentTime);

      this.highFilter = this.audioContext.createBiquadFilter();
      this.highFilter.type = 'highshelf';
      this.highFilter.frequency.setValueAtTime(3000, this.audioContext.currentTime);

      track.connect(this.gainNode);
      this.gainNode.connect(this.lowFilter);
      this.lowFilter.connect(this.midFilter);
      this.midFilter.connect(this.highFilter);
      this.highFilter.connect(this.audioContext.destination);

      this.isAudioContextInitialized = true;
    }
  }

  setGain(value: number) {
    if (this.gainNode) {
      this.gainNode.gain.value = value;
    }
  }

  setLowFilter(value: number) {
    if (this.lowFilter) {
      this.lowFilter.gain.value = value;
    }
  }

  setMidFilter(value: number) {
    if (this.midFilter) {
      this.midFilter.gain.value = value;
    }
  }

  setHighFilter(value: number) {
    if (this.highFilter) {
      this.highFilter.gain.value = value;
    }
  }

  getLowFilterGain(): number {
    return this.lowFilter ? this.lowFilter.gain.value : 0;
  }

  getMidFilterGain(): number {
    return this.midFilter ? this.midFilter.gain.value : 0;
  }

  getHighFilterGain(): number {
    return this.highFilter ? this.highFilter.gain.value : 0;
  }
}