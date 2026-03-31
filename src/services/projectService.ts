import type { Project } from '../types/project';

// Mocks a network request to fetch projects
export const fetchProjects = async (): Promise<Project[]> => {
  try {
    // Artificial delay to demonstrate loading state
    await new Promise((resolve) => setTimeout(resolve, 800));

    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error('Projeler yüklenirken hata oluştu:', error);
    throw new Error('Proje verileri yüklenemedi. Lütfen daha sonra tekrar deneyin.');
  }
};
