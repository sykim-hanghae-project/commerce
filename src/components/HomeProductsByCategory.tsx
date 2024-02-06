import getProductsByCategory from "@/api/getProductsByCategory";
import { IoIosArrowForward } from "react-icons/io";
import ProductContainer from "./ProductContainer";
import { useNavigate } from "react-router-dom";
import formatDocumentDataToProduct from "@/utils/formatDocumentDataToProduct";
import { useQuery } from "@tanstack/react-query";
import Loading from "./Loading";

interface HomeProductsByCategoryProps {
  category: string,
}

const HomeProductsByCategory = ({ category }: HomeProductsByCategoryProps) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: ({ queryKey }) => getProductsByCategory(queryKey[1], 4, "createdAt", "desc", null),
    staleTime: 2000
  })

  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) {
    console.log(error)
    return <></>
  }
  
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
        {data?.docs.map((doc, idx) => (
          <li className="homeProductsContainerProductItem" key={`${category}_product_${idx}`}>
            <ProductContainer product={formatDocumentDataToProduct(doc.data())} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeProductsByCategory