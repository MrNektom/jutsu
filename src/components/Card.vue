<template>
    <div>
        <div class="anime-card">
            <div class="card-container">
                    <img :src="anime_thumb" alt="" class="anime-thumb" height="100" width="100">
                    <div class="anime-info">
                        <h2 class="anime-title">{{ anime_title }}</h2>
                        <p class="anime-genres" v-if="typeof anime_films !== 'undefined'">{{ anime_genres }}</p>
                        <p class="anime-seasons" v-if="typeof anime_films !== 'undefined'">{{ anime_seasons }}</p>
                        <p class="anime-episodes" v-if="typeof anime_films !== 'undefined'">{{ anime_episodes }}</p>
                        <p class="anime-films" v-if="typeof anime_films !== 'undefined'">{{ anime_films }}</p>
                        
                    </div>
                    <img :src="playSvg" alt="" class="watch">
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.anime-card {
    min-height: 220px;
    margin: 0;
    width: 180px;
    border: 2px solid rgba(255, 255, 255, 0.1);
    display: block;
    border-radius: 10px;
    align-items: flex-start;
}

.anime-thumb {
    margin-top: 15px;
    border-radius: 5px;
}
.card-container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .anime-info {
        margin-top: 1em;
        display: flex;
        flex-direction: column;
        align-items: center;
        p {
            font-weight: 500;
        }
    }

    .watch {
        font-family: 'Inter', sans-serif;
        font-size: 1rem;
        margin-top: 1vh;
        width: 70%;
        height: 4vh;
        font-weight: 700;
        background-color: transparent;
        color: #fff;
    }
}
</style>
<script>

import playSvg from '../img/nav-icons/play.svg'
export default {
    name: 'Card',
    data() {
        return {
            playSvg
        }
    },
    props: {
        anime_thumb: {
            type: String,
            required: true
        },
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
        },
        anime_genres: {
            type: String,
            required: false
        }
        
    }
}
</script>