import { AttachmentPayload } from '../shared';
import { ChapterWithProblems } from '../chapters';

export interface Book {
  title: string;
  description: string;
  isbn: string;
  picture: string;
  author: string;
  category: string;
  language: string;
  edition: string;
  editorial: string;
  pages: number;
}
export interface BookDB extends Book {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}
export type UpdateBookPayload = Book & Pick<BookDB, 'slug'>;
export type BookSeed = Book & Pick<BookDB, 'id'>;
export type BookScript = BookSeed & { syncStatus?: 'new' | 'sync' | 'synced' };
export type BookSeedPayload = Omit<BookSeed, 'picture'> & {
  picture: AttachmentPayload;
};
// API Services
export interface SummaryBook {
  book: BookDB;
  chapters: ChapterWithProblems[];
}
export interface AddBook {
  (payload: Book): Promise<BookDB>;
}

export interface GetBooksBySlug {
  (slug: string): Promise<BookDB[]>;
}
export interface SummaryBook {
  book: BookDB;
  chapters: ChapterWithProblems[];
}
