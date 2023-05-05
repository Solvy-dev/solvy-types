export interface Book {
  title: string;
  picture: string;
  author: string;
  category: string;
  language: string;
  edition: string;
  editorial: string;
  pages: number;
}

export interface BookDB extends Book {
  id: string;
  slug: string;
  createdAt: string;
}


export interface BookCategory {
  name: string;
  slug: string;
}

export interface BookCategoryDB extends BookCategory {
  id: string;
  createdAt: string;
}

export interface BookSection {
  bookId: string;
  title: string;
  order: number;
}
export interface BookSectionDB extends BookSection {
  id: string;
  createdAt: string;
}

export type AttachmentType = 'PDF' | 'Image' | 'Audio'

export interface Attachment {
  title:    string;
  url:      string;
  type:     AttachmentType;
}

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

export interface SectionWithProblems extends BookSection {
  problems: ProblemDB[]
}
export interface SummaryBook {
  book: BookDB;
  sections: SectionWithProblems[];
}