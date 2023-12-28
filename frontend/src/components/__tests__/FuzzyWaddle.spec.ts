import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FuzzyWaddleView from "@/views/FuzzyWaddleView.vue";

describe("FuzzyWaddleView", () => {
    it("renders properly", () => {
        const wrapper = mount(FuzzyWaddleView);
        // this shouldn't really be a unit test, but adding it in for time being
        expect(wrapper.element.innerHTML).toContain("This is a fuzzy waddle page");
    });
});
