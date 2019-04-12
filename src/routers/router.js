
import Home from '../component/home.js';
import Detail from '../component/detail.js'


export const RouteConfig = [
    {
        path: '/home',
        component: Home,
        routes: [
            {
                path: '/home/detail',
                component: Detail,
            },
              
        ],
    },
    {
        redirect: '/home',
        key: 'index_not_found',
    },
]