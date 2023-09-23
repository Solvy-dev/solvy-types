import { Attachment, AttachmentPayload } from "../shared";

export interface Solution {
  bookId: string;
  sectionId: string;
  problemId: string;
  description: string;
  author: string;
  position: number;
  attachment?: Attachment;
}

export interface SolutionDB extends Solution {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type AddSolutionPayload = Solution & {
  attachment: AttachmentPayload
}

export interface UpdateSolutionPayload {
  author?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  attachment?: Attachment // used to update the table after upload file to the s3 bucket
}

export interface AddSolution {
  (solution: AddSolutionPayload): Promise<SolutionDB>
}

export interface GetProblemSolutions {
  (bookId: string, problemId: string): Promise<SolutionDB[]>
}
