/**
 * Utility function to merge class names using clsx and tailwind-merge.
 * @param inputs Class names or objects to merge.
 * @returns Merged class names string.
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
