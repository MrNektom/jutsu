import { createWebHistory, createRouter } from 'vue-router'

import Anime from '../views/Anime.vue'
import Forum from '../views/Forum.vue'
import Pedia from '../views/Pedia.vue'
import Profile from '../views/Profile.vue'

const routes = [
    {
        path: "/",
        name: "Anime",
        component: Anime
    },
    {
        path: "/forum",
        name: "Forum",
        component: Forum
    },
    {
        path: "/pedia",
        name: "Narutopedia",
        component: Pedia
    },
    {
        path: "/profile",
        name: "Profile",
        component: Profile
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router