export interface Problem {
  bookId:           string;
  sectionId:        string;
  name:             string;
  description:      string;
  picture?:         string;
  position:         number;
}

export interface ProblemDB extends Problem {
  id:         string;
  slug:       string;
  createdAt:  string;
  updatedAt:  string;
}

export type UpdateProblemPayload = Partial<Pick<ProblemDB, 'name' | 'description' | 'picture' | 'slug' | 'position'>>;
export interface AddProblem {
  (payload: Problem): Promise<ProblemDB>
}

export interface GetSectionProblems {
  (bookId: string, sectionId: string): Promise<ProblemDB[]>;
}

export interface GetProblemBySlug {
  (slug: string): Promise<ProblemDB | null>
}


export interface DeleteProblem {
  (problemId: string, sectionId: string, pictureUrl?: string): Promise<boolean>
}

export interface UpdateProblem {
  (problemDB: ProblemDB, payload: UpdateProblemPayload): Promise<ProblemDB>
}
