import styles from './styles'
import NavBar from 'components/NavBar'
import FeaturedProduct from './FeaturedProduct'
import Footer from '../Utils/Footer'

import dynamic from 'next/dynamic'

const Home = ({ trendingProducts }) => {
  const HeaderBanner = dynamic(() => import('./HeaderBanner'))

  return (
    <>
      <NavBar />
      <div className="container">
        <HeaderBanner />
        <FeaturedProduct trendingProducts={trendingProducts} />
        <Footer />
        <style jsx>{styles}</style>
      </div>
    </>
  )
}

export default Home
