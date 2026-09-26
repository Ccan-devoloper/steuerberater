import test from "node:test";
import assert from "node:assert/strict";

test("Instagram-Asset-Checkout kollidiert nicht mit dem Website-assets-Verzeichnis", async () => {
  const alt = process.env.IG_ASSET_DIR;
  try {
    delete process.env.IG_ASSET_DIR;
    const { CONFIG } = await import("../src/config.mjs?asset-dir-regression");
    assert.equal(CONFIG.hosting.verzeichnis, ".instagram-assets");
  } finally {
    if (alt == null) delete process.env.IG_ASSET_DIR;
    else process.env.IG_ASSET_DIR = alt;
  }
});
