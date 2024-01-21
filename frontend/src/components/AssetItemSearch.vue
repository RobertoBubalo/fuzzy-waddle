<script setup lang="ts">
import type { Asset } from "@/models/asset";
import { useTaxStore } from "@/stores/tax";
import { ref } from "vue";

const emit = defineEmits(["selected"]);

const taxStore = useTaxStore();

const items = [
    {
        id: 1,
        name: "test",
        tickerSymbol: "t",
        shares: 12,
        shareValue: 23,
        tax: { capitalGains: taxStore.tax?.capitalGains, witholding: taxStore.tax?.witholding },
    },
    {
        id: 2,
        name: "best",
        tickerSymbol: "b",
        shares: 34,
        shareValue: 45,
        tax: { capitalGains: taxStore.tax?.capitalGains, witholding: taxStore.tax?.witholding },
    },
    {
        id: 3,
        name: "cest",
        tickerSymbol: "c",
        shares: 56,
        shareValue: 78,
        tax: { capitalGains: taxStore.tax?.capitalGains, witholding: taxStore.tax?.witholding },
    },
] as Asset[];

const selected = ref<Asset>();

function valueSelected() {
    emit("selected", selected.value);
}
</script>
<template>
    <!-- get the list from backend, but in the meanwhile fetch it from local storage if an entry exists -->
    <v-autocomplete
        v-model="selected"
        :items="items"
        item-title="name"
        :item-value="(i) => i.id"
        @update:model-value="valueSelected"
        label="Input ticker symbol"
        variant="outlined"
        return-object
    />
</template>
<!-- On selected event - blur the input -->
