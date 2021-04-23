import { AboutPage } from "../pages/about";
import { ContactsPage } from "../pages/contacts";
import { HomePage } from "../pages/home";
import { AccountPage } from "../pages/account";
import { NotAllowedPage } from "../pages/restricted";
import { CatalogPage } from "../pages/catalog";

export const appRoutes = [
    {
        path: '/',
        exact: true,
        component: HomePage
    },
    {
        path: '/about',
        component: AboutPage
    },
    {
        path: '/contacts',
        component: ContactsPage
    },
    {
        path: '/catalog',
        component: CatalogPage
    },
    {
        path: '/account',
        component: AccountPage,
        isPrivate: true
    },
    {
        path: '/restricted',
        component: NotAllowedPage,
    }
]