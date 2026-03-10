import { forwardRef, useState } from 'react'
import type { HTMLAttributes } from 'react'
import { Info, CheckCircle, AlertTriangle, XCircle, X } from 'lucide-react'
import { cn } from '../utils/cn'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'info' | 'success' | 'warning' | 'error'
    title?: string
    dismissible?: boolean
    onDismiss?: () => void
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
    (
        {
            className,
            variant = 'info',
            title,
            children,
            dismissible = false,
            onDismiss,
            ...props
        },
        ref
    ) => {
        const [isVisible, setIsVisible] = useState(true)

        if (!isVisible) return null

        const handleDismiss = () => {
            setIsVisible(false)
            if (onDismiss) onDismiss()
        }

        const variants = {
            info: 'bg-blue-50 text-blue-800 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800',
            success:
                'bg-emerald-50 text-emerald-800 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-300 dark:border-emerald-800',
            warning:
                'bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-800',
            error:
                'bg-red-50 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-800',
        }

        const icons = {
            info: <Info className="h-5 w-5 text-blue-500 dark:text-blue-400" />,
            success: (
                <CheckCircle className="h-5 w-5 text-emerald-500 dark:text-emerald-400" />
            ),
            warning: (
                <AlertTriangle className="h-5 w-5 text-amber-500 dark:text-amber-400" />
            ),
            error: <XCircle className="h-5 w-5 text-red-500 dark:text-red-400" />,
        }

        return (
            <div
                ref={ref}
                role="alert"
                className={cn(
                    'relative flex items-start w-full rounded-lg border p-4 shadow-sm transition-all',
                    variants[variant],
                    className
                )}
                {...props}
            >
                <div className="flex-shrink-0 mr-3">{icons[variant]}</div>

                <div className="flex-1">
                    {title && <h3 className="font-semibold mb-1">{title}</h3>}
                    <div className="text-sm">{children}</div>
                </div>

                {dismissible && (
                    <button
                        type="button"
                        onClick={handleDismiss}
                        aria-label="Kapat"
                        className="flex-shrink-0 ml-auto -mx-1.5 -my-1.5 p-1.5 rounded-lg opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 transition-opacity inline-flex"
                    >
                        <X className="h-5 w-5" />
                    </button>
                )}
            </div>
        )
    }
)

Alert.displayName = 'Alert'
