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
