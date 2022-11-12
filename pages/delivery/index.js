import axios from 'axios'
import Delivery from 'components/Delivery'
import { useRouter } from 'next/router'

import * as React from 'react'
import Box from '@mui/material/Box'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'

// export default function Delivery({res}){
//     useEffect(() => {
//         if (res.data.status == 'ready_to_pick'){
//             document.getElementById("pick-up").classList.add('text-white');
//             document.getElementById("pick-up").classList.add('bg-dark');
//         }
//     }, []);
//     console.log(res.data.status);
// 	return (
// 		<div className="container">
//             <div height="800px" className="stepper" id="stepper2">
//                 <div className="steps-container">
//                     <div className="steps">
//                         <div className="step" id="1">
//                             <div id="confirm" className="step-title p-3">
//                                 <span className="step-number">01</span>
//                                 <div className="step-text">Confirmed</div>
//                             </div>
//                         </div>
//                         <div><img width='100px' src="/images/arrow.png"/></div>
//                         <div className="step" id="2">
//                             <div id="pick-up" className="step-title p-3">
//                                 <span className="step-number">02</span>
//                                 <div className="step-text">Pick-up</div>
//                             </div>
//                         </div>
//                         <div><img width='100px' src="/images/arrow.png"/></div>
//                         <div className="step" id="3">
//                             <div id="delivering" className="step-title p-3">
//                                 <span className="step-number">03</span>
//                                 <div className="step-text">Delivering</div>
//                             </div>
//                         </div>
//                         <div><img width='100px' src="/images/arrow.png"/></div>
//                         <div className="step" id="4">
//                             <div id="delivered" className="step-title p-3">
//                                 <span className="step-number">04</span>
//                                 <div className="step-text">Delivered</div>
//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>
// 		</div>
// 	);
// }
const steps = ['Confirmed', 'Pick-up', 'Delivering', 'Delivered']

let date = new Date()
const DeliveryPage = ({ res }) => {
  // console.log(res.data)
  // console.log(res2)
  console.log(date)
  console.log(res.data.leadtime)
  console.log(res.data.pickup_time)
  // useEffect(() => {
  //     document.getElementById('stepper2').style.marginTop = '100px';
  //     document.getElementById('stepper2').style.marginBottom = '100px';

  //     if (res.data.status == 'ready_to_pick'){
  //         document.getElementById("pick-up").classList.add('text-white');
  //         document.getElementById("pick-up").classList.add('bg-dark');
  //     }
  // }, []);
  const router = useRouter()
  if (router.isFallback) {
    return <h1>Loading ...</h1>
  }

  return (
    <div className="container">
      <Delivery></Delivery>
      <div className="deliveryImage" style={{ 'text-align': 'center' }}>
        <img src="/images/scooter_1.gif" className="image" height="350px" />
      </div>
      <Box sx={{ width: '100%', marginTop: '100px', marginBottom: '100px' }}>
        <Stepper id="hello" activeStep={res.data.status == 'ready_to_pick' ? 1 : 0} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      {/* <div height="800px" className="stepper" id="stepper2">
                <div className="steps-container">
                    <div className="steps">
                        <div className="step" id="1">
                            <div id="confirm" className="step-title p-3">
                                <span className="step-number">01</span>
                                <div className="step-text">Confirmed</div>
                            </div>
                        </div>
                        <div><img width='100px' src="/images/arrow.png"/></div>
                        <div className="step" id="2">
                            <div id="pick-up" className="step-title px-4">
                                <span className="step-number">02</span>
                                <div className="step-text">Pick-up</div>
                            </div>
                        </div>
                        <div><img width='100px' src="/images/arrow.png"/></div>
                        <div className="step" id="3">
                            <div id="delivering" className="step-title p-3">
                                <span className="step-number">03</span>
                                <div className="step-text">Delivering</div>
                            </div>
                        </div>
                        <div><img width='100px' src="/images/arrow.png"/></div>
                        <div className="step" id="4">
                            <div id="delivered" className="step-title p-3">
                                <span className="step-number">04</span>
                                <div className="step-text">Delivered</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <div style={{ 'margin-left': '710px', border: '1px solid black', width: '500px' }}>
        <ul>
          <li style={{ padding: '10px' }}>
            Pick up time: {res.data.pickup_time.toString().slice(0, 10)} at{' '}
            {res.data.pickup_time.toString().slice(11, 19)}
          </li>
          <li style={{ padding: '10px' }}>Departure: {res.data.from_address}</li>
          <li style={{ padding: '10px' }}>Destination: {res.data.to_address}</li>
          <li style={{ padding: '10px' }}>
            Expected arrival time:{' '}
            <span style={{ color: 'red' }}>
              {res.data.leadtime.toString().slice(0, 10)} at {res.data.leadtime.toString().slice(11, 19)}
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default DeliveryPage

export async function getServerSideProps(context) {
  const res = await axios
    .post(
      'https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/detail',
      { order_code: 'LLGA9M' },
      {
        headers: {
          Token: '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
          'Content-Type': 'application/json',
        },
      },
    )
    .then((response) => {
      return response.data
    })

  if (!res) {
    return {
      notFound: true,
    }
  }

  // const res2 = await axios.post('https://dev-online-gateway.ghn.vn/shiip/public-api/v2/shipping-order/leadtime',{
  //     "from_district_id": 1453,
  //     "from_ward_code": "21105",
  //     "to_district_id": 1452,
  //     "to_ward_code": "21014",
  //     "service_id": 53320
  // },
  // {
  //     headers: {
  //         'Token': '5afa38c1-5c4b-11ed-b8cc-a20ef301dcd7',
  //         'Content-Type': 'application/json'
  //     }
  // }).then((response)=>{
  //     return response.data;
  // });

  if (!res) {
    return {
      notFound: true,
    }
  }

  return {
    props: { res }, // will be passed to the page component as props
  }
}