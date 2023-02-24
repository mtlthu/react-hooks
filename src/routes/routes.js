// layouts
import config from '~/config';

//Page
import Home from '~/pages/Home';
import UseState from '~/pages/UseState';
import UseEffect from '~/pages/UseEffect';

//Public routes
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.useState, component: UseState },
  { path: config.routes.useEffect, component: UseEffect },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
