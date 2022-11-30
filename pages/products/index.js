import { useRouter } from 'next/router'
import Product from 'components/Product'
import { PRODUCT_TYPE } from 'utils/constant'
import { getCategoryList, getProductList, getProductStatus } from 'utils/api'

const ProductListPage = ({ productList, categoryList, status, totalStatus, totalProductStatus }) => {
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return (
    <Product
      productType={PRODUCT_TYPE.LIST}
      productData={productList}
      categoryList={categoryList}
      status={status}
      totalStatus={totalStatus}
      totalProductStatus={totalProductStatus}
    />
  )
}

export async function getServerSideProps(context) {
  let page = 1
  if (context.query.page) {
    page = Number(context.query.page)
  }

  let limit = 12
  if (context.query.limit) {
    limit = Number(context.query.limit)
  }

  let sort = null
  if (context.query.sort) sort = context.query.sort

  let categoryName = null
  if (context.query.categoryName) categoryName = context.query.categoryName

  let minPrice = null
  if (context.query.minPrice) {
    minPrice = Number(context.query.minPrice)
  }

  let maxPrice = null
  if (context.query.maxPrice) {
    maxPrice = Number(context.query.maxPrice)
  }

  try {
    const totalStatus = await getProductStatus({ categoryName, minPrice, maxPrice }).then(({ data }) => data)
    const status = await getProductStatus({ categoryName, minPrice, maxPrice, limit, page, sort }).then(
      ({ data }) => data,
    )
    const { data: productList } = await getProductList({
      categoryName,
      minPrice,
      maxPrice,
      page,
      limit,
      sort,
    }).then(({ data }) => data.listRoom)
    const categoryList = await getCategoryList().then(({ data }) => data.listRoom)
    const totalProductStatus = await getProductStatus().then(({ data }) => data)

    return {
      props: {
        productList,
        categoryList,
        totalProductStatus,
        status: { ...status, page: page, limit: limit, categoryName, sort },
        totalStatus: { ...totalStatus, totalPage: Math.ceil(totalStatus.count / 12) },
      },
    }
  } catch (e) {
    return {
      props: {
        productList: [],
        categoryList: [],
        status: { count: 0, minPrice: null, maxPrice: null },
        totalStatus: { count: 0, minPrice: null, maxPrice: null },
      },
    }
  }
}

export default ProductListPage
