import { ProblemDB } from '../problems';

export interface BookChapter {
  bookId: string;
  title: string;
  subtitle: string;
  position: number;
}

export interface BookChapterDB extends BookChapter {
  id: string;
  createdAt: string;
}

export interface UpdateBookChapterPayload {
  title?: string;
  subtitle?: string;
  position?: number;
}

export interface ChapterWithProblems extends BookChapter {
  problems: ProblemDB[];
}

export interface UpdateBookChapter {
  (
    bookId: string,
    chapterId: string,
    payload: BookChapterDB
  ): Promise<BookChapterDB>;
}

export interface ChapterWithProblems extends BookChapter {
  problems: ProblemDB[];
}

export interface DeleteBookChapter {
  (bookId: string, chapterId: string): Promise<boolean>;
}

export interface GetChapterService {
  (chapterId: string, bookId: string): Promise<BookChapterDB>;
}
