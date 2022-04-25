import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/Home'
import About from '../views/About'
import User from '../views/User'
import Post from '../views/Post'
import Profil from '../views/User/Profil'
import billing from '../views/User/billing'
const routes=[
    {
        path:'/About',
        name: 'About',
        component:About
    },
    {
        path: '/Home',
        name: 'Home',
        component:Home
    },
    {
        path: '/User/:username',
        name: 'User',
        component:User,
        children:[{
            path:'Profil',
            component:Profil

        }, {
            path:'billing',
            component:billing
            }]
    },
    {
        path: '/User/:username/Post/:post_id',
        name: 'Post',
        component:Post
    },
]
const router=createRouter({
    routes: routes,
    history: createWebHistory()

})
    export default router