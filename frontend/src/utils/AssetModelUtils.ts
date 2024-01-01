import type { Asset } from "@/models/Asset";

export function sharesValue(asset: Asset): number {
    return (asset.shareValue * asset.shares) | 0;
}
