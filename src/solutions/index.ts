export interface Solution {
  bookId: string;
  problemId: string;
  description: string;
  picture: string;
  author: string;
}

export interface SolutionDB extends Solution {
  id: string;
  createdAt: string;
}