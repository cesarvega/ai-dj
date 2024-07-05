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
      cover: 'assets/albums/synced1.png',
      title: 'AI-DJ',
      artist: 'Cvega',
      tracks: [
        { name: 'Synced Rhythms v1', url: 'assets/tracks/Synced Rhythms v1.mp3' },
        { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3' },
        { name: 'Disruption', url: 'assets/tracks/track3.mp3' },
        { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3' },
        { name: 'Powerave', url: 'assets/tracks/track5.mp3' },
      ]
    },
    {
      id: 2,
      cover: 'assets/albums/synced2.png',
      title: 'AI-DJ 1',
      artist: 'Luifersound',
      tracks: [
        { name: 'Synced Rhythms v2', url: 'assets/tracks/Synced Rhythms v2.mp3' },
        { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3' },
        { name: 'Disruption', url: 'assets/tracks/track3.mp3' },
        { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3' },
        { name: 'Powerave', url: 'assets/tracks/track5.mp3' },
      ]
    },
    {
      id: 3,
      cover: 'assets/albums/synced1.png',
      title: 'AI-DJ',
      artist: 'Cvega',
      tracks: [
        { name: 'Synced Rhythms v1', url: 'assets/tracks/Synced Rhythms v1.mp3' },
        { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3' },
        { name: 'Disruption', url: 'assets/tracks/track3.mp3' },
        { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3' },
        { name: 'Powerave', url: 'assets/tracks/track5.mp3' },
      ]
    },
    {
      id: 4,
      cover: 'assets/albums/synced2.png',
      title: 'AI-DJ 1',
      artist: 'Luifersound',
      tracks: [
        { name: 'Synced Rhythms v2', url: 'assets/tracks/Synced Rhythms v2.mp3' },
        { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3' },
        { name: 'Disruption', url: 'assets/tracks/track3.mp3' },
        { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3' },
        { name: 'Powerave', url: 'assets/tracks/track5.mp3' },
      ]
    },
    {
      id: 5,
      cover: 'assets/albums/synced1.png',
      title: 'AI-DJ',
      artist: 'Cvega',
      tracks: [
        { name: 'Synced Rhythms v1', url: 'assets/tracks/Synced Rhythms v1.mp3' },
        { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3' },
        { name: 'Disruption', url: 'assets/tracks/track3.mp3' },
        { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3' },
        { name: 'Powerave', url: 'assets/tracks/track5.mp3' },
      ]
    },
    {
      id: 6,
      cover: 'assets/albums/synced2.png',
      title: 'AI-DJ 1',
      artist: 'Luifersound',
      tracks: [
        { name: 'Synced Rhythms v2', url: 'assets/tracks/Synced Rhythms v2.mp3' },
        { name: 'Influencers Gonna Cry', url: 'assets/tracks/track2.mp3' },
        { name: 'Disruption', url: 'assets/tracks/track3.mp3' },
        { name: 'Intense Dreams', url: 'assets/tracks/track4.mp3' },
        { name: 'Powerave', url: 'assets/tracks/track5.mp3' },
      ]
    },
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
