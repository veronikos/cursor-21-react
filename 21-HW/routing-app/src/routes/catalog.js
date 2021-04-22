import { CatalogGadgetPage } from "../pages/catalog/gadget";
import { CatalogSportPage } from "../pages/catalog/sport";

export const catalogRoutes = [
    {
        path: '/sport',
        component: CatalogSportPage
    },
    {
        path: '/gadget',
        component: CatalogGadgetPage
    }
]