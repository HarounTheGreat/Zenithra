import ProPage from "./Pages/ProPage";
import VolunteeringPage from "./Pages/VolunteeringPage";

const PAGES = {
  pro: <ProPage />,
  volunteering: <VolunteeringPage />,
};

const getPage = () => {
  return PAGES?.pro;
};

const AppRoutes = () => {
  return getPage();
};

export default AppRoutes;
