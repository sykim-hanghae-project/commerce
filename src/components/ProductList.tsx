import ProductContainer from './ProductContainer'
import { useNavigate } from 'react-router-dom'
import { DocumentData } from 'firebase/firestore';
import formatDocumentDataToProduct from '@/utils/formatDocumentDataToProduct';

interface ProductListProps {
  products: {
    docId: string;
    data: DocumentData;
  }[]
}

const ProductList = ({ products }: ProductListProps) => {
  const navigate = useNavigate()

  return (
    <div>
      <ul className='grid grid-cols-4	gap-10'>
        {products.map((product, idx) => (
          <li key={`product_${idx}`} onClick={() => navigate(`/product/${product.docId}`)}>
            <ProductContainer product={formatDocumentDataToProduct(product.data)} />
          </li>
        ))} 
      </ul>
    </div>
  )
}

export default ProductList