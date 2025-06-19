import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function classNames(...classes: unknown[]): string {
  return classes.filter(Boolean).join(' ')
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: string, currency: string = 'CLP'): string {
  const numericPrice = parseFloat(price.replace(/\./g, ''))
  return new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(numericPrice)
}
