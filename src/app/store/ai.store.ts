import { signalStore,
         withState, 
         patchState, 
         withMethods, 
         withComputed
         } from '@ngrx/signals';
import { Album, Book, User, AppState} from '@app/data-models';
import { withStorageSync } from './storage-ai-sync';
import { albums,books } from '@app/data';

const initialState: AppState = {
  albums: albums,
  books: books,
  selectedBookDetail: null,
  selectedBookDetailStatus: null,
  donateValue: 0,
  userLogued: null
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
    updateBooks(books: Book[]): void {
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
    },
    updateUserLogued(user: User): void{
      patchState(store, {userLogued: user})
    }
    //)
    // updateOrder(order: 'asc' | 'desc'): void {
    //   patchState(store, (state) => ({ filter: { ...state.filter, order } }));
    // },
  }))
);