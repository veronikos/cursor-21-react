import { Switch, Route, useRouteMatch } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import { PageHeader } from "../../components/page-header";
import { catalogRoutes } from "../../routes/catalog";

const links = [
  {
    to: "/catalog/sport",
    label: "Sport",
  },
  {
    to: "/catalog/gadget",
    label: "Gadget",
  },
];

export const CatalogPage = () => {
  const { path: basePath } = useRouteMatch();

  return (
    <>
      <PageHeader>Products Page</PageHeader>
      <p>Here you can find all our products</p>
      <Navigation links={links}></Navigation>
      <Switch>
        {catalogRoutes.map(({ path, ...route }) => {
          return <Route key={path} path={basePath + path} {...route} />;
        })}
      </Switch>
    </>
  );
};
