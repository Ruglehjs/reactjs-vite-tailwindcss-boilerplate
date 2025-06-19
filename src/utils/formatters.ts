/**
 * Formats price for Chilean market
 * @param price - Price as string (e.g., "50.000")
 * @param currency - Currency code (e.g., "CLP")
 * @param period - Period (e.g., "mes", "día", "proyecto")
 * @returns Formatted price string
 */
export const formatPrice = (price: string, currency: string, period?: string): string => {
  const formattedPrice = `$${price} ${currency}`
  return period ? `${formattedPrice}/${period}` : formattedPrice
}

/**
 * Formats price with "desde" prefix for starting prices
 * @param price - Price as string
 * @param currency - Currency code
 * @param period - Period
 * @returns Formatted price with "desde" prefix
 */
export const formatStartingPrice = (price: string, currency: string, period?: string): string => {
  const basePrice = formatPrice(price, currency, period)
  return `desde ${basePrice}`
}

/**
 * Gets color classes for TailwindCSS based on color name
 * @param color - Color name (pink, yellow, etc.)
 * @returns Object with TailwindCSS color classes
 */
export const getColorClasses = (color: string) => {
  const colorMap = {
    pink: {
      bg: 'bg-pink-500',
      bgLight: 'bg-pink-50',
      bgGradient: 'bg-gradient-to-br from-pink-500 to-pink-600',
      text: 'text-pink-600',
      textLight: 'text-pink-500',
      border: 'border-pink-500',
      ring: 'ring-pink-500',
      hover: 'hover:bg-pink-600',
      accent: 'accent-pink-500'
    },
    yellow: {
      bg: 'bg-yellow-500',
      bgLight: 'bg-yellow-50',
      bgGradient: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      text: 'text-yellow-600',
      textLight: 'text-yellow-500',
      border: 'border-yellow-500',
      ring: 'ring-yellow-500',
      hover: 'hover:bg-yellow-600',
      accent: 'accent-yellow-500'
    },
    green: {
      bg: 'bg-primary-500',
      bgLight: 'bg-primary-50',
      bgGradient: 'bg-gradient-to-br from-primary-500 to-primary-600',
      text: 'text-black',
      textLight: 'text-gray-800',
      border: 'border-primary-500',
      ring: 'ring-primary-500',
      hover: 'hover:bg-primary-600',
      accent: 'accent-primary-500'
    },
    blue: {
      bg: 'bg-accent-500',
      bgLight: 'bg-accent-50',
      bgGradient: 'bg-gradient-to-br from-accent-500 to-accent-600',
      text: 'text-accent-600',
      textLight: 'text-accent-500',
      border: 'border-accent-500',
      ring: 'ring-accent-500',
      hover: 'hover:bg-accent-600',
      accent: 'accent-accent-500'
    }
  }
  
  return colorMap[color as keyof typeof colorMap] || colorMap.pink
} 