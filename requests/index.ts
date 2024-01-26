export interface BookRequest {
  id: string;
  bookTitle: string;
  type: string;
  author: string;
  editionNumber: string;
  editorial: string;
  picture: string;
  createdAt: string;
}

export interface RequestBook {
  (request: BookRequest): Promise<BookRequest>;
}

export type SolutionRequest = {
  id: string;
  userId: string;
  bookId: string;
  problemId: string;
  createdAt: string;
}
export type RequestSolutionPayload = {
  userId: string;
  bookId: string;
  problemId: string;
  createdAt: string;
}