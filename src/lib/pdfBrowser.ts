/** Safari (including iPad desktop mode) needs a fresh click after async PDF generation. */
export function needsPdfSaveStep(userAgent: string): boolean {
  return /iPhone|iPad|iPod/i.test(userAgent) ||
    (/AppleWebKit/i.test(userAgent) && /Safari\//i.test(userAgent) && !/Chrome\/|Chromium\/|Edg\/|OPR\/|Android/i.test(userAgent));
}
