<script setup lang="ts">
import PlaygroundItemOne from "@/components/PlaygroundItemOne.vue";
import PlaygroundItemTwo from "@/components/PlaygroundItemTwo.vue";
import PlaygroundItemThree from "@/components/PlaygroundItemThree.vue";
</script>

<template>
    <playground-item-one />
    <playground-item-two />
    <playground-item-three />
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
