import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-sound-waves',
  templateUrl: './sound-waves.component.html',
  styleUrls: ['./sound-waves.component.scss'],
  standalone: true,
})
export class SoundWavesComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('audioElement', { static: true }) audioElement!: ElementRef<HTMLAudioElement>;
  private audioContext!: AudioContext;
  private analyser!: AnalyserNode;
  private animationFrameId!: number;
  private dataArray!: Uint8Array;
  audioSrc = 'assets/tracks/love-4-u-&-me.mp3';
  private canvas!: HTMLCanvasElement;
  private canvasCtx!: CanvasRenderingContext2D;
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
   
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setupAudioVisualization();
    }
  }

  setupAudioVisualization() {
    const audio = this.audioElement.nativeElement;
    this.canvas = document.getElementById('soundWaveCanvas') as HTMLCanvasElement;
    this.canvasCtx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    if (!this.canvasCtx) {
      console.error('Failed to get 2D context');
      return;
    }

    audio.addEventListener('play', () => {
      this.initAudioVisualizer(audio);
      this.animateSoundWave();
    });
  }

  initAudioVisualizer(audio: HTMLAudioElement) {
    this.audioContext = new AudioContext();
    const source = this.audioContext.createMediaElementSource(audio);
    this.analyser = this.audioContext.createAnalyser();
    source.connect(this.analyser);
    this.analyser.connect(this.audioContext.destination);
    this.analyser.fftSize = 2048;
    const bufferLength = this.analyser.frequencyBinCount;
    this.dataArray = new Uint8Array(bufferLength);
  }

  animateSoundWave() {
    requestAnimationFrame(() => this.animateSoundWave());

    this.analyser.getByteTimeDomainData(this.dataArray);

    this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.canvasCtx.lineWidth = 2;

    this.canvasCtx.beginPath();

    const sliceWidth = this.canvas.width * 1.0 / this.dataArray.length;
    let x = 0;

    for (let i = 0; i < this.dataArray.length; i++) {
      const v = this.dataArray[i] / 128.0;
      const y = v * this.canvas.height / 2;

      this.drawSoundWave(this.dataArray[i]);  // Call drawSoundWave with the frequency

      if (i === 0) {
        this.canvasCtx.moveTo(x, y);
      } else {
        this.canvasCtx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    this.canvasCtx.lineTo(this.canvas.width, this.canvas.height / 2);
    this.canvasCtx.stroke();
  }


  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.audioContext) {
      this.audioContext.close();
    }
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

    if (frequency < 128) {
      waveElement.classList.add('low-frequency');
    } else if (frequency >= 128 && frequency < 192) {
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

