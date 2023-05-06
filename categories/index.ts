export interface BookCategory {
  name: string;
  slug: string;
}

export interface BookCategoryDB extends BookCategory {
  id: string;
  createdAt: string;
}