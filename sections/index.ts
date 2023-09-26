import { ProblemDB } from '../problems';

export interface Section {
  bookId: string;
  title: string;
  subtitle: string;
  position: number;
}

export interface SectionDB extends Section {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export type UpdateSectionPayload = Partial<
  Pick<Section, 'title' | 'subtitle' | 'position'>
>;

export interface UpdateBookSection {
  (bookId: string, sectionId: string, payload: SectionDB): Promise<SectionDB>;
}

export interface SectionWithProblems extends Section {
  problems: ProblemDB[];
}

export interface DeleteBookSection {
  (bookId: string, sectionId: string): Promise<boolean>;
}

export interface GetSectionService {
  (sectionId: string, bookId: string): Promise<SectionDB>;
}
