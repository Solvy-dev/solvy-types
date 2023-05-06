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

export interface UpdateBookSection {
  (section: BookSectionDB, bookId: string): Promise<BookSectionDB>
}

export interface SectionWithProblems extends BookSection {
  problems: ProblemDB[]
}

export interface DeleteBookSection {
  (sectionId: string): Promise<boolean>
}