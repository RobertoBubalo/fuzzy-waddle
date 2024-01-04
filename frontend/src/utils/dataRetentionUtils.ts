import type { Asset } from "@/models/asset";
import type { Tax } from "@/models/tax";
import { useAssetsStore } from "@/stores/assets";
import { useTaxStore } from "@/stores/tax";

const enum LocalStorageKeys {
    TaxEnabled = "taxEnabled",
    Tax = "tax",
    Assets = "assets",
}

export function load() {
    loadTax();
    loadAssets();
}

function loadTax() {
    const taxStore = useTaxStore();
    if (taxStore) {
        const localValue = localStorage.getItem(LocalStorageKeys.TaxEnabled);
        // improve parsing string to boolean
        const enabled = localValue?.toLowerCase() === "true";
        if (enabled != taxStore.enabled) {
            taxStore.toggleEnabled();
        }

        const taxFromStorage = localStorage.getItem(LocalStorageKeys.Tax);
        if (taxFromStorage) {
            const tax: Tax = JSON.parse(taxFromStorage);
            taxStore.setTax(tax);
        }
    }
}

function loadAssets() {
    const assetsStore = useAssetsStore();
    if (assetsStore) {
        const assetsFromStorage = localStorage.getItem(LocalStorageKeys.Assets);
        if (assetsFromStorage) {
            const assets: Asset[] = JSON.parse(assetsFromStorage);
            if (assets && assets.length > 0) {
                assets?.forEach((asset) => assetsStore.addAsset(asset));
            }
        }
    }
}

export function saveChanges() {
    saveTaxChanges();
    saveAssetsChanges();
}

function saveTaxChanges() {
    const taxStore = useTaxStore();
    if (taxStore) {
        localStorage.setItem(LocalStorageKeys.TaxEnabled, JSON.stringify(taxStore.enabled));
        const tax = taxStore?.tax;
        if (tax) {
            localStorage.setItem(LocalStorageKeys.Tax, JSON.stringify(tax));
        }
    }
}

function saveAssetsChanges() {
    const assetsStore = useAssetsStore();
    if (assetsStore) {
        if (assetsStore.assets) {
            localStorage.setItem(LocalStorageKeys.Assets, JSON.stringify(assetsStore.assets));
        }
    }
}
