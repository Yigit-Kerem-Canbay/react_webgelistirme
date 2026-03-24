import type { Project } from '../types/project';
import {
    Card,
    CardImage,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from './Card';
import { Button } from './Button';

interface ProjectCardProps {
    project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Card className="hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
            <div className="relative">
                <CardImage
                    src={project.image}
                    alt={project.title}
                    onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2574&auto=format&fit=crop';
                    }}
                />
                {project.featured && (
                    <span className="absolute top-4 right-4 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full shadow-md">
                        Öne Çıkan
                    </span>
                )}
            </div>
            <CardHeader>
                <div className="flex justify-between items-start gap-2">
                    <CardTitle className="line-clamp-1" title={project.title}>{project.title}</CardTitle>
                    <span className="text-xs font-semibold text-primary/80 bg-primary/10 px-2 py-1 rounded-full shrink-0">
                        {project.category}
                    </span>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 text-sm">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span key={t} className="text-xs px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
                            {t}
                        </span>
                    ))}
                </div>
            </CardContent>
            <CardFooter className="mt-auto flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {project.year}
                </span>
                <Button variant="secondary" size="sm">
                    İncele
                </Button>
            </CardFooter>
        </Card>
    );
}
