import { ProblemDB } from "../problems";

export interface BookSection {
  bookId: string;
  title: string;
  order: number;
}

export interface BookSectionDB extends BookSection {
  id: string;
  createdAt: string;
}

export interface SectionWithProblems extends BookSection {
  problems: ProblemDB[]
}