<template>
    <div class="header">
        <div class="header-content">
            <h1 class="header-title">{{ title }}</h1>
            <nav class="nav">
                <div class="anime-nav" :id="$route.path === '/' ? 'active' : ''">
                    <router-link class="link-nav" to="/">
                        <img :src="animeSrc" alt="" class="anime-icon">
                        <h3>Аниме</h3>
                    </router-link>
                </div>
                <div class="forum-nav" :id="$route.path === '/forum' ? 'active' : ''">
                    <router-link class="link-nav" to="/forum">
                        <img :src="forumSrc" alt="" class="forum-icon">
                        <h3>Форум</h3>
                    </router-link>
                </div>
                <div class="pedia-nav" :id="$route.path === '/pedia' ? 'active' : ''">
                    <router-link class="link-nav" to="/pedia">
                        <img :src="pediaSrc" alt="" class="pedia-icon">
                        <h3>Нарутопедия</h3>
                    </router-link>
                </div>
                <div class="profile-nav" :id="$route.path === '/profile' ? 'active' : ''">
                    <router-link class="link-nav" to="/profile">
                        <img :src="profileSrc" alt="" class="profile-icon">
                        <h3>Профиль</h3>
                    </router-link>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
import animeSrc from '../img/nav-icons/anime.svg'
import forumSrc from '../img/nav-icons/forum.svg'
import pediaSrc from '../img/nav-icons/pedia.svg'
import profileSrc from '../img/nav-icons/profile.svg'

import router from '../router'
export default {
    name: 'Header',
    data() {
        return {
            animeSrc,
            forumSrc,
            profileSrc,
            pediaSrc
        }
    },
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>
