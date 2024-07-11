import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-discography',
  standalone: true,
  imports: [SlickCarouselModule, CommonModule],
  templateUrl: './discography.component.html',
  styleUrl: './discography.component.scss'
})
export class DiscographyComponent {
  albums = [
    {
      id: 1,
      cover: 'assets/albums/Album.png',
      title: 'Good Feeling',
      artist: 'cesar-ai-dj',
      tracks: [
        { name: 'Astronaut Depths', url: '/assets/tracks/Astronaut On The Depths.mp3', cover: 'assets/albums/astro.png' },
        { name: 'Good Feeling', url: '/assets/tracks/Good Feeling.mp3', cover: 'assets/albums/good feeling.png' },
        { name: 'Night Seekers v1', url: '/assets/tracks/Night Seekers v1.mp3', cover: 'assets/albums/nightSeek1.png' },
        { name: 'Synced Rhythms v1', url: '/assets/tracks/Synced Rhythms v1.mp3', cover: 'assets/albums/synced1.png' },
        
      ]
    },
    {
      id: 2,
      cover: 'assets/albums/Album1.png',
      title: 'Synced Rhythms',
      artist: 'cesar-ai-dj',
      tracks: [
        { name: 'Love 4 U & Me', url: '/assets/tracks/love-4-u-&-me.mp3', cover: 'assets/albums/love-4-u-&-me.png' },
        { name: 'Night Seekers v2', url: '/assets/tracks/Night Seekers v2.mp3', cover: 'assets/albums/nightSee2.png' },
        { name: 'Synced Rhythms v2', url: '/assets/tracks/Synced Rhythms v2.mp3', cover: 'assets/albums/synced2.png' },
        { name: 'Synced Rhythms v3', url: '/assets/tracks/Synced Rhythms v3.mp3', cover: 'assets/albums/synced3.png' },
      ]
    },
    {
      id: 3,
      cover: 'assets/albums/puertorican-pulse.png',
      title: 'Puertorican Vibes',
      artist: 'Diego-DJ',
      tracks: [
        { name: 'Puertorican Pulse', url: 'assets/tracks/PuertoricanPulse.mp3', cover: 'assets/albums/puertorican-pulse-song.png' },
      ]
    },
    {
      id: 4,
      cover: 'assets/albums/lf new5.jpg',
      title: 'Fresh Music',
      artist: 'Luifer-Dj',
      tracks: [
        { name: 'Loofy - Last Night (Luifer Remix) ', url: 'assets/tracks/Loofy - Last Night (Luifer Dj Bootleg) 2024.wav', cover: 'assets/albums/lf new3.jpg' },
        { name: 'Fireboy DML, Peace Control - Peru (Luifer Dj Bootleg)', url: 'assets/tracks/Fireboy DML, Peace Control - Peru (Luifer Dj Bootleg).wav', cover: 'assets/albums/lf new4.jpg' },
      ]
    },
  //{
   // id: 5,
   // cover: 'assets/albums/lf new2.jpg',
   // title: 'Fresh Music II',
   // artist: 'Luifer-Dj',
   // tracks: [
   //   { name: 'Loofy - Last Night (Luifer Remix) ', url: 'assets/tracks/Loofy - Last Night (Luifer Dj Bootleg) 2024.wav', cover: 'assets/albums/puertorican-pulse-song.png' },
   // ]
 // },


    // Add more albums as needed
  ];

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

  constructor() { }

  ngOnInit(): void {
  }


  toggleDetails(albumId: number) {
    if (this.selectedAlbum && this.selectedAlbum.id === albumId) {
      this.selectedAlbum = null;
    } else {
      this.selectedAlbum = this.albums.find(album => album.id === albumId);
    }
  }

  closeDetails() {
    this.selectedAlbum = null;
  }

  playSong(song:string){

  }
}
