export interface Problem {
  bookId:           string;
  sectionId:        string;
  name:             string;
  description:      string;
  picture?:         string;
}

export interface ProblemDB extends Problem {
  id:         string;
  slug:       string;
  createdAt:  string;
}

export type UpdateProblemPayload = Pick<ProblemDB, 'name' | 'description' | 'picture' | 'slug'>;

