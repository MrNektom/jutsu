<template>
    <div>
        <h2>Аниме</h2>
        <div class="anime-container">
            <Card anime_thumb="https://gen.jut.su/templates/school/images/anime_naruto_season-1.jpg" anime_title="Наруто" anime_seasons="2 сезона" anime_episodes="720 эпизодов" />
            <Card anime_thumb="https://gen.jut.su/templates/school/images/anime_naruto_season-1.jpg" anime_title="Наруто" anime_seasons="2 сезона" anime_episodes="720 эпизодов" />
            <Card anime_thumb="https://gen.jut.su/templates/school/images/anime_naruto_season-1.jpg" anime_title="Наруто" anime_seasons="2 сезона" anime_episodes="720 эпизодов" />
            <Card anime_thumb="https://gen.jut.su/templates/school/images/anime_naruto_season-1.jpg" anime_title="Наруто" anime_seasons="2 сезона" anime_episodes="720 эпизодов" />
        </div>
    </div>
</template>
<script setup>
import Card from '../components/Card.vue';
</script>

<style scoped lang="scss">

h2 {
    text-align: center;
    margin-top: 2vh;
    font-weight: 800;
    font-size: 2rem;
}
.anime-container {
    display: flex;
    margin: 0;
    min-height: 50vh;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: center;
    margin: 4vh 0 0 0;
}
</style>