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
      artist: 'Cesar Vega',
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
      artist: 'Cesar Vega',
      tracks: [
        { name: 'Love 4 U & Me', url: '/assets/tracks/love-4-u-&-me.mp3', cover: 'assets/albums/love-4-u-&-me.png' },
        { name: 'Night Seekers v2', url: '/assets/tracks/Night Seekers v2.mp3', cover: 'assets/albums/nightSee2.png' },
        { name: 'Synced Rhythms v2', url: '/assets/tracks/Synced Rhythms v2.mp3', cover: 'assets/albums/synced2.png' },
        { name: 'Synced Rhythms v3', url: '/assets/tracks/Synced Rhythms v3.mp3', cover: 'assets/albums/synced3.png' },
      ]
    },
    // {
    //   id: 3,
    //   cover: 'assets/albums/synced1.png',
    //   title: 'AI-DJ',
    //   artist: 'Cvega',
    //   tracks: [
    //     { name: 'Synced Rhythms v1', url: 'assets/tracks/Synced Rhythms v1.mp3', cover: 'assets/albums/synced1.png' },
    //     { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3', cover: 'assets/albums/synced1.png' },
    //     { name: 'Disruption', url: 'assets/tracks/track3.mp3', cover: 'assets/albums/synced1.png' },
    //     { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3', cover: 'assets/albums/synced1.png' },
    //     { name: 'Powerave', url: 'assets/tracks/track5.mp3', cover: 'assets/albums/synced1.png' },
    //   ]
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
}
