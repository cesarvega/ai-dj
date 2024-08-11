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
    'assets/tracks/Synced Rhythms v3.mp3',
    'assets/tracks/aug/Green Velvet - La La Land (Acapella).mp3',
    'assets/tracks/aug/Forgive Them Father Lauryn Hill Sortech Edit Sortech.mp3',
    'assets/tracks/aug/01 - INTRO - NICK MORGAN - Shook Part 3 & Roland Clark (LUIFER Exclusive).mp3',
    'assets/tracks/aug/02 - Warren Blake, Ferra Black - Midnight Train (Extended Mix) [LTF Records].mp3',
    'assets/tracks/aug/07 - Moreno & Prieto - Desde 0 (Edit).wav',
    'assets/tracks/aug/09 - Jay de Lys - Babylon (Original Mix) [elrow Limited] (1).mp3',
    'assets/tracks/aug/09 - Jay de Lys - Babylon (Original Mix) [elrow Limited].mp3',
    'assets/tracks/aug/10 - Lujan Fernandez - My Baby [Overtones Records].mp3',
    'assets/tracks/aug/10 - Nacho Scoppa - Fleek! (Original Mix) [303Lovers].mp3',
    'assets/tracks/aug/12 - Acid DJ, Ramon Bedoya, Irwin Romero - Koki (Original Mix) [Happy Techno Limited].mp3',
    'assets/tracks/aug/13 - Beltran, Harvy Valencia - Animalito [Origins 3AM Tussi Mix] (Original Mix).wav',
    'assets/tracks/aug/13 - Jay de Lys, Tomi&Kesh - W2DO (Original Mix) [NoZZo Music].mp3',
    'assets/tracks/aug/16 - Moreno & Prieto - Desde 0 (Edit).wav',
    'assets/tracks/aug/17 - Sergio Saffe - Sigridd (Original Mix) [Sound D’Elite].mp3',
    'assets/tracks/aug/20 - Steve Aguirre, Juanjo (COL) - Straight Talsk (Original Mix) [Overtones Records].mp3',
    'assets/tracks/aug/21 - Marco Lys - Pull Me Down (Original Mix) [Kittball].mp3',
    'assets/tracks/aug/22 - Ameme, Baron - Like That (LUIFER DJ Remix) (2) MASTER MP3.mp3',
    'assets/tracks/aug/23 - Franky Rizardo, Cara Melín - Make My Body Move (Original Mix) [LTF Records].mp3',
    'assets/tracks/aug/24 - ATM IND ! - David Jager - Tonadas (Original Mix) [LTF Records].mp3',
    'assets/tracks/aug/24 - Bassel Darwish - Rouge [Distance Music].mp3',
    'assets/tracks/aug/25 - Chicks Luv Us - Express Yourself (Original Mix) [Four Thirty Two].mp3',
    'assets/tracks/aug/26 - Franky Rizardo - What We Got [LTF Records].mp3',
    'assets/tracks/aug/Adam Port, Stryv - Move feat. MalachiII (Luifer Dj Remix).wav',
    'assets/tracks/aug/Blackchild (ITA) - So Good (Heat Mix) [Solid Grooves Records].mp3',
    'assets/tracks/aug/Dennis Cruz - Going Down (Original Mix) [MUSE].aiff',
    'assets/tracks/aug/E - MADAFKAA FOREVER (DANI MASI BOOT) - Angel Heredia, Freenzy Music vs DJ Patisso.mp3',
    'assets/tracks/aug/FX - Riva Starr, Federico Grazzini, Robert Owens - Get Over [Snatch!].mp3',
    'assets/tracks/aug/H - Ilario Alicante - Vacaciones En Chile (Hernán Quiez Edit).mp3',
    'assets/tracks/aug/H - Italobros - Baba Yaga (Extended Mix) [LTF Records].mp3',
    'assets/tracks/aug/H - Liva K, Dennis Ferrer - HEY HEY (MASHUP).mp3',
    'assets/tracks/aug/H - Luifer Dj, Niccoxx - Sunset (Original Mix).wav',
    'assets/tracks/aug/H - Modjo - Lady (Obando, Matheo Velez Edit).mp3',
    'assets/tracks/aug/H - Noisse & Sono - Efecto [Clover Records].mp3',
    'assets/tracks/aug/H - Pablo Mancilla, Brothers Vibe, Juan Pachanga - El Baile (LUIFER DJ Mashup).mp3',
    'assets/tracks/aug/Ivan Lopez - Toast [Herloop Records].mp3',
    'assets/tracks/aug/Jay de Lys, Tomi&Kesh - W2DO (Original Mix) [NoZZo Music].mp3',
    'assets/tracks/aug/John Junior, Angie Stone -Wish I Didn’t Miss You (Luifer Dj Edit).wav',
    'assets/tracks/aug/Lumidee - Never Leave You (Ben Miller Edit) [Master].wav',
    'assets/tracks/aug/Niccoxx, Kslö - Badtive (Original Mix) MASTER.wav',
    'assets/tracks/aug/Pheelo - Shadow [GR030].wav',
    'assets/tracks/aug/Rampa, Sparrow & Barbossa - Champion [VOD].aiff',
    'assets/tracks/aug/Rampa, Sparrow & Barbossa - Champion [VOD].mp3',
    'assets/tracks/aug/Ruffneck, Yavahn, Classmatic - Everybody Be Somebody (feat. Yavahn Extended Mix) [Nervous Records].aiff',
    'assets/tracks/aug/Sam Curran - Twilight On The Terrace [Hottrax].mp3',
    'assets/tracks/aug/Sanchez (UK) - Lugar Feliz (Jay De Lys Remix) [Under No Illusion].mp3',
    'assets/tracks/aug/The Rivera Project, Robbie Rivera - Puerto Rico Vibe (Luifer Dj Edit).wav',
    'assets/tracks/aug/Travis Scott - FE!N (DJ TEDDY-O Afro House REMIX).wav',
    'assets/tracks/aug/Travis Scott - FE!N ft. Playboi Carti (LV TECH HOUSE REMIX){FREE DOWNLOAD} Support by Skepta.mp3',
    'assets/tracks/aug/Travist Scott, Playboi Carti - FE!N (LUIFER DJ REMIX)_2.wav',
    'assets/tracks/aug/Walking on a Dream - Phyn edit [EXTENDED MIX].wav'
];

  constructor(private audioService: AudioService) { }

  selectTrack(event: Event): void {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTrack = selectElement.value;
    this.audioService.setAudioSource(selectedTrack);
  }
}
