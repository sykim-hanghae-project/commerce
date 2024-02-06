import { ChangeEvent, useState } from "react";
import { CiSearch } from "react-icons/ci";

interface SearchInputProps {
  onSearch: (keyword: string) => void
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const [input, setInput] = useState<string>("")

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  return (
    <div className='flex border-b border-solid border-black items-center'>
      <input onChange={onChangeInput} className='border-none bg-none focus:outline-none m-2 w-24 text-xs' />
      <button 
        className='button text-base' 
        onClick={() => {
          if (input !== "") onSearch(input)
        }}
      >
        <CiSearch />
      </button> 
    </div>
  )
}

export default SearchInput