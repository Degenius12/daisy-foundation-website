/**
 * Format a number as USD currency
 * @param amount - The amount to format
 * @returns Formatted currency string (e.g., "$25.00")
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

/**
 * Format a date according to specified format
 * @param date - The date to format
 * @param format - The format type ('long', 'short', 'datetime')
 * @returns Formatted date string
 */
export function formatDate(
  date: Date | string,
  format: "long" | "short" | "datetime" = "long"
): string {
  const dateObj = typeof date === "string" ? new Date(date) : date;

  // Plain "YYYY-MM-DD" strings parse as UTC midnight. Formatting them in the
  // viewer's local timezone can shift the displayed day backward (e.g. an
  // event on Aug 29 showing as Aug 28 for anyone behind UTC), so pin those
  // to UTC for display. Full timestamps (with a time component) keep local
  // formatting.
  const isDateOnly = typeof date === "string" && /^\d{4}-\d{2}-\d{2}$/.test(date);
  const timeZone = isDateOnly ? "UTC" : undefined;

  switch (format) {
    case "long":
      return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
        timeZone,
      }).format(dateObj);
    case "short":
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        timeZone,
      }).format(dateObj);
    case "datetime":
      return new Intl.DateTimeFormat("en-US", {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone,
      }).format(dateObj);
    default:
      return dateObj.toLocaleDateString("en-US");
  }
}

/**
 * Format a number with thousands separators
 * @param num - The number to format
 * @returns Formatted number string (e.g., "3,200")
 */
export function formatNumber(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

/**
 * Calculate percentage
 * @param value - The current value
 * @param total - The total value
 * @returns Percentage as a number (0-100)
 */
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}
