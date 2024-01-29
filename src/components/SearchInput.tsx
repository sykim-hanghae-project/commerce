import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='flex border-b border-solid border-black items-center'>
      <input className='border-none bg-none focus:outline-none m-2 w-24 text-xs' />
      <button className='button text-base'>
        <CiSearch />
      </button> 
    </div>
  )
}

export default SearchInput