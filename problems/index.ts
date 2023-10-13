import { AttachmentPayload } from '../shared/index';
export interface Problem {
  bookId: string;
  chapterId: string;
  name: string;
  description: string;
  picture?: string;
  position: number;
}
export interface ProblemDB extends Problem {
  id: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}
export type ProblemSeed = Omit<ProblemDB, 'createdAt' | 'updatedAt'>;
export type ProblemSeedPayload = Omit<ProblemSeed, 'picture'> & {
  picture?: AttachmentPayload;
};
export type UpdateProblemSeedPayload = Omit<ProblemSeedPayload, 'id' | 'slug'>;
export interface AddProblem {
  (payload: Problem): Promise<ProblemDB>;
}
export type UpdateProblemPayload = Omit<
  Problem,
  'bookId' | 'chapterId' | 'picture'
> & { picture: AttachmentPayload };
export interface GetChapterProblems {
  (bookId: string, chapterId: string): Promise<ProblemDB[]>;
}

export interface GetProblemBySlug {
  (slug: string): Promise<ProblemDB | null>;
}

export interface DeleteProblem {
  (problem: ProblemDB): Promise<boolean>;
}

export interface UpdateProblem {
  (problemDB: ProblemDB, payload: UpdateProblemPayload): Promise<ProblemDB>;
}
