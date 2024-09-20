import { signalStore,
         withState, 
         patchState, 
         withMethods, 
         withComputed
         } from '@ngrx/signals';
import { Album, Book, User, AppState, OmniLocation } from '@app/data-models';
import { withStorageSync } from './storage-ai-sync';
import { albums,books } from '@app/data';
import { Ticket } from '@app/models/ticket';

const initialState: AppState = {
  albums: albums,
  books: books,
  selectedBookDetail: null,
  selectedBookDetailStatus: null,
  donateValue: 0,
  userLogued: null,
  omniLocations: null,
  tickets:  null,
  ticketDetails:null
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
    updateTickets(tickets: Ticket[]): void {
      patchState(store, {tickets: tickets});
    },
    updateTicketDetails(ticket: Ticket): void {
      patchState(store, {ticketDetails: ticket});
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
    },
    logoutUser(): void{
      patchState(store, {userLogued: null})
    },
    updateLocations(locations: OmniLocation[]): void {
      patchState(store, { omniLocations: locations });
    }
  }))
);
