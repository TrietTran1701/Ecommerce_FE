import { useState, useEffect } from 'react'
import OrderManagement from 'components/OrderManagement'
import { ORDER_TYPE } from 'utils/constant'
import { useSelector } from 'react-redux'
import { getOrder } from 'utils/api'

const OrderManagementPage = () => {
  const userSlice = useSelector((state) => state.user)

  const [orderList, setOrderList] = useState([])
  const [status, setStatus] = useState(-1)
  console.log(userSlice)

  useEffect(() => {
    const fetchData = async () => {
      if (!userSlice || !userSlice.id) return
      console.log(status)
      const orderList = await getOrder({ userId: userSlice.id, status: status }).then(({ data }) => data.listRoom.data)
      console.log(orderList)

      setOrderList(orderList)
    }
    fetchData()
  }, [status, userSlice])

  // if (!orderList) {
  //   return <h1>Loading ...</h1>
  // }

  return <OrderManagement orderType={ORDER_TYPE.LIST} orderList={orderList} status={status} setStatus={setStatus} />
}

export default OrderManagementPage
