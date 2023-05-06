import { SectionWithProblems } from "../sections";

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

export interface SummaryBook {
  book: BookDB;
  sections: SectionWithProblems[];
}