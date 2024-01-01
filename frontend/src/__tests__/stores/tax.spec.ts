import { describe, it, expect, beforeEach } from "vitest";
import { createPinia, setActivePinia } from "pinia";
import { useTaxStore } from "@/stores/tax";

describe("Tax store", () => {
    beforeEach(() => {
        // creates a fresh pinia and makes it active
        // so it's automatically picked up by any useStore() call
        // without having to pass it to it: `useStore(pinia)`
        setActivePinia(createPinia());
    });

    it("initial state", () => {
        // arrange
        const taxStore = useTaxStore();

        // assert
        expect(taxStore.enabled).toBeFalsy();
        expect(taxStore.tax).toStrictEqual({});

        expect(taxStore.tax.witholding).toBe(undefined);
        expect(taxStore.tax.witholding).toBe(undefined);
    });

    it("toggle enabled", () => {
        // arrange
        const taxStore = useTaxStore();

        expect(taxStore.enabled).toBeFalsy();

        // act
        taxStore.toggleEnabled();

        // assert
        expect(taxStore.enabled).toBeTruthy();
    });

    it("set tax witholding", () => {
        // arrange
        const taxStore = useTaxStore();

        expect(taxStore.tax.witholding).toBe(undefined);
        const taxWitholding = 12;

        // act
        taxStore.setTaxWitholding(taxWitholding);

        // assert
        expect(taxStore.tax.witholding).toBe(taxWitholding);
        expect(taxStore.tax.capitalGains).toBe(undefined);
    });

    it("set capital gains tax", () => {
        // arrange
        const taxStore = useTaxStore();

        expect(taxStore.tax.capitalGains).toBe(undefined);
        const capitalGains = 12;

        // act
        taxStore.setTaxCapitalGains(capitalGains);

        // assert
        expect(taxStore.tax.capitalGains).toBe(capitalGains);
        expect(taxStore.tax.witholding).toBe(undefined);
    });
});
