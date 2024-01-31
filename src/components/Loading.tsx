import { Oval } from 'react-loader-spinner'

const Loading = () => {
  return (
    <div className='flex justify-center items-center w-full h-full'>
      <Oval color='#D3D3D3' secondaryColor='#000000'/>
    </div>
  )
}

export default Loading