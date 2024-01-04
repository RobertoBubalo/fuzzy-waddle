<script setup lang="ts">
import { useTaxStore } from "@/stores/tax";
import { useAssetsStore } from "@/stores/assets";
import { computed } from "vue";

const taxStore = useTaxStore();

const capitalGains = computed(() => taxStore.tax.capitalGains);
const witholding = computed(() => taxStore.tax.witholding);
function applyToAllAssets() {
    const assets = useAssetsStore();
    assets.applyTaxToAllAssets(taxStore.tax);
}

function clear() {
    taxStore.clear();
}
</script>

<template>
    <div>
        <v-text-field
            type="number"
            :model-value="capitalGains"
            label="Capital gains tax"
            variant="outlined"
            @update:model-value="(x) => taxStore.setTaxCapitalGains(+x)"
        />
        <v-text-field
            type="number"
            :model-value="witholding"
            label="Tax witholding"
            variant="outlined"
            @update:model-value="(x) => taxStore.setTaxWitholding(+x)"
        />

        <v-btn color="primary" variant="outlined" @click="applyToAllAssets" class="ma-3">Apply to all assets</v-btn>
        <v-btn color="primary" variant="outlined" @click="clear" class="ma-3">Clear</v-btn>
    </div>
</template>
