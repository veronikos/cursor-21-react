import { Switch } from 'react-router'
import { Navigation } from '../../components/navigation'
import { PageHeader } from '../../components/page-header'

export const CatalogPage = () => {
    return (
      <>
        <PageHeader>Products Page</PageHeader>
        <p>Here you can find all our products</p>
        <Navigation />
        <Switch>
            
        </Switch>
      </>
    )
  }
