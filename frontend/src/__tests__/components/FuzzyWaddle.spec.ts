import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import FuzzyWaddleView from "@/views/FuzzyWaddleView.vue";

import { createTestingPinia } from "@pinia/testing";
// import any store you want to interact with in testsF
import { useTaxStore } from "@/stores/tax";

describe("FuzzyWaddleView", () => {
    it("renders properly", () => {
        // arrange
        const wrapper = mount(FuzzyWaddleView, {
            global: {
                plugins: [createTestingPinia({ createSpy: vi.fn })], // move into a utils function or specify to happen before every test
            },
        });
        // const store = useTaxStore();

        // store.enabled = false;

        // act/assert
        // this shouldn't really be a unit test, but adding it in for time being
        expect(wrapper.element.innerHTML).toContain("This is a fuzzy waddle page");
    });
});
