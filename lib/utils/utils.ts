import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Converts a URL pathname to readable text.
 * Handles cases like "front-office", "q34e222342422313", "dashboard", and "/".
 *
 * @param pathname - The URL pathname to be converted.
 * @returns A readable text version of the pathname.
 */
export function convertPathnameToReadableText(pathname: string): string {
  if (!pathname || pathname === '/') {
    return 'Dashboard'; // Handle root path
  }

  // Remove leading and trailing slashes, if any
  const sanitizedPath = pathname.replace(/^\/|\/$/g, '');

  // Split by hyphen and other delimiters, capitalize each word, and join back together
  const readableText = sanitizedPath
    .split('/') // Handle nested paths by converting each segment
    .map((segment) =>
      segment
        .split('-')
        .map((word) => (word.match(/^\d+$/) ? word : capitalizeFirstLetter(word)))
        .join(' ')
    )
    .join(' / ');

  return readableText;
}

/**
 * Capitalizes the first letter of a string.
 *
 * @param str - The string to be capitalized.
 * @returns The string with the first letter capitalized.
 */
function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
