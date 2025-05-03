import type { Asset } from "@/models/asset";

export function sharesValue(asset: Asset): number {
    return (asset.shareValue * asset.shares) | 0;
}
