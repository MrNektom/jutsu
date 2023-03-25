<template>
    <div>
        <h2>Аниме</h2>
        <div class="anime-container">
            <Card anime_title="Наруто" />
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue';
</script>

<style scoped lang="scss">

h2 {
    text-align: center;
}
.anime-container {
    display: grid;
    height: 150vh;
    width: 98vw;
    border: 4px solid rgba(255, 255, 255, 0.1);
    margin: 15px auto;
    border-radius: 10px;
    
}
</style>