import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { TiDeleteOutline } from "react-icons/ti";

interface Props {
  onChange: (value: FileList) => void
  defaultValues?: string[]
}

const PhotoInput = ({ onChange, defaultValues }: Props) => {
  const [images, setImages] = useState<string[]>(defaultValues ? defaultValues : [])

  const loadFile: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {
      onChange(event.target.files)
    }
  }

  const onClickDeleteBtn = (img: string) => {
    setImages(images?.filter(val => val !== img))
  }

  return (
    <div className="">
      <Input 
        id="picture" 
        type="file" 
        onChange={loadFile} 
        accept='image/*'
        multiple
      />
      {images && 
        <ul className='flex'>
          {images.map((val) => (
            <li className='relative'>
              <img src={val} className='w-28 z-10'/>
              <button onClick={() => onClickDeleteBtn(val)} className='absolute top-0 right-0 z-20'>
                <TiDeleteOutline />
              </button>
            </li>
          ))}
        </ul>
      }
    </div>
  )
}

export default PhotoInput