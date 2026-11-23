import { expect, it } from "vitest";
import type { Shift } from "../../types";
import { minimumStaffIn } from "../debugCoverage";
const shift = (id: string, start: number, end: number, extra: Partial<Shift> = {}): Shift => ({ id, employeeId: id, date: "2026-11-23", startMinutes: start, endMinutes: end, paidMinutes: end-start, pauseMinutes: 0, generated: false, shiftType: "CUSTOM", ...extra });
const blocks = [{startMinutes: 1020,endMinutes: 1320}];
it("detects a 15-minute gap missed by half-hour sampling",()=>{
 expect(minimumStaffIn([shift("a",1020,1065),shift("b",1080,1320)],blocks,1020,1320)).toBe(0);
});
it("counts break intervals and distinct people",()=>{
 expect(minimumStaffIn([shift("a",1020,1320,{pauseMinutes:30,pauseStartMinutes:1065,paidMinutes:270})],blocks,1020,1320)).toBe(0);
 expect(minimumStaffIn([shift("a",1020,1320),shift("duplicate",1020,1320,{employeeId:"a"})],blocks,1020,1320)).toBe(1);
});
it("ignores closed time, handles short openings",()=>{
 expect(minimumStaffIn([],[],1020,1320)).toBeNull();
 expect(minimumStaffIn([],blocks,960,1020)).toBeNull();
 expect(minimumStaffIn([],[{startMinutes:1020,endMinutes:1035}],1020,1320)).toBe(0);
});
