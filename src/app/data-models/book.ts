
export type BookChapter = {
    name: string;
    src: string;
};

export type Book = {
    bookId: string;
    bookImagePath: string;
    bookAudioPathUrl: string;
    bookChaptersAndAudioPaths: BookChapter[];
    bookAudioSamplePath: string;
    bookTitle: string;
    bookDescription: string;
    bookPrice: number;
    bookPromoPrice: number;
    rating: number,
    userReviews: [{userId: string, rating: number, review: string}],
    bookPromotion: string;
};

// export type BookStore = {
//     books: Book[];
// };