import { signalStore, withState, patchState, withMethods, withComputed } from '@ngrx/signals';
import { Album, albums, books, BookStore, Book } from '../models/albums';
import { withStorageSync } from './storage-ai-sync';

type AppState = {
  albums: Album[],
  books: BookStore | null,
  selectedBookDetailStatus: boolean | null,
  selectedBookDetail: Book | null
  donateValue: number
}

const initialState: AppState = {
  albums: albums,
  books: null,
  selectedBookDetail: null,
  selectedBookDetailStatus: null,
  donateValue: 0

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
    updateSelectedBookDetail(books: Book): void{
      patchState(store, {selectedBookDetail: books})
    },
    updateSelectedBookDetailStatus(boolean: boolean): void{
      patchState(store, {selectedBookDetailStatus: boolean})
    },
    updateDonateValue(value: number): void{
      patchState(store, {donateValue: value})
    }
    //)
    // updateOrder(order: 'asc' | 'desc'): void {
    //   patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    // },
  }))
);