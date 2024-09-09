import { Component , OnInit, OnDestroy, PLATFORM_ID, Inject} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit, OnDestroy{

  images: string[] = [
    '/assets/images/png final.png',
    '/assets/images/png.png',
    '/assets/images/PROPUESTA 7.jpg'
  ];

  currentImageIndex: number = 0;
  interval: any;

  constructor (@Inject(PLATFORM_ID) private platformId: object){}



  ngOnInit(): void {
    // Cambiar la imagen automáticamente cada 3 segundos (3000ms)
    if (isPlatformBrowser(this.platformId)) {

    this.interval = setInterval(() => {
      this.nextImage();
    }, 3000);}
  }

  // Cambiar a la siguiente imagen
  nextImage(): void {
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
  }

  ngOnDestroy(): void {
    // Limpiar el intervalo cuando el componente se destruya
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
