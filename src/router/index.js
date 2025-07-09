// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';

// Lazy-loaded components
const Home = () => import('../components/Home.vue');
const About = () => import('../components/others/About.vue');
const Service = () => import('../components/others/ourService.vue'); // <-- matches usage
const Projects = () => import('../components/others/Projects.vue');
const Team = () => import('../components/others/ourTeam.vue');
const Prices = () => import('../components/others/Prices.vue');
const News = () => import('../components/others/News.vue');
const Contact = () => import('../components/others/Contact.vue');
const Pages = () => import('../components/others/Pages.vue');
const Page1 = () => import('../components/others/dropDown/page1.vue');
const Page2 = () => import('../components/others/dropDown/page2.vue');
const Page3 = () => import('../components/others/dropDown/page3.vue');
const Page4 = () => import('../components/others/dropDown/page4.vue');
const Page5 = () => import('../components/others/dropDown/page5.vue');
const BlogDetails = () => import('../components/others/news/Blogdetails.vue');
const NotFound = () => import('../components/routeserr/NotFound.vue');
const famousCarousel = () => import('../components/others/famousCarousel.vue');

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/ourservice', name: 'ourService', component: Service }, // <-- fixed here
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/portfolio', redirect: '/projects' }, // alias for Portfolio
  { path: '/ourteam', name: 'Team', component: Team },
  { path: '/prices', name: 'Prices', component: Prices },
  { path: '/news', name: 'News', component: News },
  { path: '/blog', redirect: '/news' }, // alias for Blog
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: '/famousecarousel',
    name: 'FamousCarousel',
    component: famousCarousel,
  },

  {
    path: '/blogdetails/:id',
    name: 'BlogDetails',
    component: BlogDetails,
    props: true,
  },

  {
    path: '/pages',
    name: 'Pages',
    component: Pages,
    children: [
      { path: 'page1', name: 'Page1', component: Page1 },
      { path: 'page2', name: 'Page2', component: Page2 },
      { path: 'page3', name: 'Page3', component: Page3 },
      { path: 'page4', name: 'Page4', component: Page4 },
      { path: 'page5', name: 'Page5', component: Page5 },
    ],
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    if (document.querySelector('#router-section')) {
      return {
        el: '#router-section',
        behavior: 'smooth',
      };
    }
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
