<script setup lang="ts">
const arr = [...Array(10).keys()];

function getRandomHeight() {
    return Math.floor(Math.random() * 250) + 1 + "px";
}
</script>

<template>
    <div class="container">
        <div>
            {{ arr }}
        </div>
        <div :style="{ height: getRandomHeight() }" v-for="id in arr" :key="id">
            <span>content {{ id }}</span>
        </div>
        <div>
            <span>content</span>
        </div>
        <div>
            <span>content</span>
        </div>
        <div>
            <span>content 33</span>
        </div>
        <!-- <v-text-field
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
        <v-btn color="primary" variant="outlined" @click="clear" class="ma-3">Clear</v-btn> -->
    </div>
</template>

<style scoped>
.container {
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    grid-template-rows: masonry;
}

.container > div {
    background-color: blueviolet;
}
</style>
