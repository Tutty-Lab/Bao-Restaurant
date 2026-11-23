import type { Shift } from "../types";
import type { DayBlocks } from "./workHours";
import { coveragePoints, workingAt } from "./staffing";

/** Minimum distinct staff across every interval, including manually edited minutes. */
export function minimumStaffIn(shifts: readonly Shift[], blocks: DayBlocks, from: number, to: number): number | null {
  let minimum: number | null = null;
  for (const block of blocks) {
    const start = Math.max(from, block.startMinutes), end = Math.min(to, block.endMinutes);
    if (start >= end) continue;
    const points = coveragePoints([...shifts], start, end);
    for (let i = 0; i + 1 < points.length; i++) {
      const count = new Set(shifts.filter(s => workingAt(s, points[i])).map(s => s.employeeId)).size;
      minimum = minimum == null ? count : Math.min(minimum, count);
    }
  }
  return minimum;
}
