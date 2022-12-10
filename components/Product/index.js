import styles from './styles'
import ProductSingle from './ProductSingle'
import ProductList from './ProductList'
import Title from 'components/Product/Utils/Title'
import { PRODUCT_TYPE } from 'utils/constant'
import NavBar from 'components/NavBar'
import Footer from 'components/Utils/Footer'

const Product = ({ productType, productData, categoryList = [], status, totalStatus, totalProductStatus }) => {
  return (
    <div className="product-wrapper">
      <NavBar />
      <Title productType={productType} productName={productType === PRODUCT_TYPE.SINGLE ? productData.name : ''} />
      {productType === PRODUCT_TYPE.SINGLE ? (
        <ProductSingle isModel={false} productSingleData={productData} />
      ) : (
        <ProductList
          productListData={productData}
          categoryList={categoryList}
          status={status}
          totalStatus={totalStatus}
          totalProductStatus={totalProductStatus}
        />
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default Product
