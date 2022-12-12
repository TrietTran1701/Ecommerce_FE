import Home from '../components/Home'
import { getProduct } from 'utils/api'

const HomePage = ({ trendingProducts, blogs }) => {
  return <Home trendingProducts={trendingProducts} blogs={blogs} />
}

export async function getStaticProps() {
  try {
    const trendingProducts = await getProduct({ page: 1, limit: 8, minPrice: null, maxPrice: null }).then(
      ({ data }) => {
        return data.listRoom.data
      },
    )

    return {
      props: {
        trendingProducts,
        blogs: [],
      },
      revalidate: 1,
    }
  } catch (e) {
    console.log(e)
    return {
      props: {
        trendingProducts: [],
        blogs: [],
      },
      revalidate: 1,
    }
  }
}

export default HomePage
