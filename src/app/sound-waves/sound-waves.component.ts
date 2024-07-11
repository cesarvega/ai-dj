import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sound-waves',
  templateUrl: './sound-waves.component.html',
  styleUrls: ['./sound-waves.component.scss'],
  standalone: true,
})
export class SoundWavesComponent implements OnInit, OnDestroy {
  @ViewChild('audioElement', { static: true }) audioElement!: ElementRef<HTMLAudioElement>;
  private audioContext!: AudioContext;
  private analyser!: AnalyserNode;
  private dataArray!: Uint8Array;
  private animationFrameId!: number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initAudioVisualizer();
    }
  }


  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
  }

  private initAudioVisualizer(): void {
    // Asegúrate de que AudioContext está definido en el navegador
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContext) {
      console.error('AudioContext is not supported in this browser.');
      return;
    }

    this.audioContext = new AudioContext();
    const audioElement = this.audioElement.nativeElement;
    const audioSource = this.audioContext.createMediaElementSource(audioElement);
    this.analyser = this.audioContext.createAnalyser();
    audioSource.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.analyser.fftSize = 256;
    const bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(bufferLength);
    this.animate();
  }

  private animate(): void {
    this.animationFrameId = requestAnimationFrame(() => this.animate());
    this.analyser.getByteFrequencyData(this.dataArray);
    this.draw();
  }

  private draw(): void {
    const canvas = document.getElementById('soundWaveCanvas') as HTMLCanvasElement;
    const canvasCtx = canvas.getContext('2d');
    if (!canvasCtx) return;
    
    const WIDTH = canvas.width;
    const HEIGHT = canvas.height;
    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);

    const barWidth = (WIDTH / this.dataArray.length) * 2.5;
    let barHeight;
    let x = 0;

    for (let i = 0; i < this.dataArray.length; i++) {
      barHeight = this.dataArray[i];
      canvasCtx.fillStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
      canvasCtx.fillRect(x, HEIGHT - barHeight / 2, barWidth, barHeight / 2);
      x += barWidth + 1;
    }
  }

 
  drawSoundWave(frequency: number) {
    const waveElement = document.createElement('div');
    waveElement.classList.add('wave');

    if (frequency < 200) {
      waveElement.classList.add('low-frequency');
    } else if (frequency >= 200 && frequency < 1000) {
      waveElement.classList.add('mid-frequency');
    } else {
      waveElement.classList.add('high-frequency');
    }

    const waveContainer = document.querySelector('.wave-container');
    if (waveContainer) {
      waveContainer.appendChild(waveElement);
    } else {
      console.error('wave-container element not found');
    }
  }

}
