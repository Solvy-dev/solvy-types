import { ProblemDB } from "../problems";

export interface BookSection {
  bookId: string;
  title: string;
  subtitle: string;
  order: number;
}

export interface BookSectionDB extends BookSection {
  id: string;
  createdAt: string;
}

export interface UpdateBookSectionPayload {
  title?: string;
  subtitle?: string;
  order?: number;
}

export interface SectionWithProblems extends BookSection {
  problems: ProblemDB[]
}

export interface UpdateBookSection {
  (bookId: string, sectionId: string, payload: BookSectionDB): Promise<BookSectionDB>
}

export interface SectionWithProblems extends BookSection {
  problems: ProblemDB[]
}

export interface DeleteBookSection {
  (bookId: string, sectionId: string): Promise<boolean>
}