import { signalStore, withState, patchState, withMethods, withComputed } from '@ngrx/signals';
import { Album,albums, Track } from '../models/albums';
import { withStorageSync } from './storage-ai-sync';

type AppState = {
  albums: Album[]
}

const initialState: AppState = {
  albums: albums
}

export const aiStore = signalStore(
  { providedIn: 'root' },
  withStorageSync({
    key: 'ai'
  }),
  withState(initialState),
  withMethods((store) => ({
    clearStore(){
      patchState(store, initialState);
    },
    updateAlbums(albums: Album[]): void {
      patchState(store, {albums: albums});
    },
    // updateOrder(order: 'asc' | 'desc'): void {
    //   patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    // },
  }))
);