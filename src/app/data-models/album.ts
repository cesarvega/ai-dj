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


