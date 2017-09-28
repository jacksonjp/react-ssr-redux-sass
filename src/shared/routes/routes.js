//@flow

import Home from '../containers/home';
import List from '../containers/list';
import NotFound from '../containers/notfound';
import ListToUsers from '../containers/listtousers';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list',
    component: ListToUsers
  },
  {
    path: '/users',
    component: List
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;
