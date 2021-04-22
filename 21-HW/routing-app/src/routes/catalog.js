import { CatalogGadgetPage } from "../pages/catalog/gadgets";
import { CatalogSportPage } from "../pages/catalog/sport";

export const catalogRoutes = [
    {
        path: '/catalog/sport',
        component: CatalogSportPage
    },
    {
        path: '/catalog/gadgets',
        component: CatalogGadgetPage
    }
]