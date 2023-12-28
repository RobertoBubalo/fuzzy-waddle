<script setup lang="ts">
import AssetItem from "@/components/AssetItem.vue";
import type { Asset } from "@/models/Asset";
import { computed, ref } from "vue";
import { sharesValue } from "@/utils/AssetModelUtils";
</script>
<script lang="ts">
const obj = ref({
    arr: [] as Asset[],
});

const assetItems = computed(() => obj.value.arr);

function add() {
    obj.value.arr.push({} as Asset);
}
function assetAdded(asset: Asset, index: number) {
    obj.value.arr[index] = asset;
}

const totalValue = computed(
    () =>
        obj.value.arr
            .filter((a) => a.shareValue != null && a.shares != null)
            .map((a) => sharesValue(a))
            .reduce((a, b) => a + b, 0) | 0
);
</script>

<template>
    <div>
        <!-- Move into a component -->
        <div class="d-flex">
            <h1>This is a fuzzy waddle page</h1>
            <v-btn @click="add" color="primary" class="ma-3">Add</v-btn>
        </div>

        <!-- Move into a component -->
        <h3>Total assets value: {{ totalValue }}</h3>

        <!-- Move into a container component -->
        <AssetItem
            v-for="(assetItem, index) in assetItems"
            :asset="assetItem"
            :key="index"
            @complete="(asset) => assetAdded(asset, index)"
        />
    </div>
</template>
