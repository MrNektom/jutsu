<script>
import animeSrc from '../img/nav-icons/anime.svg'
import forumSrc from '../img/nav-icons/forum.svg'
import pediaSrc from '../img/nav-icons/pedia.svg'
import profileSrc from '../img/nav-icons/profile.svg'

import router from '../router'
export default {
    name: 'SideNavbar',
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

<template>
    <!-- <aside class="sidebar">
                    <div class="sidebar-content">
                        <div class="side-element">
                            <router-link to="/" class="side-link">Аниме</router-link>
                        </div>
                        <div class="side-element">
                            <router-link to="/forum" class="side-link">Форум</router-link>
                        </div>
                        <div class="side-element">
                            <router-link to="/pedia" class="side-link">Нарутопедия</router-link>
                        </div>
                        <div class="side-element">
                            <router-link to="/profile" class="side-link">Профиль</router-link>
                        </div>
                    </div>
                </aside> -->
    <div class="navbar">
        <div class="navbar-content">
            <h1 class="navbar-title">{{ title }}</h1>
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

<style scoped lang="scss">
@import '../variables.scss';

.navbar {
    background-color: $background;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    width: 70px;

    .navbar-title {
        display: none;
        visibility: hidden;
    }

    .nav {
        display: grid;
        grid-auto-rows: 70px;
        width: 100%;
        justify-content: center;
        gap: 2px;

        
        #active {
            background-color: #353030;
            border-radius: 10px;
        }
        
        .profile-nav {
            border: none;
        }
        
        div {
            flex: 1  50px;
            padding: 10px;
            
            .link-nav {
                display: flex;
                flex-direction: column;
                align-items: center;
                text-decoration: none;
                color: $default_text_color;

                
                img {
                    height: 32px;
                    widows: 32px;
                }
            }
        }
        
        
        h3 {
            font-weight: 300;
            font-size: 1rem;
            font-size: 12px;
        }
    }
}

@media screen and (min-width: 786px) {
    .navbar {
        border-right: 2px solid $stroke_color;
    }
}

@media screen and (max-width: 786px) {
    .sidebar {
        display: none;
        visibility: hidden;
    }

    .navbar {
        flex-direction: row;
        height: 90px;
        width: 100vw;

        .navbar-content {
            display: flex;
            align-items: center;
            width: 100%;
            height: 100%;
            border-top: 2px solid $stroke_color;



            .nav {
                grid-auto-rows: unset;
                grid-template-rows: 50px;
                grid-auto-flow: column;
            }
        }

    }
}

@media screen and (min-width: 768px) {}
</style>