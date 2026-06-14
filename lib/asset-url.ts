/** Bump when replacing files in /public without renaming them. */
export const ASSET_VERSION = "20260614-opt";

export function assetUrl(path: string): string {
  if (!path || path.includes("?v=")) return path;
  return `${path}?v=${ASSET_VERSION}`;
}
