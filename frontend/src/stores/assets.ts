import { ref } from "vue";
import { defineStore } from "pinia";
import type { Asset } from "@/models/asset";
import type { Tax } from "@/models/tax";

export const useAssetsStore = defineStore("assets", () => {
    // assets
    const assets = ref<Asset[]>([]);

    // manage
    function addAsset(asset: Asset) {
        assets.value.push(asset);
    }

    function updateAsset(index: number, asset: Asset) {
        assets.value[index] = asset;
    }

    function clear() {
        assets.value = [];
    }

    // taxes
    function applyTaxToAllAssets(tax: Tax) {
        assets.value.forEach((asset) => {
            asset.tax = tax;
        });
    }

    return { assets, addAsset, updateAsset, applyTaxToAllAssets, clear };
});
