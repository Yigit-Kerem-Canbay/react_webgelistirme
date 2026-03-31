import { Input } from '../ui/Input';
import type { Category, SortField, SortOrder } from '../../types/project';

interface ProjectFilterProps {
  search: string;
  setSearch: (search: string) => void;
  category: Category | 'All';
  setCategory: (category: Category | 'All') => void;
  sortField: SortField;
  setSortField: (field: SortField) => void;
  sortOrder: SortOrder;
  setSortOrder: (order: SortOrder) => void;
  totalResults: number;
  filteredResults: number;
}

export function ProjectFilter({
  search,
  setSearch,
  category,
  setCategory,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
  totalResults,
  filteredResults,
}: ProjectFilterProps) {
  const categories: (Category | 'All')[] = ['All', 'Frontend', 'Backend', 'Fullstack', 'Mobile'];

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Search */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1">
          <Input
            label="Proje Ara"
            type="text"
            placeholder="İsim veya açıklama..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Category */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="category" className="text-sm font-medium text-gray-700">Kategori</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value as Category | 'All')}
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'All' ? 'Tümü' : c}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Field */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="sortField" className="text-sm font-medium text-gray-700">Sıralama Ölçütü</label>
          <select
            id="sortField"
            value={sortField}
            onChange={(e) => setSortField(e.target.value as SortField)}
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="year">Yıl</option>
            <option value="title">İsim</option>
          </select>
        </div>

        {/* Sort Order */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">Yön</label>
          <select
            id="sortOrder"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value as SortOrder)}
            className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="desc">Azalan</option>
            <option value="asc">Artan</option>
          </select>
        </div>
      </div>

      {/* Result Count */}
      <div className="mt-4 text-sm text-gray-500 font-medium">
        {filteredResults} / {totalResults} proje gösteriliyor.
      </div>
    </div>
  );
}
