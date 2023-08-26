import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

//twMerge optimizes the className we pass it and for better readability and maintainability
//clsx handles the conditional logic for us .