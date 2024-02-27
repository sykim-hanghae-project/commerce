import React, { useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { TiDeleteOutline } from "react-icons/ti";
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { TInputImage } from '@/types/product';


interface PhotoContainerProps {
  src: string
  onClickDeleteBtn: () => void
}

const PhotoContainer = React.memo(({ src, onClickDeleteBtn }: PhotoContainerProps) => {
  return (
    <div className='relative'>
      <img src={src} className='w-28 h-28 bg-slate-200 object-cover' alt='Fail'/>
      <button onClick={onClickDeleteBtn} className='absolute top-0 right-0 z-20'>
        <TiDeleteOutline />
      </button>
    </div>
  )
})

interface PhotoInputProps {
  defaultValues?: string[]
  onChange: (images: TInputImage[]) => void
}

const PhotoInput = ({ defaultValues, onChange }: PhotoInputProps) => {
  const [images, setImages] = useState<TInputImage[]>([]) 

  useEffect(() => { 
    console.log("images",images)
    onChange(images)
  }, [images]) // 이미지 삭제/추가가 이루어질때

  //input의 onchange 이벤트 발생(이미지 선택)
  const loadFile: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    if (event.target.files) {//FileList
      const res = convertFileListToTInputImage(event.target.files)
      setImages([...images, ...res])
    }
  }

  function convertFileListToTInputImage(filelist: FileList) {
    const res: TInputImage[] = []
    for (const file of filelist) {
      const newInputImage: TInputImage = {
        isOriginal: false,
        url: URL.createObjectURL(file),
        file: file
      }
      res.push(newInputImage)
    }
    return res
  }

  function deleteImageFromState(url: string) {
    const newImages = images.filter(img => img.url != url)
    setImages(newImages)
  }

  async function covertTypeOfDefaultValToTInputImage(filenames: string[]) {
    const { default: getImageUrl } = await import('@/api/getImageUrl')

    const res: TInputImage[] = []
    for (const filename of filenames) {
      const url = await getImageUrl(filename)
      const newInputImage: TInputImage = {
        isOriginal: true,
        filename: filename,
        url: url,
      }
      res.push(newInputImage)
    }
    return res
  }

  useEffect(() => { //초기 set
    if (defaultValues) {
      covertTypeOfDefaultValToTInputImage(defaultValues)
      .then((res) => setImages(res)) // { isOriginal, filename, url }[]
    }
  }, [defaultValues]) 

  return (
    <div className="">
      <Input 
        id="picture" 
        type="file" 
        accept='image/*'
        multiple
        onChange={loadFile}
      />
      <ScrollArea className='w-full'>
      {images && 
        <ul className='flex border-spacing-2 border rounded mt-2'>
          {images.map((val, idx) => (
            <li key={`photo(${idx})`} className='m-1 shrink-0 overflow-hidden'>
              <PhotoContainer src={val.url} onClickDeleteBtn={()=>deleteImageFromState(val.url)} 
              />
            </li>
          ))}
        </ul>
      }
        <ScrollBar orientation="horizontal" className='bg-gray-200' />
      </ScrollArea>
    </div>
  )
}

export default PhotoInput