import { useState } from 'react';
import ProductContainer from './ProductContainer'
import { Product } from '@/types/product';

interface ProductListProps {
  products: Product[],
  onClickFilterItem: (sortby: "createdAt" | "price") => void,
  curSortBy: "createdAt" | "price"
}

const ProductList = ({ products, onClickFilterItem, curSortBy }: ProductListProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)

  return (
    <div>

      <div className='flex text-sm'>
        <p className='w-full'>{`총 ${products ? products.length : 0}개의 상품`}</p>

        <div>
          <p 
            className='font-bold min-w-max cursor-pointer'
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            정렬 기준
          </p>
          <div className={`${isFilterOpen ? "visible" : "invisible"}  flex flex-col justify-end`}>
            <button 
              className={`filterItem ${curSortBy === "createdAt" && "underline"}`} 
              onClick={() => onClickFilterItem("createdAt")}
            >
              최신순
            </button>
            <button 
              className={`filterItem ${curSortBy === "price" && "underline"}`} 
              onClick={() => onClickFilterItem("price")}
            >
              가격순
            </button>
          </div>
        </div>
      </div>

      
      <div>
        <ul className='grid grid-cols-4	gap-10'>
          {products.map((product, idx) => (
            <li key={`product_${idx}`}>
              <ProductContainer product={product} />
            </li>
          ))} 
        </ul>
      </div>
    </div>
  )
}

export default ProductList