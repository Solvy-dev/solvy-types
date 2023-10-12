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

export type AddBookPayload = Omit<Book, 'picture'> & {
  picture?: AttachmentPayload;
};

export type UpdateBookPayload = Partial<Omit<Book, 'picture'>>;

export type BookSeed = Omit<BookDB, 'createdAt' | 'updatedAt'>;

export type BookSeedPayload = Omit<
  BookDB,
  'createdAt' | 'updatedAt' | 'picture'
> & {
  picture?: AttachmentPayload;
};
export interface SummaryBook {
  book: BookDB;
  chapters: ChapterWithProblems[];
}

export type BookScript = BookSeed & { syncStatus?: 'new' | 'sync' | 'synced' };

// API Services
export interface GetBook {
  (id: string): Promise<BookDB>;
}

export interface AddBook {
  (payload: Book): Promise<BookDB>;
}

export interface FindBookByTitle {
  (title: string): Promise<Book[]>;
}

export interface UpdateBook {
  (bookId: string, payload: UpdateBookPayload): Promise<BookDB>;
}

export interface DeleteBook {
  (bookId: string): Promise<boolean>;
}
export interface GetBookBySlug {
  (slug: string): Promise<BookDB | null>;
}

export interface GetBooksBySlug {
  (slug: string): Promise<BookDB[]>;
}

export interface SummaryBook {
  book: BookDB;
  chapters: ChapterWithProblems[];
}
