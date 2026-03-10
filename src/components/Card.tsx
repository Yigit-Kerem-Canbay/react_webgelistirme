import { forwardRef } from 'react'
import type { HTMLAttributes } from 'react'
import { cn } from '../utils/cn'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    variant?: 'elevated' | 'outlined' | 'filled'
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = 'elevated', children, ...props }, ref) => {
        const variants = {
            elevated:
                'bg-surface dark:bg-surface-dark shadow-md border border-transparent dark:border-gray-700',
            outlined:
                'bg-transparent border border-gray-200 dark:border-gray-700',
            filled: 'bg-muted dark:bg-muted-dark border border-transparent',
        }

        return (
            <div
                ref={ref}
                className={cn(
                    'rounded-xl overflow-hidden text-gray-900 dark:text-gray-100',
                    variants[variant],
                    className
                )}
                {...props}
            >
                {children}
            </div>
        )
    }
)
Card.displayName = 'Card'

export const CardImage = forwardRef<
    HTMLImageElement,
    React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => {
    return (
        <img
            ref={ref}
            className={cn('w-full h-48 object-cover', className)}
            {...props}
        />
    )
})
CardImage.displayName = 'CardImage'

export const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex flex-col space-y-1.5 p-6', className)}
            {...props}
        />
    )
)
CardHeader.displayName = 'CardHeader'

export const CardTitle = forwardRef<HTMLHeadingElement, HTMLAttributes<HTMLHeadingElement>>(
    ({ className, ...props }, ref) => (
        <h3
            ref={ref}
            className={cn('text-xl font-semibold leading-none tracking-tight', className)}
            {...props}
        />
    )
)
CardTitle.displayName = 'CardTitle'

export const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div ref={ref} className={cn('p-6 pt-0', className)} {...props} />
    )
)
CardContent.displayName = 'CardContent'

export const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
    ({ className, ...props }, ref) => (
        <div
            ref={ref}
            className={cn('flex items-center p-6 pt-0 border-t border-gray-100 dark:border-gray-800 mt-4 px-6 py-4 bg-gray-50 dark:bg-gray-800/50', className)}
            {...props}
        />
    )
)
CardFooter.displayName = 'CardFooter'
