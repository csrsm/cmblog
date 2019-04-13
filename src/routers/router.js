
import Home from '../component/home.js';
import Detail from '../component/detail.js';
import BlogList from '../component/blogList';


export const RouteConfig = [
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/home/detail',
                component: Detail,
            },
            {
                path: '/home',
                component: BlogList,
            }
              
        ],
    },
    {
        redirect: '/home',
        key: 'index_not_found',
    },
]