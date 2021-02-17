import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage, MerchantsPage } from "./pages";
import TransactionPage from "./pages/transactions-page/transactions-page";

const routes = [
  {
    path: "/merchants",
    component: MerchantsPage
  },
  {
    path: "/home",
    component: HomePage
  },
  {
    path: "/transactions",
    component: TransactionPage
  }
];

export default routes.map(route => {
  return {
    ...route,
    component: withNavigationWatcher(route.component)
  };
});
