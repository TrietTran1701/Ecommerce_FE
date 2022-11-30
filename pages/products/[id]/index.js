import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import { getProductDetail } from 'utils/api'

const ProductSinglePage = ({ productData }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return <Product productType={PRODUCT_TYPE.SINGLE} productData={productData} />
}

export async function getServerSideProps({ params }) {
  const { id } = params

  const productData = await getProductDetail({ id }).then(({ data }) => data.data)

  if (!productData) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      productData,
    },
  }
}

export default ProductSinglePage
