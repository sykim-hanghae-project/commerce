import ProductContainer from './ProductContainer'
import { DocumentData } from 'firebase/firestore';
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct';

interface ProductListProps {
  products: {
    docId: string;
    data: DocumentData;
  }[]
}

const ProductList = ({ products }: ProductListProps) => {

  return (
    <div>
      <ul className='grid grid-cols-4	gap-10'>
        {products.map((product, idx) => (
          <li key={`product_${idx}`}>
            <ProductContainer product={formatDocumentDataToProduct(product.data)} />
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default ProductList