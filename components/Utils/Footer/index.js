import React from 'react'
import styles from './styles'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const FOOTER_INFO = [
    {
      title: 'Information',
      items: [
        {
          name: 'About us',
          path: '#',
        },
        {
          name: 'Contact us',
          path: '#',
        },
        {
          name: 'Location & Working hours',
          path: '#',
        },
        {
          name: 'Our guarantee',
          path: '#',
        },
      ],
    },
    {
      title: 'Services',
      items: [
        {
          name: 'Aquarium decoration design',
          path: '#',
        },
        {
          name: 'Home aquarium decoration',
          path: '#',
        },
        {
          name: 'Installation service',
          path: '#',
        },
      ],
    },
    {
      title: 'Pages',
      items: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Products',
          path: '/products',
        },
        // {
        //   name: 'Blogs',
        //   path: '#',
        // },
        {
          name: 'Checkout',
          path: '/checkout',
        },
      ],
    },
  ]

  return (
    <div className="wrapper">
      <footer className="container">
        <div className="brand-container">
          <div className="brand-logo">
            <Image
              className="logo"
              src="/Dragon Fish - white.png"
              alt="companyLogo"
              width={300}
              height={80}
              objectFit={'contain'}
            />
          </div>
          <div className="brand-desc">
            Born with the desire to bring customers professionalism, prestige with beautiful beauty, we bring the best
            experience to our fish. With many years of experience in the aquarium service industry, including: aquarium
            care, aquarium hotel, home aquarium service, ...
          </div>
          <div className="brand-address">
            <Image src="/icons/Address.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Addr: 268 Ly Thuong Kiet Street, Ward 14, District 10, Ho Chi Minh City</p>
          </div>
          <div className="brand-phone">
            <Image src="/icons/Phone.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Tel: {`(+84)`} 123456789 </p>
          </div>
          <div className="brand-email">
            <Image src="/icons/Mail.svg" alt="address" height={40} width={40} objectFit="contain" />
            <p>Email: dragonfish.assist@gmail.com</p>
          </div>
        </div>
        <div className="information-container">
          {FOOTER_INFO.map((ele, index) => (
            <div className="col" key={index}>
              <div className="col-content">
                <h1>{ele.title}</h1>
                {ele.items.map((item, idx) => (
                  <Link href={item.path} key={idx}>
                    <a>{item.name}</a>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </footer>
      <style jsx>{styles}</style>
    </div>
  )
}

export default Footer
