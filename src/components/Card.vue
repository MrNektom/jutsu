<template>
    <div>
        <div class="anime-card">
            <div class="card-container">
                    <h2 class="anime-title">{{ anime_title }}</h2>
                    <p v-if="typeof anime_seasons !== 'undefined'">{{ anime_seasons }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.anime-card {
    border: 1px solid rgba(255, 255, 255, 0.1);

}
.card-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>
<script>
export default {
    name: 'Card',
    props: {
        anime_title: {
            type: String,
            required: true
        },

        anime_seasons: {
            type: String,
            required: false
        },
        anime_episodes: {
            type: String,
            required: false
        },
        anime_films: {
            type: String,
            required: false
        }
        
    }
}
</script>