import { forwardRef, useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import { cn } from '../utils/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    helpText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, helpText, id, ...props }, ref) => {
        const defaultId = useId()
        const inputId = id || defaultId
        const errorId = `${inputId}-error`
        const helpId = `${inputId}-help`

        // Determine what describe the input based on what text is present
        const describedBy = error ? errorId : helpText ? helpId : undefined

        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                    >
                        {label}
                        {props.required && <span className="text-error ml-1">*</span>}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    aria-invalid={!!error}
                    aria-describedby={describedBy}
                    className={cn(
                        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm',
                        'transition-colors placeholder:text-gray-400',
                        'focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent',
                        'dark:bg-gray-800 dark:border-gray-600 dark:text-white dark:placeholder:text-gray-500',
                        'disabled:cursor-not-allowed disabled:opacity-50',
                        error &&
                        'border-error focus:ring-error focus:border-error dark:border-error dark:focus:ring-error',
                        className
                    )}
                    {...props}
                />
                {error && (
                    <p
                        id={errorId}
                        className="mt-1 text-sm text-error"
                        role="alert"
                    >
                        {error}
                    </p>
                )}
                {helpText && !error && (
                    <p
                        id={helpId}
                        className="mt-1 text-sm text-gray-500 dark:text-gray-400"
                    >
                        {helpText}
                    </p>
                )}
            </div>
        )
    }
)

Input.displayName = 'Input'
