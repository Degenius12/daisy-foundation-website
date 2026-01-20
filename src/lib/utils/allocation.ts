/**
 * Calculate how donation is allocated across programs, operations, and fundraising
 * Based on Daisy Foundation's allocation: 78% programs, 14% operations, 8% fundraising
 */
export interface DonationAllocation {
  programs: number;
  operations: number;
  fundraising: number;
}

/**
 * Calculate donation allocation breakdown
 * @param amount - Total donation amount in dollars
 * @returns Allocation breakdown rounded to whole dollars
 */
export function calculateAllocation(amount: number): DonationAllocation {
  const programs = Math.round(amount * 0.78);
  const operations = Math.round(amount * 0.14);
  const fundraising = Math.round(amount * 0.08);

  return {
    programs,
    operations,
    fundraising,
  };
}
