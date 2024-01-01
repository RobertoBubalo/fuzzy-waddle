import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useAssetsStore } from "@/stores/assets";
import type { Asset } from "@/models/Asset";
import type { Tax } from "@/models/Tax";

describe("Assets store", () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia());
    });

    it("initial state", () => {
        // arrange
        const assetsStore = useAssetsStore();

        // assert
        expect(assetsStore.assets).toHaveLength(0);
    });

    it("add asset", () => {
        // arrange
        const assetsStore = useAssetsStore();
        const asset = {} as Asset;
        // act
        assetsStore.addAsset(asset);

        // assert
        expect(assetsStore.assets).toHaveLength(1);
        expect(assetsStore.assets[0]).toStrictEqual(asset);
    });

    it("update asset", () => {
        // arrange
        const assetsStore = useAssetsStore();
        assetsStore.$state.assets = [
            {
                id: 1,
                name: "name",
                shares: 3,
                shareValue: 5,
                tickerSymbol: "symb",
                tax: { capitalGains: 3, witholding: 5 } as Tax,
            } as Asset,
        ];
        const asset = {
            id: 2,
            name: "new name",
            shares: 10,
            shareValue: 10,
            tickerSymbol: "new symb",
            tax: { capitalGains: 15, witholding: 15 } as Tax,
        } as Asset;

        // act
        assetsStore.updateAsset(0, asset);

        // assert
        expect(assetsStore.assets).toHaveLength(1);
        expect(assetsStore.assets[0]).toStrictEqual(asset);
    });

    it("apply tax to all assets", () => {
        // arrange
        const assetsStore = useAssetsStore();
        assetsStore.$state.assets = [{ tax: { capitalGains: 3, witholding: 5 } as Tax } as Asset, {} as Asset];
        const tax = { capitalGains: 10, witholding: 10 } as Tax;

        // act
        assetsStore.applyTaxToAllAssets(tax);

        // assert
        expect(assetsStore.assets).toHaveLength(2);
        assetsStore.assets.forEach((asset) => {
            expect(asset.tax).toStrictEqual(tax);
        });
    });
});
