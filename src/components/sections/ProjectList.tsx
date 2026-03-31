import { useState, useEffect, useMemo } from 'react';
import type { Project, Category, SortField, SortOrder } from '../../types/project';
import { fetchProjects } from '../../services/projectService';
import { filterAndSortProjects } from '../../utils/projectHelpers';
import { ProjectFilter } from '../forms/ProjectFilter';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../ui/Card';
import { Alert, AlertDescription } from '../ui/Alert';

export function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Filter and Sort States
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<Category | 'All'>('All');
  const [sortField, setSortField] = useState<SortField>('year');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');

  useEffect(() => {
    let isMounted = true;

    async function loadProjects() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchProjects();
        if (isMounted) {
          setProjects(data);
        }
      } catch (err: unknown) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message);
          } else {
            setError('Beklenmeyen bir hata oluştu');
          }
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  // useMemo for filtering and sorting
  const filteredProjects = useMemo(() => {
    return filterAndSortProjects(projects, search, category, sortField, sortOrder);
  }, [projects, search, category, sortField, sortOrder]);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projeler</h2>
          <div className="mt-4 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="mb-10">
          <ProjectFilter
            search={search}
            setSearch={setSearch}
            category={category}
            setCategory={setCategory}
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
            totalResults={projects.length}
            filteredResults={filteredProjects.length}
          />
        </div>

        {error && (
          <Alert variant="destructive" className="mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-gray-200 bg-white shadow-sm p-6 space-y-4 animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="flex gap-2 pt-4">
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                  <div className="h-6 bg-gray-200 rounded-full w-16"></div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProjects.length === 0 && !error ? (
          <div className="text-center py-20 px-4 bg-gray-50 rounded-xl border border-gray-200 border-dashed">
            <p className="text-gray-500 text-lg">Arama kriterlerinize uygun proje bulunamadı.</p>
            <button
              onClick={() => {
                setSearch('');
                setCategory('All');
              }}
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Filtreleri Temizle
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow duration-300 group">
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <CardTitle className="text-xl group-hover:text-blue-600 transition-colors">
                      {project.title}
                    </CardTitle>
                    {project.featured && (
                      <span className="flex-shrink-0 inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                        Öne Çıkan
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="flex-1 text-gray-600">
                  <p className="line-clamp-3">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-col items-start gap-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((techItem) => (
                      <span key={techItem} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                        {techItem}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between w-full text-sm text-gray-500 font-medium">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
