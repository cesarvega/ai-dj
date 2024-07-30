import { Component } from '@angular/core';
import { AudioService } from '../../services/audio.service';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
@Component({
  selector: 'app-track-selector',
  standalone: true,
  imports: [CommonModule,MatSelectModule,
    MatButtonModule,
    MatFormFieldModule,],
  templateUrl: './track-selector.component.html',
  styleUrl: './track-selector.component.scss'
})
export class TrackSelectorComponent {
  public tracks = [
    'assets/tracks/Astronaut On The Depths.mp3',
    'assets/tracks/Feeling Good Remix Tech House.wav',
    'assets/tracks/Fireboy.wav',
    'assets/tracks/Good Feeling.mp3',
    'assets/tracks/Loofy - Last Night (Luifer Dj Bootleg) 2024.wav',
    'assets/tracks/love-4-u-&-me.mp3',
    'assets/tracks/Night Seekers v1.mp3',
    'assets/tracks/Night Seekers v2.mp3',
    'assets/tracks/PuertoricanPulse.mp3',
    'assets/tracks/Synced Rhythms v1.mp3',
    'assets/tracks/Synced Rhythms v2.mp3',
    'assets/tracks/Synced Rhythms v3.mp3'
  ];

  constructor(private audioService: AudioService) { }

  selectTrack(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTrack = selectElement.value;
    this.audioService.setAudioSource(selectedTrack);
  }
}
