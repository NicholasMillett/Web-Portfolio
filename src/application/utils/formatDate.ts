/**
 * Format a date into a readable string
 * @param date - The date to format
 * @param options - Formatting options
 * @returns Formatted date string
 */
export function formatDate(
  date: Date,
  options: {
    format?: 'short' | 'medium' | 'long';
    includeTime?: boolean;
  } = {}
): string {
  const { format = 'medium', includeTime = false } = options;
  
  // Default date options
  const dateOptions: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: format === 'short' ? 'short' : 'long',
    day: 'numeric',
  };
  
  // Add time options if includeTime is true
  if (includeTime) {
    dateOptions.hour = 'numeric';
    dateOptions.minute = 'numeric';
  }
  
  return new Intl.DateTimeFormat('en-US', dateOptions).format(date);
} 