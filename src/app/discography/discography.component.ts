import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AiStore } from '../store/ai.store';
import { Album } from '@app/data-models';

@Component({
  selector: 'app-discography',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './discography.component.html',
  styleUrl: './discography.component.scss',
  providers: [AiStore]
})
export class DiscographyComponent {
  readonly aiStore = inject(AiStore)
  albums: Album[] | null;

  selectedAlbum: any;

  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    infinite: true,
    centerMode: true,
    variableWidth: true
  };
  
  constructor() {
    this.albums = this.aiStore.albums();    
   }

  ngOnInit(): void {
  }

  toggleDetails(albumId: number) {
    if (this.selectedAlbum && this.selectedAlbum.id === albumId) {
      this.selectedAlbum = null;
    } else {
      this.selectedAlbum = this.albums?.find(album => album.id === albumId);
    }
  }

  closeDetails() {
    this.selectedAlbum = null;
  }

  playSong(song:string){

  }
}
