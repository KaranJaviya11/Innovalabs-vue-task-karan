import { createRouter,createWebHistory } from 'vue-router'
const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ '@/views/HomeComponent.vue'),
		meta: {
			title: 'Home',
		}
	}, 
    {
		path: "/question1",
		name: "question1",
		component: () => import(/* webpackChunkName: "home" */ '@/views/QuestionOne.vue'),
		meta: {
			title: 'question1',
		}
	}, 
	{
		path: "/question2",
		name: "question2",
		component: () => import(/* webpackChunkName: "home" */ '@/views/QuestionTwo.vue'),
		meta: {
			title: 'question2',
		}
	}, 
	{
		path: "/question3",
		name: "question3",
		component: () => import(/* webpackChunkName: "home" */ '@/views/QuestionThree.vue'),
		meta: {
			title: 'question3',
		}
	}, 
    {
		path: "/:catchAll(.*)",
		name: "404",
		component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
		meta: {
			title: '404'
		}
	}
]

const router = createRouter({
    history: createWebHistory(),
	routes
})
router.beforeEach((to, _, next) => {
    document.title = to.meta.title
    next();
})

export default router;
