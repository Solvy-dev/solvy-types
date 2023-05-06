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

export interface AddSolution {
  (solution: Solution): Promise<SolutionDB>
}

export interface GetProblemSolutions {
  (bookId: string, problemId: string): Promise<SolutionDB[]>
}
