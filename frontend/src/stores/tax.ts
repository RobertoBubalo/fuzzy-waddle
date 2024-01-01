import { ref } from "vue";
import { defineStore } from "pinia";
import type { Tax } from "@/models/Tax";

export const useTaxStore = defineStore("tax", () => {
    const enabled = ref(false);

    function toggleEnabled() {
        enabled.value = !enabled.value;
    }

    // expose getters for different taxes

    // witholding
    const tax = ref<Tax>({});
    function setTaxWitholding(val: number) {
        tax.value.witholding = val;
    }

    // capital gains
    function setTaxCapitalGains(val: number) {
        tax.value.capitalGains = val;
    }

    return { tax, setTaxWitholding, setTaxCapitalGains, enabled, toggleEnabled };
});
