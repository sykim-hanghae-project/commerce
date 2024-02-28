import HomeProductsByCategory from '@/components/HomeProductsByCategory'
import MetaTag from '@/components/MetaTag'

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
        <img 
          className='w-full h-96 object-cover'
          src={`${import.meta.env.BASE_URL}/concept-image.jpg`}
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
    </>
  )
}

export default Home
