import HomeProductsByCategory from '@/components/HomeProductsByCategory'
import React from 'react'

const Home: React.FC = () => {
  const category = ['Women', 'Men']

  return (
    <div className='w-full pb-8'>
      <img 
        className='w-full h-96 object-cover'
        src='https://images.unsplash.com/photo-1504198322253-cfa87a0ff25f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      />

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
  )
}

export default Home
