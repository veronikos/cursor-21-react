import { useParams } from 'react-router'
import { PageHeader } from '../../components/page-header'

const products = {
    35: {
        text: "Hello, I'm 35"
    },
    34: {
        text: "Hello, I'm 34"
    }
}


export const CatalogPageTemplate = () => {

    const { category, productId } = useParams();

    return (
      <>
        <PageHeader level='h2'>{category.toUpperCase()} Goods</PageHeader>
        <p>This is {category} product text</p>
        <p>{products[productId]?.text}</p>
      </>
    )
  }