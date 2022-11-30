import NavBar from 'components/NavBar'
import Link from 'next/link'
import { ORDER_TYPE } from 'utils/constant'
import OrderDetail from './OrderDetail'
import OrderList from './OrderList'
import styles from './styles'
import Title from './Title'
import { useSelector } from 'react-redux'
import Footer from 'components/Utils/Footer'

const OrderManagement = ({ orderType, orderList, orderDetail, status, setStatus }) => {
  const userSlice = useSelector((state) => state.user)

  return (
    <div className="wrapper">
      <NavBar />
      <Title orderType={orderType} orderId={orderType === ORDER_TYPE.SINGLE ? orderDetail._id : ''} />
      {userSlice.id === null || userSlice.id === undefined ? (
        <div className="container">
          <p>You have not login yet!</p>
          <Link href="/sign-in">
            <a>Click here to login!</a>
          </Link>
        </div>
      ) : (orderList && status == -1 && orderList.length) || (status != -1 && orderList) || orderDetail ? (
        <>
          {orderType === ORDER_TYPE.SINGLE ? (
            <OrderDetail orderDetail={orderDetail} />
          ) : (
            <OrderList orderList={orderList} status={status} setStatus={setStatus} />
          )}
        </>
      ) : (
        <div className="container">
          <p>You do not have any orders.</p>
          <Link href="/products">
            <a>Click here to buy our products!</a>
          </Link>
        </div>
      )}
      <Footer />
      <style jsx>{styles}</style>
    </div>
  )
}

export default OrderManagement
