import App from "../App";
import appRoutes from "./routes";

import UsersCreatePage from "../Pages/UsersCreatePage/UsersCreatePage";
import UsersUpdatePage from "../Pages/UsersUpdatePage/UsersUpdatePage";
import UsersListPage from "../Pages/UsersListPage/UsersListPage";

const routesConfig = [
  {
    path: appRoutes.HOME,
    element: (
      <App />
    ),
  },
  {
    path: appRoutes.UPDATE_USER,
    element: (
      <UsersUpdatePage />
    ),
  },
  {
    path: appRoutes.CREATE_USER,
    element: (
      <UsersCreatePage />
    ),
  },
  {
    path: appRoutes.LIST_USERS,
    element: (
      <UsersListPage />
    ),
  },
  
];

export default routesConfig;