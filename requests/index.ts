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

export interface AnswerRequest {
  id: string;
  bookId: string;
  problemId: string;
  createdAt: string;
  type: string;
}

export interface RequestAnswer {
  (request: AnswerRequest): Promise<AnswerRequest>;
}
