import { Switch } from "react-router-dom";
import { Navigation } from "../../components/navigation";
import { PageHeader } from "../../components/page-header";

const links = [
  {
    to: "/catalog/sport",
    label: "Sport",
  },
  {
    to: "/catalog/gadgets",
    label: "Gadget",
  },
];

export const CatalogPage = () => {
  return (
    <>
      <PageHeader>Products Page</PageHeader>
      <p>Here you can find all our products</p>
      <Navigation links={links}></Navigation>
      <Switch>

      </Switch>
    </>
  );
};
