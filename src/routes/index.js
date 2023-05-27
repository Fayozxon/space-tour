import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
import CrewView from '../views/CrewView.vue';
import DestinationView from '../views/DestinationView.vue';
import TechnologyView from '../views/TechnologyView.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView,
            meta: {
                title: 'Space Tourism | Frontend Mentor'
            }
        },
        {
            path: '/crew',
            name: 'crew',
            component: CrewView,
            meta: {
                title: 'Crew | Space Tourism'
            }
        },
        {
            path: '/destination',
            name: 'destination',
            component: DestinationView,
            meta: {
                title: 'Destination | Space Tourism'
            }
        },
        {
            path: '/technology',
            name: 'technology',
            component: TechnologyView,
            meta: {
                title: 'Technology | Space Tourism'
            }
        }
    ]
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`;
    next();
})

export default router;