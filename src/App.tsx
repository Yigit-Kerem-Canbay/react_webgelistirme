import { useState } from 'react'
import { ThemeToggle } from './components/ThemeToggle'
import { Portfolio } from './pages/Portfolio'
import { UIKit } from './pages/UIKit'
import { Layers, User } from 'lucide-react'
import { cn } from './utils/cn'

function App() {
  const [currentPage, setCurrentPage] = useState<'portfolio' | 'uikit'>('portfolio')

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Sticky Top Navigation */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              YKC Portfolio
            </span>
          </div>

          <nav className="flex items-center space-x-1 sm:space-x-4">
            <button
              onClick={() => setCurrentPage('portfolio')}
              className={cn(
                'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                currentPage === 'portfolio'
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
              )}
            >
              <User className="w-4 h-4" />
              <span className="hidden sm:inline">Portfolyo</span>
            </button>
            <button
              onClick={() => setCurrentPage('uikit')}
              className={cn(
                'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                currentPage === 'uikit'
                  ? 'bg-primary/10 text-primary dark:bg-primary/20'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white'
              )}
            >
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">UI Kit</span>
            </button>

            <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content Area Routing */}
      <main>
        {currentPage === 'portfolio' ? <Portfolio /> : <UIKit />}
      </main>
    </div>
  )
}

export default App
