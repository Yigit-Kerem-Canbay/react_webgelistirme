import { Input } from './Input';
import { FilterState, Category } from '../types/project';

interface ProjectFiltersProps {
    filters: FilterState;
    onSearchChange: (search: string) => void;
    onCategoryChange: (category: Category | '') => void;
    onSortChange: (field: FilterState['sortField'], order: FilterState['sortOrder']) => void;
}

const CATEGORIES: (Category | '')[] = ['Tümü', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];

export function ProjectFilters({ filters, onSearchChange, onCategoryChange, onSortChange }: ProjectFiltersProps) {
    return (
        <div className="bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                {/* Arama Input */}
                <div className="md:col-span-12 lg:col-span-5">
                    <Input
                        label="Proje Ara"
                        placeholder="İsim, açıklama veya teknoloji ara..."
                        value={filters.search}
                        onChange={(e) => onSearchChange(e.target.value)}
                    />
                </div>

                {/* Kategoriler */}
                <div className="md:col-span-8 lg:col-span-5">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Kategori
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {CATEGORIES.map((category) => {
                            const isSelected = filters.category === category || (category === 'Tümü' && filters.category === '');
                            return (
                                <button
                                    key={category}
                                    onClick={() => onCategoryChange(category === 'Tümü' ? '' : category as Category)}
                                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                                        isSelected
                                            ? 'bg-primary text-white shadow-sm'
                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600'
                                    }`}
                                >
                                    {category}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Sıralama */}
                <div className="md:col-span-4 lg:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Sıralama
                    </label>
                    <select
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                        value={`${filters.sortField}-${filters.sortOrder}`}
                        onChange={(e) => {
                            const [field, order] = e.target.value.split('-');
                            onSortChange(field as FilterState['sortField'] | '', order as FilterState['sortOrder']);
                        }}
                    >
                        <option value="-asc">Varsayılan</option>
                        <option value="year-desc">En Yeni (Yıl)</option>
                        <option value="year-asc">En Eski (Yıl)</option>
                        <option value="title-asc">A-Z İsim</option>
                        <option value="title-desc">Z-A İsim</option>
                    </select>
                </div>
            </div>
        </div>
    );
}
