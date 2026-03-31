import type { Project, SortField, SortOrder, Category } from '../types/project';

export const filterAndSortProjects = (
  projects: Project[],
  search: string,
  category: Category | 'All',
  sortField: SortField,
  sortOrder: SortOrder
): Project[] => {
  // 1. Filter
  const filtered = projects.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase()) || 
                          project.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || project.category === category;
    
    return matchesSearch && matchesCategory;
  });

  // 2. Sort
  return filtered.sort((a, b) => {
    let comparison = 0;
    
    if (sortField === 'title') {
      comparison = a.title.localeCompare(b.title, 'tr');
    } else if (sortField === 'year') {
      comparison = a.year - b.year;
    }

    return sortOrder === 'asc' ? comparison : -comparison;
  });
};
