import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
    asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', children, asChild = false, ...props }, ref) => {
        const baseClasses = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
        
        const variants = {
            primary: 'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg hover:from-red-700 hover:to-red-600 hover:shadow-xl hover:scale-105',
            secondary: 'bg-red-50 text-red-600 border-2 border-red-200 hover:bg-red-100 hover:border-red-300 hover:scale-105',
            outline: 'border-2 border-red-500 text-red-600 bg-transparent hover:bg-red-500 hover:text-white hover:scale-105'
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm h-9',
            md: 'px-6 py-3 text-base h-11',
            lg: 'px-8 py-4 text-lg h-14'
        };

        if (asChild) {
            return (
                <span
                    ref={ref as React.Ref<HTMLSpanElement>}
                    className={cn(baseClasses, variants[variant], sizes[size], className)}
                >
                    {children}
                </span>
            );
        }

        // Extract only button-specific props for motion.button
        const {
            onClick,
            onMouseEnter,
            onMouseLeave,
            onFocus,
            onBlur,
            disabled,
            type,
            form,
        } = props;

        const buttonProps = {
            onClick,
            onMouseEnter,
            onMouseLeave,
            onFocus,
            onBlur,
            disabled,
            type,
            form,
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseClasses, variants[variant], sizes[size], className)}
                whileTap={{ scale: 0.95 }}
                {...buttonProps}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = 'Button';