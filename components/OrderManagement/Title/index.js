import styles from './styles'
import Link from 'next/link'

const Title = ({ orderId }) => {
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
              <Link href="/order-management">
                <a className={!orderId ? 'current' : ''}>Order Management</a>
              </Link>
              {orderId ? (
                <>
                  <span style={{ color: 'white' }}>/</span>
                  <span className={'current'}>{orderId}</span>
                </>
              ) : (
                ''
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
