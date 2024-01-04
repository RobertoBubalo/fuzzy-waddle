<script setup lang="ts">
import { computed, type PropType } from "vue";
import AssetItemSearch from "./AssetItemSearch.vue";
import type { Asset } from "@/models/asset";
import { useTaxStore } from "@/stores/tax";

const emit = defineEmits(["complete", "update:modelValue"]);

function selected(asset: Asset) {
    emit("complete", asset);
}

const props = defineProps({
    asset: { required: true, type: Object as PropType<Asset> },
});

const asset = computed({
    get() {
        return props.asset;
    },
    set(asset) {
        emit("update:modelValue", asset);
    },
});

const sharesValue = computed(() => props.asset?.shares * props.asset?.shareValue || null);

const taxStore = useTaxStore();
</script>

<template>
    <!-- Refactor into a v data table with crud in dialogs -->
    <v-card variant="elevated" elevation="4" class="mb-1">
        <v-card-text>
            <div class="d-flex" style="gap: 1rem">
                <!-- figure out why do we need to add min width here, it should be block display anyway -->
                <AssetItemSearch @selected="selected" style="min-width: 200px" />

                <div v-if="asset" class="d-flex" style="gap: 1rem">
                    <!-- Expand into a new component -->
                    <v-text-field type="number" v-model="asset.shares" label="Number of shares" variant="outlined" />
                    <v-text-field type="number" v-model="asset.shareValue" label="Share value" variant="outlined" />
                    <v-text-field
                        type="number"
                        :model-value="sharesValue"
                        readonly
                        base-color="success"
                        label="Shares value"
                        variant="outlined"
                    />
                    <!-- expand into a new component -->
                    <div v-if="taxStore.enabled" class="d-flex">
                        <v-text-field
                            v-model="asset.tax.capitalGains"
                            density="compact"
                            type="number"
                            label="Capital gains tax"
                            variant="outlined"
                        />
                        <v-text-field
                            v-model="asset.tax.witholding"
                            density="compact"
                            type="number"
                            label="Tax witholding"
                            variant="outlined"
                        />
                    </div>
                </div>
            </div>
        </v-card-text>
    </v-card>
</template>

<style scoped>
/* .item {
  margin-top: 2rem;
  display: flex;
  position: relative;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  } */

/* .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  } */

/* .item:last-of-type:after {
    display: none;
  } */
/* } */
</style>
