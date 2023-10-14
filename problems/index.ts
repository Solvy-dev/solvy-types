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
export type UpdateProblemSeedPayload = Pick<
  Problem,
  'name' | 'description' | 'position'
> & { picture?: AttachmentPayload };
export interface AddProblem {
  (payload: Problem): Promise<ProblemDB>;
}
export type UpdateProblemPayload = Omit<
  ProblemDB,
  'id' | 'bookId' | 'chapterId' | 'createdAt' | 'slug'
> & { slug?: string };
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
  (problemDB: ProblemDB, payload: UpdateProblemSeedPayload): Promise<ProblemDB>;
}
