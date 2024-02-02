import getProductsByCategory from "@/api/getProductsByCategory";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import ProductContainer from "./ProductContainer";
import { useNavigate } from "react-router-dom";
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct";

interface HomeProductsByCategoryProps {
  category: string,
}

const HomeProductsByCategory = ({ category }: HomeProductsByCategoryProps) => {
  const [products, setProducts] = useState<Product[]>([])

  const navigate = useNavigate()

  async function getProducts() {
    const result = await getProductsByCategory(category, 4, null)
    const formattedResult = result.docs.map(doc => formatDocumentDataToProduct(doc.data()))
    setProducts(formattedResult)
  }

  useEffect(() => {
    getProducts()
  }, [])
  
  const onClickCategory = () => {
    navigate(`/product/list?category=${category}`)
  }

  return (
    <div>
      <button onClick={onClickCategory} className="flex items-center ">
        <p className="text-lg font-bold mr-1">{category}</p>
        <IoIosArrowForward />
      </button>

      <ul className="flex mt-4">
        {products.map((product, idx) => (
          <li className="homeProductsContainerProductItem" key={`${category}_product_${idx}`}>
            <ProductContainer product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeProductsByCategory