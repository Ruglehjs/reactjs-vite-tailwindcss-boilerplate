import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from 'utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-yellow-400 text-yellow-900 hover:bg-yellow-500 dark:bg-yellow-500 dark:text-yellow-950 dark:hover:bg-yellow-600',
        destructive:
          'bg-red-500 text-red-50 hover:bg-red-600 dark:bg-red-900 dark:text-red-50 dark:hover:bg-red-800',
        outline:
          'border border-yellow-200 bg-white hover:bg-yellow-50 hover:text-yellow-900 dark:border-yellow-800 dark:bg-slate-950 dark:hover:bg-yellow-900/10 dark:hover:text-yellow-50',
        secondary:
          'bg-pink-100 text-pink-900 hover:bg-pink-200 dark:bg-pink-900 dark:text-pink-50 dark:hover:bg-pink-800',
        ghost:
          'hover:bg-yellow-100 hover:text-yellow-900 dark:hover:bg-yellow-900/10 dark:hover:text-yellow-50',
        link: 'text-yellow-600 underline-offset-4 hover:underline dark:text-yellow-400'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'size-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
