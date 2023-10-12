import { ProblemDB } from '../problems';

export interface Chapter {
  bookId: string;
  title: string;
  subtitle: string;
  position: number;
}

export interface ChapterDB extends Chapter {
  id: string;
  createdAt: string;
  updatedAt: string;
}
export type ChapterSeed = Omit<ChapterDB, 'createdAt' | 'updatedAt'>;
export interface UpdateChapterPayload {
  title?: string;
  subtitle?: string;
  position?: number;
}

export interface ChapterWithProblems extends Chapter {
  problems: ProblemDB[];
}

export interface UpdateChapter {
  (bookId: string, chapterId: string, payload: ChapterDB): Promise<ChapterDB>;
}

export interface ChapterWithProblems extends Chapter {
  problems: ProblemDB[];
}

export interface DeleteChapter {
  (bookId: string, chapterId: string): Promise<boolean>;
}

export interface GetChapterService {
  (chapterId: string, bookId: string): Promise<ChapterDB>;
}
