export type Category = 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Category;
  year: number;
  tech: string[];
  featured?: boolean;
}

export type SortField = 'title' | 'year';
export type SortOrder = 'asc' | 'desc';
