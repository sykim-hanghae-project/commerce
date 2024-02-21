import getProductsByCategory from "@/api/getProductsByCategory";
import { IoIosArrowForward } from "react-icons/io";
import ProductContainer from "./ProductContainer";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

interface HomeProductsByCategoryProps {
  category: string,
}

const HomeProductsByCategory = ({ category }: HomeProductsByCategoryProps) => {
  const { data, isError, error } = useQuery({
    queryKey: ['productsByCategory', category],
    queryFn: ({ queryKey }) => getProductsByCategory(queryKey[1], 4, "createdAt", "desc", null),
    staleTime: 2000
  })

  const navigate = useNavigate()

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
        {data.map((product, idx) => (
          <li className="homeProductsContainerProductItem" key={`${category}_product_${idx}`}>
            <ProductContainer product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomeProductsByCategory