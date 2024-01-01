import { describe, it, expect, vi } from "vitest";

import type { Asset } from "@/models/Asset";
import { sharesValue } from "@/utils/AssetModelUtils";

describe("Asset model utils", () => {
    it("sharesValue given 2 positive numbers - returns multiplication", () => {
        // arrange
        const asset = {
            shares: 3,
            shareValue: 10,
        } as Asset;
        const expected = 30;

        // act
        const totalValue = sharesValue(asset);

        // assert
        expect(totalValue).equal(expected);
    });

    it("sharesValue given 0 and a positive numbers - returns 0", () => {
        // arrange
        const asset = {
            shares: 0,
            shareValue: 10,
        } as Asset;
        const expected = 0;

        // act
        const totalValue = sharesValue(asset);

        // assert
        expect(totalValue).equal(expected);
    });
});
