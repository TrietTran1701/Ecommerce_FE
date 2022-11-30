import styles from './styles'
import Link from 'next/link'
import { PRODUCT_TYPE } from 'utils/constant'

const Title = ({ productType, productName }) => {
  return (
    <div className="title-page">
      <div className="container">
        <div className="row">
          <div className="col-md-6 inner-title-page">
            <h1>Shop</h1>
            <div className="breadscrum">
              <Link href="/">
                <a>Home</a>
              </Link>
              <span style={{ color: 'white' }}>/</span>
              <Link href="/products">
                <a className={productType == PRODUCT_TYPE.LIST ? 'current' : ''}>Product</a>
              </Link>
              {productType == PRODUCT_TYPE.LIST ? null : (
                <>
                  <span style={{ color: 'white' }}>/</span>
                  <span className={'current'}>{productName}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Title
