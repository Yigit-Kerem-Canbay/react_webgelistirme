export type Category = 'Frontend' | 'Backend' | 'Fullstack' | 'Mobile';

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  year: number;
  category: Category;
  featured: boolean;
  image: string;
}

export interface FilterState {
  search: string;
  category: Category | '';
  sortField: 'year' | 'title' | '';
  sortOrder: 'asc' | 'desc';
}
