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
export type ProblemSeed = Omit<ProblemDB, 'createdAt' | 'updatedAt' | 'slug' | 'picture'> & {
  slug?: string;
  sync: boolean;
  picture: string | null;
};
export type ProblemSeedPayload = Omit<ProblemSeed, 'picture' | 'slug' | 'sync'> & {
  picture?: AttachmentPayload;
};

export interface AddProblem {
  (payload: Problem): Promise<ProblemDB>;
}
export type UpdateProblemPayload = Omit<
  ProblemDB,
  'id' | 'bookId' | 'chapterId' | 'createdAt' | 'slug'
> & { slug?: string };


export interface GetProblemBySlug {
  (slug: string): Promise<ProblemDB | null>;
}

export type ProblemRequest = { bookId: string; chapterId: string; problemId: string; userId: string; requestType: string }
export type ProblemRequestDB = ProblemRequest & { id: string, createdAt: string, updatedAt: string }