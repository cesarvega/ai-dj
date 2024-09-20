import { Album, Book, User} from '@app/data-models';
import { Ticket } from '@app/models/ticket';

export type AppState = {
    albums: Album[] | null,
    books: Book[] | null,
    selectedBookDetailStatus: boolean | null,
    selectedBookDetail: Book | null,
    donateValue: number,
    userLogued: User | null,
    omniLocations: any | null,
    tickets: Ticket[] | null
    ticketDetails: Ticket| null
}
