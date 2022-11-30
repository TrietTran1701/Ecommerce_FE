import styles from './styles'
import NavBar from 'components/NavBar'
import FeaturedProduct from './FeaturedProduct'
// import BlogPost from './BlogPost'
import Footer from '../Utils/Footer'
import HeaderBanner from './HeaderBanner'

const Home = ({ trendingProducts }) => {
  return (
    <>
      <NavBar />
      <div className="container">
        <HeaderBanner />
        <FeaturedProduct trendingProducts={trendingProducts} />
        {/* <BlogPost blogs={blogs} /> */}
        <Footer />
        <style jsx>{styles}</style>
      </div>
    </>
  )
}

export default Home
