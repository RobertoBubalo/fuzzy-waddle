import { describe, it, expect, vi } from "vitest";

import type { Asset } from "@/models/asset";
import { load } from "@/utils/dataRetentionUtils";

describe("Asset model utils", () => {
    it("sharesValue given 2 positive numbers - returns multiplication", () => {
        // arrange
        const asset = {
            shares: 3,
            shareValue: 10,
        } as Asset;
        const expected = 30;

        // act
        // const totalValue = load();

        // assert
        // expect(totalValue).equal(expected);
    });
});
