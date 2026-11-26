import { expect, it } from "vitest";
import { needsPdfSaveStep } from "../pdfBrowser";
it("keeps Safari on the app until a fresh save click",()=>{
 for(const ua of [
 "Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1",
 "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15) AppleWebKit/605.1.15 Version/18.0 Safari/605.1.15",
 "Mozilla/5.0 (iPad; CPU OS 18_0 like Mac OS X) AppleWebKit/605.1.15 CriOS/130 Mobile/15E148 Safari/604.1",
 ]) expect(needsPdfSaveStep(ua)).toBe(true);
});
it("retains ordinary downloads for Chrome and Edge",()=>{
 for(const ua of ["Mozilla/5.0 AppleWebKit/537.36 Chrome/130.0 Safari/537.36", "Mozilla/5.0 AppleWebKit/537.36 Chrome/130.0 Safari/537.36 Edg/130.0"]) expect(needsPdfSaveStep(ua)).toBe(false);
});
