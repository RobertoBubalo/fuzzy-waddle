<script setup lang="ts">
import AssetItem from '@/components/AssetItem.vue'
import type { Asset } from '@/models/Asset'
import { computed, ref } from 'vue'
</script>
<script lang="ts">
const obj = ref({
  arr: [{}]
})

const assetItems = computed(() => obj.value.arr)

function add() {
  obj.value.arr.push({})
}
function assetAdded(asset: Asset, index: number) {
  obj.value.arr[index] = asset
}
</script>

<template>
  <div>
    <h1>This is a fuzzy waddle page</h1>
    <AssetItem
      v-for="(assetItem, index) in assetItems"
      :asset="assetItem"
      :key="index"
      @complete="(asset) => assetAdded(asset, index)"
    />
    <v-btn @click="add" color="primary">Add</v-btn>
  </div>
</template>
