export enum AttachmentType {
  IMAGE = 'IMAGE',
  PDF = 'PDF'
}

export interface Attachment {
  type: AttachmentType;
  file: string;
}

export interface Solution {
  bookId: string;
  problemId: string;
  description: string;
  attachment: Attachment;
  author: string;
}

export interface SolutionDB extends Solution {
  id: string;
  createdAt: string;
}

export interface UpdateSolutionPayload {
  author?: string;
  description?: string;
  picture?: string;
}

export interface AddSolution {
  (solution: Solution): Promise<SolutionDB>
}

export interface GetProblemSolutions {
  (bookId: string, problemId: string): Promise<SolutionDB[]>
}
