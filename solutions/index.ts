import { Attachment, AttachmentPayload } from '../shared';

export type Solution = {
  bookId: string;
  chapterId: string;
  problemId: string;
  description: string;
  author: string;
  position: number;
  attachment?: Attachment;
};

export type SolutionDB = Solution & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type SolutionSeed = Omit<
  SolutionDB,
  'createdAt' | 'updatedAt' | 'attachment'
> & {
  attachment?: string;
};
export type SolutionSeedPayload = Omit<SolutionSeed, 'attachment'> & {
  attachment?: AttachmentPayload;
};
export type AddSolutionPayload = Solution & {
  attachment: AttachmentPayload;
};

export type UpdateSolutionPayload = Omit<
  Solution,
  'id' | 'bookId' | 'chapterId' | 'problemId'
> & { updatedAt: string };

export interface GetProblemSolutions {
  (bookId: string, problemId: string): Promise<SolutionDB[]>;
}
