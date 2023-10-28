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
export type UpdateChapterPayload = Pick<
  ChapterDB,
  'title' | 'subtitle' | 'position' | 'updatedAt'
>;

export interface ChapterWithProblems extends Chapter {
  problems: ProblemDB[];
}

export interface UpdateChapter {
  (bookId: string, chapterId: string, payload: ChapterSeed): Promise<ChapterDB>;
}

export interface ChapterWithProblems extends Chapter {
  problems: ProblemDB[];
}

export interface DeleteChapter {
  (bookId: string, chapterId: string): Promise<boolean>;
}
