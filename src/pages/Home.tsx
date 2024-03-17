// import HomeProductsByCategory from '@/components/HomeProductsByCategory'
import MetaTag from '@/components/MetaTag'
import ScrollAnimationContainer from '@/components/ScrollAnimationContainer'
import { lazy } from 'react'

const HomeProductsByCategory = lazy(() => import('@/components/HomeProductsByCategory'))

const Home = () => {
  const category = ['Women', 'Men']

  return (
    <>
      <MetaTag 
        title='XSO'
        description='React 쇼핑몰 프로젝트'
        url='https://sykim-hanghae-project.github.io/commerce/'
      />

      <div className='w-full pb-8'>
        <ScrollAnimationContainer>
          <img 
            className='w-full h-screen object-cover'
            src='/concept-image.jpg'
            decoding='async'
          />
        </ScrollAnimationContainer>

        <ScrollAnimationContainer>
          <img 
            className='w-full h-screen object-cover'
            src='/concept-image-2.jpg'
            decoding='async'
          />
        </ScrollAnimationContainer>

        <div className='mt-12'>
          <ul>
          {category.map((name) => (
            <li className='homeProductsContainer' key={`products_${name}`}>
              <HomeProductsByCategory category={name} />
            </li>
          ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
