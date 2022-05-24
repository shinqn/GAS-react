import { useRoutes } from 'react-router-dom';
// Layouts
import DefaultLayout from './layouts/DefaultLayout';
import HeaderOnly from './layouts/HeaderOnly';

// Pages
import Home from './pages/Home';
import Following from './pages/Following';
import Profile from './pages/Profile';
import Upload from './pages/Upload';
import Search from './pages/Search';

// Public routes
function Router() {
    return useRoutes([
        {
            element: <DefaultLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: 'following', element: <Following /> },
                { path: 'profile', element: <Profile /> },
            ],
        },
        {
            element: <HeaderOnly />,
            children: [{ path: 'upload', element: <Upload /> }],
        },
        {
            element: null,
            children: [{ path: 'search', element: <Search /> }],
        },
        {
            element: <DefaultLayout />,
            children: [{ path: 'userCodeAppPanel', element: <Home /> }],
        },
    ]);
}

export default Router;

// const publicRoutes = [
//     { path: '/', component: Home },
//     { path: '/following', component: Following },
//     { path: '/@:nickname', component: Profile },
//     { path: '/upload', component: Upload, layout: HeaderOnly },
//     { path: '/search', component: Search, layout: null },
// ];

// const privateRoutes = [];

// export { publicRoutes, privateRoutes };
