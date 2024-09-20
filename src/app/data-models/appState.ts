import { Album, Book, User} from '@app/data-models';

export type AppState = {
    albums: Album[] | null,
    books: Book[] | null,
    selectedBookDetailStatus: boolean | null,
    selectedBookDetail: Book | null,
    donateValue: number,
    userLogued: User | null,
    omniLocations: any | null
}
