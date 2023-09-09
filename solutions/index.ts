export enum AttachmentType {
  IMAGE = 'IMAGE',
  PDF = 'PDF'
}

export type Attachment = {
  type: AttachmentType;
  url: string;
  fileName: string;
}

export interface Solution {
  bookId: string;
  problemId: string;
  description: string;
  attachment?: Attachment;
  author: string;
}

export interface SolutionDB extends Solution {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type SolutionPayload = Solution & {
  attachment: AttachmentPayload
}

export type AttachmentPayload = {
  type: AttachmentType;
  payload: string; // base64 encoded string
  fileName: string;
}
export interface UpdateSolutionPayload {
  author?: string;
  description?: string;
  attachment?: AttachmentPayload;
  createdAt?: string;
}

export type UpdateSolutionItem = Omit<UpdateSolutionPayload, 'attachment'> & {
  attachment?: Attachment;
}
export interface AddSolution {
  (solution: Solution): Promise<SolutionDB>
}

export interface GetProblemSolutions {
  (bookId: string, problemId: string): Promise<SolutionDB[]>
}
