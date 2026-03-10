import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

export function ThemeToggle() {
    const [theme, setTheme] = useState<'light' | 'dark'>(() => {
        // Check localStorage or system preference during initial render
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
            if (savedTheme) {
                return savedTheme
            }
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                return 'dark'
            }
        }
        return 'light'
    })

    useEffect(() => {
        const root = window.document.documentElement
        if (theme === 'dark') {
            root.classList.add('dark')
        } else {
            root.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-muted dark:hover:bg-muted-dark transition-colors"
            aria-label="Temayi Degistir"
        >
            {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>
    )
}
