import { afterEach, describe, expect, it, vi } from "vitest";
afterEach(() => { vi.unstubAllEnvs(); vi.resetModules(); });
describe("environment isolation", () => {
  it("forces dev namespace even with an empty or production prefix", async () => {
    vi.stubEnv("DEV", true); vi.stubEnv("VITE_STORE_ID_PREFIX", "");
    expect((await import("../supabase")).STORE_ID_PREFIX).toBe("dev-");
  });
  it("keeps preview separate", async () => {
    vi.stubEnv("DEV", false); vi.stubEnv("VITE_STORE_ID_PREFIX", "preview-");
    expect((await import("../supabase")).STORE_ID_PREFIX).toBe("preview-");
  });
  it("uses unprefixed rows for production", async () => {
    vi.stubEnv("DEV", false); vi.stubEnv("VITE_STORE_ID_PREFIX", "");
    expect((await import("../supabase")).STORE_ID_PREFIX).toBe("");
  });
});
