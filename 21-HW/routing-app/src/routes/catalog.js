import { CatalogGadgetPage } from "../pages/catalog/gadgets";
import { CatalogSportPage } from "../pages/catalog/sport";

export const catalogRoutes = [
    {
        path: '/sport',
        exact: true,
        component: CatalogSportPage
    },
    {
        path: '/gadget',
        component: CatalogGadgetPage
    }
]