<script setup lang="ts"></script>

<template>
    <div class="masonry">
        <div class="item item1">Item 1</div>
        <div class="item item2">Item 2</div>
        <div class="item item3">Item 3</div>
        <div class="item item4">Item 4</div>
        <div class="item item5">Item 5</div>
        <div class="item item6">Item 6</div>
        <div class="item item7">Item 7</div>
        <div class="item item8">Item 8</div>
        <div class="item item9">Item 9</div>
        <div class="item item10">Item 10</div>
    </div>
</template>

<style scoped>
.masonry {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: 10px;
    gap: 20px;
}

.item {
    background-color: #ffffff;
    padding: 20px;
    box-sizing: border-box;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    transition: transform 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2em;
    color: #fff;
}

.item:hover {
    transform: translateY(-15px);
}

.item:first-child {
    border: black solid 3px;
}
.item::after {
    border: yellow solid 10px;
    color: red;
}

/* Specific dimensions and colors for each item */
.item1 {
    grid-row: span 15;
    background-color: #ff6f61;
}
.item2 {
    grid-row: span 20;
    background-color: #6b5b95;
}
.item3 {
    grid-row: span 10;
    background-color: #88b04b;
}
.item4 {
    grid-row: span 25;
    background-color: #d65076;
}
.item5 {
    grid-row: span 30;
    background-color: #ffb347;
}
.item6 {
    grid-row: span 15;
    background-color: #45b8ac;
}
.item7 {
    grid-row: span 20;
    background-color: #e94b3c;
}
.item8 {
    grid-row: span 10;
    background-color: #6c5b7b;
}
.item9 {
    grid-row: span 25;
    background-color: #00a86b;
}
.item10 {
    grid-row: span 30;
    background-color: #b565a7;
}
</style>
