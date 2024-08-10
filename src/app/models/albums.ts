export type Track = {
    name: string;
    url: string;
    cover: string;
}
  
export interface Album {
    id: number;
    cover: string;
    title: string;
    artist: string;
    tracks: Track[];
}

export const albums: Album[]  = [
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
        { name: 'Fireboy DML, Peace Control - Peru (Luifer Dj Bootleg)', url: 'assets/tracks/Fireboy.wav', cover: 'assets/albums/lf new4.jpg' },
      ]
    }  
  ];