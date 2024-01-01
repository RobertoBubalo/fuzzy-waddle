<script setup lang="ts">
import AssetItem from "@/components/AssetItem.vue";
import type { Asset } from "@/models/Asset";
import { computed } from "vue";
import { sharesValue } from "@/utils/AssetModelUtils";
import { useAssetsStore } from "@/stores/assets";
import { useTaxStore } from "@/stores/tax";

const taxStore = useTaxStore();
const assets = useAssetsStore();

const assetItems = computed(() => assets.assets);

function add() {
    assets.addAsset({ tax: {} } as Asset);
}

const totalValue = computed(
    () =>
        assetItems.value
            .filter((a) => a.shareValue != null && a.shares != null)
            .map((a) => sharesValue(a))
            .reduce((a, b) => a + b, 0) | 0
);

function applyToAllAssets() {
    const assets = useAssetsStore();
    assets.applyTaxToAllAssets(taxStore.tax);
}
</script>

<template>
    <div>
        <!-- Move into a component -->
        <div class="d-flex">
            <h1>This is a fuzzy waddle page</h1>
            <v-btn @click="add" color="primary" class="ma-3">Add</v-btn>
        </div>

        <div class="d-flex">
            <!-- Move into a component -->
            <h3>Total assets value: {{ totalValue }}</h3>
            <v-spacer />
            <div class="d-flex" style="gap: 1rem">
                <v-checkbox
                    :model-value="taxStore.enabled"
                    color="primary"
                    label="Show tax rates"
                    @click="taxStore.toggleEnabled"
                ></v-checkbox>
                <v-btn v-show="taxStore.enabled" color="primary" variant="outlined" @click="applyToAllAssets"
                    >Apply to all assets</v-btn
                >
            </div>
        </div>

        <!-- Move into a container component -->
        <AssetItem
            v-for="(assetItem, index) in assetItems"
            :asset="assetItem"
            :key="index"
            @complete="(asset) => assets.updateAsset(index, asset)"
        />
    </div>
</template>
