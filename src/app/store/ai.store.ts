import { signalStore, withState, patchState, withMethods, withComputed } from '@ngrx/signals';
import { Album, albums, books, BookStore } from '../models/albums';
import { withStorageSync } from './storage-ai-sync';

type AppState = {
  albums: Album[],
  books: BookStore,
  selectedBookDetailStatus: boolean | null,
  selectedBookDetail: BookStore | null
}

const initialState: AppState = {
  albums: albums,
  books: books,
  selectedBookDetail: null,
  selectedBookDetailStatus: null,

}

export const AiStore = signalStore(
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
    updateBooks(books: BookStore): void {
      patchState(store, {books: books});
    },
    updateSelectedBookDetail(books: BookStore): void{
      patchState(store, {books: books})
    },
    updateSelectedBookDetailStatus(boolean: boolean): void{
      patchState(store, {selectedBookDetailStatus: boolean})
    }
    //)
    // updateOrder(order: 'asc' | 'desc'): void {
    //   patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    // },
  }))
);