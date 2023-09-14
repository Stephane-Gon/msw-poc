import App from "../App";
import appRoutes from "./routes";

import UsersCreatePage from "../Pages/UsersCreatePage/UsersCreatePage";

const routesConfig = [
  {
    path: appRoutes.HOME,
    element: (
      <App />
    ),
  },
  {
    path: appRoutes.CREATE_USER,
    element: (
      <UsersCreatePage />
    ),
  },
  
];

export default routesConfig;