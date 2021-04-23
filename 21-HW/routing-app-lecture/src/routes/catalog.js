import { CatalogPageTemplate } from "../pages/catalog/template";

export const catalogRoutes = [
    {
        path: '/:category',
        exact: true,
        component: CatalogPageTemplate
    },
    {
        path: '/:category/:productId',
        component: CatalogPageTemplate
    }
]