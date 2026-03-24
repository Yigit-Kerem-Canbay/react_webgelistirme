import type { Project } from '../types/project';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await fetch('/data/projects.json');
    if (!response.ok) {
      throw new Error(`HTTP hatası! Durum: ${response.status}`);
    }
    const data: Project[] = await response.json();
    return data;
  } catch (error) {
    console.error('Projeler çekilirken bir hata oluştu:', error);
    throw error;
  }
};
