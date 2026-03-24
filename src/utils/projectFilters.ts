import type { Project, Category, FilterState } from '../types/project';

export const filterBySearch = (projects: Project[], search: string): Project[] => {
  if (!search.trim()) return projects;
  const lowerSearch = search.toLowerCase();
  
  return projects.filter(project => 
    project.title.toLowerCase().includes(lowerSearch) || 
    project.description.toLowerCase().includes(lowerSearch) ||
    project.tech.some(tech => tech.toLowerCase().includes(lowerSearch))
  );
};

export const filterByCategory = (projects: Project[], category: Category | '' | 'Tümü'): Project[] => {
  if (!category || category === 'Tümü') return projects;
  return projects.filter(project => project.category === category);
};

export const sortProjects = (
  projects: Project[], 
  sortField: FilterState['sortField'], 
  sortOrder: FilterState['sortOrder']
): Project[] => {
  if (!sortField) return projects;
  
  return [...projects].sort((a, b) => {
    let comparison = 0;
    
    if (sortField === 'year') {
      comparison = a.year - b.year;
    } else if (sortField === 'title') {
      comparison = a.title.localeCompare(b.title);
    }
    
    return sortOrder === 'asc' ? comparison : -comparison;
  });
};

export const applyFilters = (
  projects: Project[],
  { search, category, sortField, sortOrder }: FilterState
): Project[] => {
  let result = filterBySearch(projects, search);
  result = filterByCategory(result, category);
  return sortProjects(result, sortField, sortOrder);
};
